import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

// Icons
import { RiHotelLine } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const Admin_Dashboard = () => {
  const navigate = useNavigate();

  // ✅ Stats for cards
  const stats = [
    { title: "Users", count: 0, icon: <FaUmbrellaBeach size={35} color="green" />, link: "/admin/users" },
    { title: "Flights", count: 45, icon: <MdFlight size={35} color="blue" />, link: "/admin/flights" },
    { title: "Hotels", count: 78, icon: <RiHotelLine size={35} color="orange" />, link: "/admin/hotels" },
    { title: "Packages", count: 32, icon: <BiSolidOffer size={35} color="purple" />, link: "/admin/packages" },
    { title: "Offers", count: 10, icon: <AiOutlineGift size={35} color="red" />, link: "/admin/offers" },
  ];

  // ✅ Mock bookings data for table
  const bookingRows = [
    { id: 1, user: "John Doe", type: "Hotel", name: "Taj Palace", date: "2025-09-10", status: "Confirmed" },
    { id: 2, user: "Alice Smith", type: "Flight", name: "AI-202 Delhi → Mumbai", date: "2025-09-12", status: "Pending" },
    { id: 3, user: "David Johnson", type: "Package", name: "Goa Holiday", date: "2025-09-14", status: "Cancelled" },
    { id: 4, user: "Emily Davis", type: "Hotel", name: "Oberoi Udaipur", date: "2025-09-15", status: "Confirmed" },
  ];

  const bookingColumns = [
    { field: "user", headerName: "User", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "name", headerName: "Name", flex: 2 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  // ✅ Mock chart data
  const bookingTrends = [
    { month: "Jan", bookings: 30 },
    { month: "Feb", bookings: 45 },
    { month: "Mar", bookings: 60 },
    { month: "Apr", bookings: 40 },
    { month: "May", bookings: 80 },
    { month: "Jun", bookings: 55 },
  ];

  // ✅ Revenue breakdown data
  const revenueData = [
    { name: "Hotels", value: 450000 },
    { name: "Flights", value: 300000 },
    { name: "Packages", value: 250000 },
  ];

  const COLORS = ["#ff9800", "#1976d2", "#9c27b0"];

  // ✅ Monthly revenue growth (Bar Chart)
  const monthlyRevenue = [
    { month: "Jan", revenue: 200000 },
    { month: "Feb", revenue: 250000 },
    { month: "Mar", revenue: 300000 },
    { month: "Apr", revenue: 280000 },
    { month: "May", revenue: 350000 },
    { month: "Jun", revenue: 400000 },
  ];

  // ✅ Notifications & Tasks
  const notifications = [
    { id: 1, text: "5 pending hotel approval requests", icon: <FaExclamationCircle color="orange" /> },
    { id: 2, text: "2 new user signups today", icon: <MdCheckCircle color="green" /> },
    { id: 3, text: "1 cancelled booking requires attention", icon: <MdNotificationsActive color="red" /> },
    { id: 4, text: "Monthly revenue report is ready", icon: <MdCheckCircle color="blue" /> },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📊 Admin Dashboard
      </Typography>

      {/* Top Stats Cards */}
      <Grid container spacing={3}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ width: "18%" }}>
            <Card
              sx={{
                p: 1,
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                {item.icon}
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" fontWeight="bold" sx={{ my: 1 }}>
                  {item.count}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => navigate(item.link)}
                >
                  Manage {item.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Middle Row: Chart */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          📈 Bookings Trend
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={bookingTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bookings" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Recent Bookings FULL WIDTH */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          🛎️ Recent Bookings
        </Typography>
        <div style={{ height: 350, width: "100%" }}>
          <DataGrid rows={bookingRows} columns={bookingColumns} pageSize={5} />
        </div>
      </Box>

    {/* Bottom Row: Notifications + Revenue Breakdown */}
<Grid container spacing={3} sx={{ mt: 5,mb:5, px: 4 ,justifyContent:"space-between"}}>
  {/* Notifications / Tasks */}
  <Grid item xs={12} md={3}>
    <Typography variant="h5" gutterBottom>
      🔔 Notifications & Tasks
    </Typography>
    <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%" }}>
      <CardContent>
        <List>
          {notifications.map((note, i) => (
            <React.Fragment key={note.id}>
              <ListItem>
                <ListItemIcon>{note.icon}</ListItemIcon>
                <ListItemText primary={note.text} />
              </ListItem>
              {i < notifications.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  </Grid>

  {/* Revenue Breakdown Pie Chart */}
  <Grid item xs={12} md={6} sx={{width:"40%"}}>
    <Typography variant="h5" gutterBottom>
      💰 Revenue Breakdown
    </Typography>
    <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%", p: 2 }}>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart
          margin={{ top: 30, right: 30, bottom: 5, left: 30 }} // balanced margins
        >
          <Pie
            data={revenueData}
            dataKey="value"
            nameKey="name"
            cx="50%" // center horizontally
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            labelLine={false}
            label={({ name, value }) => `${name} (${value})`}
          >
            {revenueData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={30} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  </Grid>

  {/* Monthly Revenue Growth (Bar Chart) */}
  <Grid item xs={12} md={3}>
    <Typography variant="h5" gutterBottom>
      📊 Monthly Revenue Growth
    </Typography>
    <Card sx={{ borderRadius: 3, boxShadow: 3, height: "100%", p: 2 }}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={monthlyRevenue}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  </Grid>
</Grid>


    </Box>
  );
};

export default Admin_Dashboard;
