import React from 'react';

function Header() {
  return (
    <header id="header" className="header">
      <div className="header-top bg-black-333 sm-text-center border-top-theme-color-3px p-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="widget no-border">
                <ul className="list-inline pull-left flip sm-pull-none xs-text-center text-white mt-5">
                  <li className="m-0 pl-10 pr-10">
                    {' '}
                    <a href="/" className="text-white">
                      <i className="fa fa-phone text-theme-colored" />
                      {' '}
                      9983340133
                    </a>
                    {' '}
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    {' '}
                    <i className="fa fa-clock-o text-theme-colored" />
                    {' '}
                    Mon-Fri
                    8:00 to 2:00
                  </li>
                  <li className="m-0 pl-10 pr-10">
                    <a href="/" className="text-white">
                      <i className="fa fa-envelope-o text-theme-colored" />
                      info@ygrass.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 pr-0">
              <div className="widget pull-right no-border m-0">
                <ul className="styled-icons icon-dark icon-flat icon-sm sm-text-center mt-sm-15">
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-google-plus text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-silver-light sm-text-center p-0">
        <div className="container">
          <center>
            <h6 className="sm-text-center">Upcomming Batch Details</h6>
          </center>
        </div>
      </div>
      <div className="header-nav">
        <div className="header-nav-wrapper navbar-scrolltofixed bg-white">
          <div className="container">
            <nav id="menuzord-right" className="menuzord default">
              <a className="mt-15 pull-left flip xs-pull-center " href="/">
                <img
                  src="assets/images/imageslogo.png"
                  width="130px"
                  max-height="93px"
                  alt=""
                />
              </a>
              <ul className="menuzord-menu pull-right onepage-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Pay After Placement</a>
                </li>
                <li>
                  <a href="#counselor">ISA</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#gallery">Hire Form Us</a>
                </li>
                <li>
                  <a href="#blog">Enrol/Register</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
