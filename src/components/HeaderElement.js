import React from 'react';
import "./styles/HeaderElement.css";
import Logo from "../components/assets/logo.jpg"
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

const Navbar = () => {

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar