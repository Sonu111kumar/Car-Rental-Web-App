import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,

} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Flights = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "Saudia",
      logo: "logo192.png",
      origin: "BLR",
      destination: "DEL",
      date: "2025-09-10",
      depart: "4:19 pm",
      arrive: "5:50 pm",
      price: 9500,
    },
    {
      id: 2,
      airline: "Vistara",
      logo: "logo192.png",
      origin: "BLR",
      destination: "DEL",
      date: "2025-09-10",
      depart: "7:33 am",
      arrive: "8:57 am",
      price: 1500,
    },
  ]);

 
  const handleDelete = (id) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  return (
    <Box sx={{ p: 3}}>
      

      {/* Flight List */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, p:3}}>
             <Typography variant="h5">Available Flight </Typography>
             <Button variant="contained" onClick={()=>{navigate("/admin/addFlight")}}>
               Add New Flight
             </Button>
           </Box>

      
        {flights.map((flight) => (
       
            <Card sx={{ display: "flex", justifyContent: "space-between", p: 2 ,mb:4 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  ₹{flight.price} &nbsp; | &nbsp; {flight.origin} → {flight.destination}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {flight.airline} ({flight.date})
                </Typography>
                <Typography variant="body2">
                  Depart: {flight.depart} &nbsp; | &nbsp; Arrive: {flight.arrive}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {flight.logo && (
                  <img
                    src={flight.logo}
                    alt={flight.airline}
                    style={{ width: 60, height: 60, objectFit: "contain" }}
                  />
                )}
                <CardActions>
                  <Button variant="outlined" color="warning" sx={{m:3}}>
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{mr:3}}
                    onClick={() => handleDelete(flight.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Box>
            </Card>
         
        ))}
 
    </Box>
  );
};

export default Flights;
