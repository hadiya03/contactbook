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
  Typography
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [contacts, setContacts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    const nameA = typeof a?.name === 'string' ? a.name.toLowerCase() : '';
    const nameB = typeof b?.name === 'string' ? b.name.toLowerCase() : '';
    return sortOrder === 'asc'
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📇 My Contacts
        </Typography>

        <Box textAlign="center" mb={3}>
          <Button
            variant="contained"
            onClick={toggleSortOrder}
            color="secondary"
          >
            Sort by Name ({sortOrder === 'asc' ? 'A → Z' : 'Z → A'})
          </Button>
        </Box>

        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}><b>Name</b></TableCell>
                <TableCell sx={{ color: 'white' }}><b>Phone No</b></TableCell>
                <TableCell sx={{ color: 'white' }}><b>Email</b></TableCell>
                <TableCell sx={{ color: 'white' }}><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedContacts.map((contact) => (
                <TableRow key={contact._id} hover>
                  <TableCell>{contact.name || 'N/A'}</TableCell>
                  <TableCell>{contact.phone || 'N/A'}</TableCell>
                  <TableCell>{contact.email || 'N/A'}</TableCell>
                  <TableCell>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(contact._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdate(contact._id)}
                      >
                        Update
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {sortedContacts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No contacts found.
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
