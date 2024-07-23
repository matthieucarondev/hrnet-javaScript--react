import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/android-chrome-192x192.png'; 

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="container ">
      <img className="logo" src={logo} alt="logo" />
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <nav>
        <Link className={`Link  ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        <Link className={`Link  ${location.pathname === '/employee-list' ? 'active' : ''}`} to="/employee-list">Employees</Link>
      </nav>
    </header>
  );
};

export default Header;