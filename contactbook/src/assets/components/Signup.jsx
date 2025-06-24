import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
     <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://img.freepik.com/free-vector/calling-concept-illustration_114360-3356.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundRepeat:'no-repeat'
      }}
    >
      <Paper elevation={0} sx={{ width:'350',backgroundColor:'transparent',color:'#fff', padding: 10, width: 320 ,boxShadow:'0px 8px 24px rgba(0,0,0,0.2)',border:'none',borderRadius:3,backdropFilter:'none',textAlign:'center'}}>
        <Typography variant="h5" align="center" color='black' >
          SIGNUP PAGE
        </Typography>
        
        <TextField label="Name" type="text" fullWidth margin="normal" />
        <TextField label="Address" type="text" fullWidth margin="normal" />
        <TextField label="Phone" type="text" fullWidth margin="normal" />
        <TextField label="E-mail" type="text" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal"/>
        
        <Button variant="contained" fullWidth color="primary" sx={{ mt: 2 }} >
          SIGNIN
        </Button>
      </Paper>
    </Box>
  );
};
  

export default Signup