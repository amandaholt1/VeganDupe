import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine, RiToggleFill} from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';
import { Routes, Route, NavLink } from "react-router-dom";

const Menu = () => (
  <>
  <p><a href = "/">Home</a></p>
  <p><a href = "/Makeup">Makeup</a></p>
  <p><a href = "/Skin">SkinCare</a></p>
  <p><a href = "/Hair">Hair</a></p>
  <p><a href = "/BrandList">Brand List</a></p>
  <p><a href = "/About">About</a></p>
  
  </>
)
const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
   
    <div className = "navbar">
      <div className = "navbar-links">
        <div className = "navbar-links_logo">
          <img src={logo} className = "logo" alt="logo" />
        </div>
        <div className = "navbar-links_container">
          <Menu/>
         
        </div>
      </div>
      <div className = "navbar-sign">
        <button type = "button">Contact</button>
      </div>
      <div className = "navbar-menu">
          {toggleMenu
          ?<RiCloseLine color = "#fff" size={27} onClick={() => setToggleMenu(false)} />
          :<RiMenu3Line color = "#fff" size={27} onClick={() => setToggleMenu(true)} />
          } 
          {toggleMenu && (
            <div className = "navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links">
              <div className = "navbar-menu_container-links-sign">
               <button type = "button">Contact</button>
               </div>
                <Menu />
               </div>
              </div>
          )
          
          }
      </div>
    </div>
  )
}

export default Navbar