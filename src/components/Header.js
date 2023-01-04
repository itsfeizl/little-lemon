import React, { useState} from 'react';
import "../components/styles/Header.css"
import Logo from "../components/assets/logo.jpg"
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <NavLink to = "/">
            {<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}
        </NavLink>
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="#">Order Online</NavLink></li>
                <li><NavLink to="#">Login</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
      </header>
    </>
  )
}

export default Header
