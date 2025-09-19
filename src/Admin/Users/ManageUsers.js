import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
} from "@mui/material";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      role: "USER",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya@example.com",
      role: "USER",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      role: "ADMIN",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };

  const handleView = (id) => {
    alert(`View details of user ID: ${id}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        👥 Manage Users
      </Typography>

      {users.map((user) => (
        <Card
          key={user.id}
          sx={{
            width: "100%",
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 56, height: 56 }} />
            <Box>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color: user.role === "ADMIN" ? "red" : "green",
                }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>

          <CardActions>
            <Button variant="outlined" onClick={() => handleView(user.id)}>
              View
            </Button>
            <Button variant="outlined" color="warning" onClick={() => handleEdit(user.id)}>
              Edit
            </Button>
            <Button variant="outlined" color="error" onClick={() => handleDelete(user.id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ManageUsers;
