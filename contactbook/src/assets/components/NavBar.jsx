import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='absolute'
                sx={{backgroundColor:'#333333',
                  color:'white'
                  
                }}
        > 
            <Toolbar >
                <Typography variant="h5"   sx={{ml:2,color:'white'}}>CONTACT_BOOK</Typography>
                <Box sx={{marginLeft:'auto'}}>
                <Link to="/Login">
                <Button variant="contained" sx={{backgroundColor:'white',color:'grey'}}>Login</Button> 
                </Link>&nbsp;

                <Link to="/Signup">
                <Button variant="contained" sx={{backgroundColor:'white',color:'grey'}}>Signup</Button>
                </Link>&nbsp;

                <Link to="/Add">
                <Button variant="contained" sx={{backgroundColor:'white',color:'grey'}}>Add</Button> 
                </Link>&nbsp;

                <Link to="/View">
                <Button variant="contained" sx={{backgroundColor:'white',color:'grey'}}>View</Button> 
                </Link>&nbsp;

                <Link to="/Ab">
                <Button variant="contained" sx={{backgroundColor:'white',color:'grey'}}>Aboutus</Button>
                </Link>

                 </Box>
    

                
            </Toolbar>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default NavBar