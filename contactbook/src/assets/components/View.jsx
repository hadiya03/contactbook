import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  // Fetch contacts on mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:3005/view');
      setContacts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setContacts([]);
    }
  };

  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3005/delete/${id}`);
      alert(res.data.message);
      fetchContacts();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const editContact = (contact) => {
    navigate('/add', { state: { val: contact } });
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Apply search
  const filtered = contacts.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      (c.Name && c.Name.toLowerCase().includes(q)) ||
      (c.Email && c.Email.toLowerCase().includes(q)) ||
      (c.phone && c.phone.toString().includes(q))
    );
  });

  // Apply sort
  const sorted = [...filtered].sort((a, b) => {
    const nameA = a.Name?.toLowerCase() || '';
    const nameB = b.Name?.toLowerCase() || '';
    return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  return (
    <Box sx={{ p: 4, minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📇 My Contacts
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          <TextField
            label="Search by Name, Email or Phone"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={toggleSortOrder}>
            Sort by Name ({sortOrder === 'asc' ? 'A → Z' : 'Z → A'})
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Phone</TableCell>
                <TableCell sx={{ color: 'white' }}>Email</TableCell>
                <TableCell sx={{ color: 'white' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sorted.length > 0 ? (
                sorted.map((contact) => (
                  <TableRow key={contact._id}>
                    <TableCell>{contact.Name || 'N/A'}</TableCell>
                    <TableCell>{contact.phone || 'N/A'}</TableCell>
                    <TableCell>{contact.Email || 'N/A'}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => editContact(contact)}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => deleteContact(contact._id)}
                        >
                          Delete
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No matching contacts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default View;
