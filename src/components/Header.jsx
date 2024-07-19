import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/hrnet-logo.jpeg'; 

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="container">
      <img src={logo} alt="logo" />
      <div className="title">
        <h1>HRnet</h1>
      </div>
      {location.pathname === '/' ? (
        <Link className="Link patch" to="/employee-list">View Current Employees</Link>
      ) : (
        <Link className="Link patch" to="/">View Create Employee</Link>
      )}
    </div>
  );
};

export default Header;