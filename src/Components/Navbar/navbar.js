import React from 'react'
import "./navbar.css";
import logo from "../../assets/PlanNGO.png"
import { Link,NavLink } from 'react-router-dom';
import { RiHotelLine } from 'react-icons/ri';
import { MdFlight } from 'react-icons/md';
import { BiSolidOffer } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
   <>
    
    
   
        <CardContent sx={{ flex: '1 0 auto' }}>
          <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <Link to="/">
          <span > <img src={logo} className='h-12 w-35 hover:scale-120' ></img></span>
           </Link>
        </h2>
    </div>
    <div className='menu-link'>
        <ul>
            <li>
                <NavLink to='/holidays'><FaUmbrellaBeach size={20}/>Holidays</NavLink>
            </li>
            <li>
                <NavLink to='/hotels'><RiHotelLine size={20}/> Hotels</NavLink>
            </li>
            <li>
                 <NavLink to='/flight'><MdFlight size={20}/>Flights</NavLink>
            </li>
            <li>
                <NavLink to='/gift-cards'><AiOutlineGift size={20}/>Gift  Cards</NavLink>
            </li>
            <li>
                <NavLink to='/offers'><BiSolidOffer size={20}/>Offers </NavLink>
            </li>
        </ul>
    </div>
   </nav>

        </CardContent>
   
    
   </>
  )
}

export default Navbar