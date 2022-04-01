import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <nav className="header">
        <img src={logo} alt="" srcset="" />
        <div>
            <Link to="/shop">Shop</Link>
            
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">inventory</Link>
            <Link to="/about">About</Link>
        </div>
      </nav>
    );
};

export default Header;