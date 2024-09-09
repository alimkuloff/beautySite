import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React from "react";
import { NavLink} from "react-router-dom";
import Logo from "../assets/logo.png";
import './styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h2>My Store</h2>
          </div>
          <img src={Logo} alt="" />
          <ul>
            <li>
              <NavLink className="nav-link" to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart"><AiOutlineShoppingCart className="cart" /></NavLink>
            </li>
            <li>
              <NavLink to="/favorites"><AiOutlineHeart className="like" /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
