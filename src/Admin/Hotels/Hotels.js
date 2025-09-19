import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// List of Hotels (Admin View) in Cards
const Hotels = () => {
  const navigate = useNavigate();
  const [hotels,setHotels] = useState([]);

  const getAllHotels = ()=>{
    axios.get("http://localhost:8080/api/hotel/fetch").then((d)=>{
      console.log(d)
      setHotels(d.data.hotels)
    })
  }

  useEffect(()=>{
          getAllHotels()
  },[])

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, p:3}}>
        <Typography variant="h5">Hotels </Typography>
        <Button variant="contained" onClick={()=>{navigate("/admin/addHotel")}}>
          Add New Hotel
        </Button>
      </Box>

      <Grid container spacing={3} sx={{p:3}}>
        {hotels.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="180"
                image="/img/paris.jpeg"
                alt={hotel.name}
              />
              <CardContent>
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.street}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                  ₹{hotel.pricePerDay} / night
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Edit
                </Button>
                <Button size="small" color="error">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Hotels;