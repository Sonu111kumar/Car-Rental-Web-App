import { MdOutlineEditNote } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ToursAndPackages() {
  const navigate = useNavigate();

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Goa 3N/4D",
      destination: "Goa",
      price: 25000,
      duration: "4 Days, 3 Nights",
      status: "Active",
    },
    {
      id: 2,
      name: "Dubai Luxury Trip",
      destination: "Dubai",
      price: 60000,
      duration: "5 Days, 4 Nights",
      status: "Inactive",
    },
  ]);

  const handleDelete = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
         Packages
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={()=>{navigate("/admin/addPackage")}}
        sx={{ mb: 2 }}
      >
        Add New Package
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package Name</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell>{pkg.name}</TableCell>
                <TableCell>{pkg.destination}</TableCell>
                <TableCell>₹{pkg.price}</TableCell>
                <TableCell>{pkg.duration}</TableCell>
                <TableCell>{pkg.status}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/admin/edit-package/${pkg.id}`)}
                  >
                    <MdOutlineEditNote/>
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(pkg.id)}
                  >
                    <MdDelete/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ToursAndPackages



