import './App.css';
import './output.css'
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/home';
import Holidays from './Components/Holidays/Holidays';
// import Flights from './Components/Flights/Flights';
import Hotels from './Components/Hotels/Hotels';
import GiftCard from './Components/Gift Cards/GiftCard';
import Offers from './Components/Offers/Offers';
import Register from './Components/Authentication/Register';
import List from './Components/Hotels/List';
import HotelPage from './Components/Hotels/HotelPage';
import Login from './Components/Authentication/Login';
import HotelUserDetails from './Components/Hotels/HotelUserDetails';
import TopNavbar from './Components/TopNavBar/TopNavbar';
import Detail from './Components/Flights/Detail';
import Search from "./Components/Flights/Search"
import DForm from './Components/Holidays/DForm'
import MyProfile from './Components/MyProfile';
import Admin_Dashboard from './Admin/Dashboard/Admin_Dashboard';
import Admin_Navbar from './Admin/Navbar/Admin_Navbar';
import { useContext } from 'react';
import AddEditPackage from './Admin/Tours&Packages/AddEditPackage';
import { AuthContext } from './Components/Authentication/AuthContext';
import ToursAndPackages from './Admin/Tours&Packages/ToursAndPackages';
import Flights from './Admin/Flights/Flights';
import ManageUsers from './Admin/Users/ManageUsers';
import AdminHotels from './Admin/Hotels/Hotels';
import AddEditHotel from './Admin/Hotels/AddEditHotel';
import AddEditFlight from './Admin/Flights/AddEditFlight';
function App() {
  const { role } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        {console.log(role)}
        {role == "ADMIN" ? <Admin_Navbar /> : <TopNavbar />}
        {role == "USER" ? <Navbar /> : null}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path='/admin/addPackage' element={<AddEditPackage />} />
          <Route path='/admin/addHotel' element={<AddEditHotel />} />
          <Route path='/admin/addFlight' element={<AddEditFlight />} />
          <Route path='/admin' element={<Admin_Dashboard />} />
          <Route path='/admin/packages' element={<ToursAndPackages />} />
          <Route path='/admin/flights' element={<Flights />} />
          <Route path='/admin/users' element={<ManageUsers />} />
          <Route path='/admin/hotels' element={<AdminHotels />} />
          <Route path="/gift-cards" element={<GiftCard />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/hotels/list" element={<List />} />
          <Route path="/hotels/list/hotelpages" element={<HotelPage />} />
          <Route path="/hotels/hoteluserdetails" element={<HotelUserDetails />} />


          <Route path="/details" element={<Detail />} />
          <Route path="/flight" element={<Search />} />
          <Route path="/dform/" element={<DForm />} />
          <Route path="/myprofile/" element={<MyProfile />} />




        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
