import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddEditFlight = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    airline: "",
    logo: "",
    origin: "",
    destination: "",
    date: "",
    depart: "",
    arrive: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFlight = { id: Date.now(), ...formData };
  
    setFormData({
      airline: "",
      logo: "",
      origin: "",
      destination: "",
      date: "",
      depart: "",
      arrive: "",
      price: "",
    });
  };

  return (
    <Box sx={{p:3}}>
         <Typography variant="h5" gutterBottom sx={{p:2}}>
      ✈ Manage Flights
    </Typography>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 2,
        mb: 4,
        p: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        background: "#fafafa",
      }}
    >
      <Typography variant="h6" sx={{ gridColumn: "1 / -1", mb: 1 }}>
        ➕ Add New Flight
      </Typography>

      <TextField
        label="Airline"
        name="airline"
        value={formData.airline}
        onChange={handleChange}
        required
      />
      
      <TextField
        label="Logo"
        name="logo"
        value={formData.logo}
        onChange={handleChange}
        required
      />
      <TextField
        label="Origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        required
      />
      <TextField
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        required
      />
      <TextField
        label="Date"
        type="date"
        name="date"
        InputLabelProps={{ shrink: true }}
        value={formData.date}
        onChange={handleChange}
        required
      />
      <TextField
        label="Departure Time"
        name="depart"
        value={formData.depart}
        onChange={handleChange}
        required
      />
      <TextField
        label="Arrival Time"
        name="arrive"
        value={formData.arrive}
        onChange={handleChange}
        required
      />
      <TextField
        label="Price (₹)"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
             
    </Box>

     <Box sx={{p:3}}>
               <Button type="submit" variant="contained" color="primary">
                 Save Flight
               </Button>
               <Button variant="outlined" onClick={()=>{navigate("/admin/flights")}} sx={{ ml: 2 }}>
                 Back to List
               </Button>
         </Box>
         </Box>
  );
};

export default AddEditFlight;
