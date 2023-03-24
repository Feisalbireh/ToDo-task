import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link className='brand' to="/">TaskX</Link>
      </div>
      <div className="nav-middle">
        <Link className='menu' to="/">Home</Link>
      </div>
      <div className="nav-right">
        <Link className='menu' to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
