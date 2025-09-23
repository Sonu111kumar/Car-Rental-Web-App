import React, { useState, useEffect, useContext } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlinePayments } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { TbFileAnalytics } from 'react-icons/tb';
import { RiHotelLine } from 'react-icons/ri';
import { MdFlight } from 'react-icons/md';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { MdOutlinePayment } from 'react-icons/md';
import AddEditHotel from '../Hotels/AddEditHotel';
import { AuthContext } from '../../Components/Authentication/AuthContext';
import Admin_Dashboard from '../Dashboard/Admin_Dashboard';
import ToursAndPackages from '../Tours&Packages/ToursAndPackages';
import AddEditPackage from '../Tours&Packages/AddEditPackage';
import Hotels from '../Hotels/Hotels';
import Flights from '../Flights/Flights';
import AddEditFlight from '../Flights/AddEditFlight';
import Users from '../Users/ManageUsers';
import { logOut } from '../../services/StorageService';

const Admin_Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
   
    const { setRole } = useContext(AuthContext)
    const handleLogout = () => {
        logOut();
        setRole(null)
        navigate("/login");
    }

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin" selected={location.pathname === "/admin"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <AiOutlineUserSwitch size={25} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/users" selected={location.pathname === "/admin/users"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <BiUser size={25} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/packages" selected={location.pathname === "/admin/packages"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <MdOutlinePayment size={25} />
          </ListItemIcon>
          <ListItemText primary="Packages" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/hotels" selected={location.pathname === "/admin/hotels"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <RiHotelLine size={25} />
          </ListItemIcon>
          <ListItemText primary="Hotels" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/flights" selected={location.pathname === "/admin/flights"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <MdFlight size={25} />
          </ListItemIcon>
          <ListItemText primary="Flights" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/admin/bookings" selected={location.pathname === "/admin/bookings"}>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <MdOutlineLibraryBooks size={25} />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItemButton>
      </ListItem>
    </List>

    <Divider />

    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <MdOutlinePayments size={25} />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <TbFileAnalytics size={25} />
          </ListItemIcon>
          <ListItemText primary="Reports & Analytics" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{ minWidth: 35 }}>
            <FiSettings size={25} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

    return (
        <Box>
            <AppBar position="static" color="transparent" elevation={9}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <IconButton onClick={toggleDrawer(true)}><BiMenu /></IconButton>
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Typography>


                    <>
                        <Link to="/myprofile/" style={{ textDecoration: "none", marginRight: "10px" }}>
                            <Typography sx={{ color: "green", fontWeight: "bold" }}>My Profile</Typography>
                        </Link>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>

                </Toolbar>
            </AppBar>
         
        </Box>

    );
}

export default Admin_Navbar;
