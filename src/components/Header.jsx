import React from "react";
import "../style/Header.css";
import "../js/Header";
import "../style/mediaquery.css"
import { Link } from "react-router-dom";

const Header = () => {
  
  

window.onload = function(){
    const data = document.getElementById("hb")
    const list = document.getElementById("navlist")
  console.log(data);
  data.addEventListener('click', ()=>{
    list.classList.toggle("show")
    return false
  })
  }
return (
    <header>
      <div className="navigation"> 
        <div className="container nav-container">
          <div className="logo">
            <Link to="">TRENDOY</Link>
          </div>
          <ul className="navlist" id="navlist">
            <li className="nav-item">
              <Link to="/home" className="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li  className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="menu-btn">
            <i id="hb" className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="nav-top">
        <div className="logo">
          <Link to="">TRENDOY</Link>
        </div>
        <from action="">
          <i className="fa-solid fa-search"></i>
          <input type="text" name="search" placeholder="search" />
        </from>
        <div className="nav-icons">
          <i className="fas fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
