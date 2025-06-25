import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [con, setCon] = useState({ Name: "", phone: "", Email: "" });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setCon({
        Name: location.state.val.Name,
        phone: location.state.val.phone,
        Email: location.state.val.Email,
      });
    }
  }, [location.state]);

  const inputHandler = (e) => {
    setCon({ ...con, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    if (location.state !== null) {
      axios.put(`http://localhost:3005/update/${location.state.val._id}`, con)
        .then((res) => {
          alert(res.data.message);
          navigate("/view");
        })
        .catch((err) => console.error(err));
    } else {
      axios.post("http://localhost:3005/add", con)
        .then((res) => {
          alert(res.data.message);
          navigate("/view");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <TextField
        label="Name"
        variant="filled"
        name="Name"
        value={con.Name}
        onChange={inputHandler}
      />
      <TextField
        label="Phone no"
        variant="filled"
        name="phone"
        value={con.phone}
        onChange={inputHandler}
      />
      <TextField
        label="E-mail"
        variant="filled"
        name="Email"
        value={con.Email}
        onChange={inputHandler}
      />
      <Button variant="contained" color="secondary" onClick={addHandler}>
        {location.state !== null ? "Update" : "Add"}
      </Button>
    </div>
  );
};

export default Add;
