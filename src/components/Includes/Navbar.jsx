import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../image/final.png';

function Navbar() {
  return (
    <div className="header-nav">
      <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
        <div className="container">
          <nav id="menuzord-right" className="menuzord default">
            <a className="mt-15 pull-left flip xs-pull-center " href="/">
              <img src={Logo} width="110px" max-height="83px" alt="" />
            </a>
            <ul className="menuzord-menu pull-right onepage-nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/placement">Pay After Placement</Link></li>
              {/* <li><Link to="/isa">ISA</Link></li> */}
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/hire-form-us">Hire From Us</Link></li>
              <li><Link to="/register">Contact us</Link></li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
