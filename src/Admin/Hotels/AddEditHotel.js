import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
 TextField
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const AddEditHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    locationId: "",
    pricePerDay: "",
    description:"",
    emailId:"",
    pincode:"",
    totalRoom:"",
    street:"",
    userId:""
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
   axios.post("http://localhost:8080/api/hotel/add",formData).then(()=>{
    toast.success(`Hotel Added Successfully`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
      )
   })
  };

  return (
    <Box sx={{m:5}}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add Hotel
      </Typography>
      <form onSubmit={handleSubmit}>
         {/* Image Upload */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label">
            Upload Hotel Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>

        {/* Preview */}
        {preview && (
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={preview}
              alt="Hotel Preview"
              style={{
                width: "400px",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        )}
        <TextField
          label="Hotel Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
         <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="LocationId"
          name="locationId"
          value={formData.locationId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
          <TextField
          label="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
          <TextField
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
          <TextField
          label="Total Room"
          name="totalRoom"
          value={formData.totalRoom}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price per Day"
          name="pricePerDay"
          type="number"
          value={formData.pricePerDay}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
          <TextField
          label="Email id"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
         <TextField
          label="User Id"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

       

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" >
            Save Hotel
          </Button>
          <Button variant="outlined" onClick={()=>{navigate("/admin/hotels")}} sx={{ ml: 2 }}>
            Back to List
          </Button>
        </Box>
      </form>
      <ToastContainer/>
    </Box>
   
  );
};
export default AddEditHotel;