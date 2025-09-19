import React, { useState, useEffect } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from 'react-router-dom';

const TopNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (example: check token in localStorage)
    const token = localStorage.getItem("token"); // or "user"

    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token on logout
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={9}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>

          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={handleRegister}>Signup</Button>
              <Button color="inherit" onClick={handleLogin}>Login</Button>
            </>
          ) : (
            <>
              <Link to="/myprofile/" style={{ textDecoration: "none", marginRight: "10px" }}>
                <Typography sx={{ color: "green", fontWeight: "bold" }}>My Profile</Typography>
              </Link>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNavbar;
