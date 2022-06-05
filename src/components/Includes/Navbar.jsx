import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className="header-nav">
      <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
        <div className="container">
          <nav id="menuzord-right" className="menuzord default">
            <a className="mt-15 pull-left flip xs-pull-center " href="/">
              <img src="assets/images/imageslogo.png" width="130px" max-height="93px" alt="" />
            </a>
            <ul className="menuzord-menu pull-right onepage-nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Pay After Placement</Link></li>
              <li><Link to="/isa">ISA</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/hire-form-us">Hire Form Us</Link></li>
              <li><Link to="/register">Employee Register</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
