import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const AddEditPackage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState(null); // store selected image
  const [preview, setPreview] = useState(null); // preview for UI
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    price: "",
    duration: "",
    includesFlight: false,
    includesMeals: false,
    status: true,
  });

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // show preview
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Package Data:", formData);
    navigate("/admin/packages"); // redirect back to list
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        {id ? "Edit Package" : "Add New Package"}
      </Typography>

      <form onSubmit={handleSubmit}>


        {/* Image Upload */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" component="label">
            Upload Image
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </Button>
        </Box>

        {/* Preview */}
        {preview && (
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "400px",       // bigger size (you can increase/decrease)
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
            />
          </Box>
        )}

        <TextField
          label="Package Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Duration (e.g., 5 Days, 4 Nights)"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.includesFlight}
              onChange={handleChange}
              name="includesFlight"
            />
          }
          label="Includes Flight"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.includesMeals}
              onChange={handleChange}
              name="includesMeals"
            />
          }
          label="Includes Meals"
        />

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            {id ? "Update Package" : "Save Package"}
          </Button>
          <Button
            onClick={()=>{navigate("/admin/packages")}
            }
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddEditPackage;
