import React, { useState, useEffect ,useContext} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { getToken,logOut } from '../../services/StorageService';
import { Link, useNavigate } from 'react-router-dom';


const UserNavbar = () => {
 
  const navigate = useNavigate();


  const handleLogout = () => {
    logOut();
    navigate("/login");
  }

  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={9}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>

        
        
            <>
              <Link to="/myprofile/" style={{ textDecoration: "none", marginRight: "10px" }}>
                <Typography sx={{ color: "green", fontWeight: "bold" }}>My Profile</Typography>
              </Link>
              <Button color="inherit" onClick={()=>{handleLogout()}}>Logout</Button>
            </>
     
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default UserNavbar;
