// import React from 'react'
import "./Navbar.css"
import { useState } from "react"
import { Link } from 'react-router-dom';
// import CartIcon from "../../assets/cart-icon.png";

import {HiOutlineMenuAlt3} from "react-icons/hi";
import {BsFillCartDashFill} from "react-icons/bs";
import { useCartContext } from "../../cartContext";


function Navbar() {
  const { cartItems } = useCartContext();

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
    <div className='container navbar-content flex'>
      <div className='brand-and-toggler flex flex-sb'>

        <Link to = "/" className='navbar-brand flex'>
          <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
        </Link>

        <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
          <HiOutlineMenuAlt3 size = {35} style = {{
            color: `${toggleMenu ? "#fff" : "#010101"}`
          }} />
        </button>

      </div>

      <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <ul className = "navbar-nav">
          <li className='nav-item'>
            <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
          </li>
          <Link to="/cart" className="nav-cart">
          <BsFillCartDashFill size = {30} style = {{
            color: `${toggleMenu ? "#fff" : "#010101"}`
          }} />          
          </Link>
          <span style={{color:"red"}}>{cartItems.length}</span>

        </ul>
      </div>

    </div>
  </nav> 
)
}

export default Navbar