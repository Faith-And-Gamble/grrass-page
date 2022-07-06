/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Appbar() {
  return (
    <div className="header-top bg-black-333 sm-text-center border-top-theme-color-3px p-0">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <div className="widget no-border">
              <ul className="list-inline pull-left flip sm-pull-none xs-text-center text-white mt-5">
                <li className="m-0 pl-10 pr-10">
                  {' '}
                  <a href="/" className="text-white">
                    <i
                      className="fa fa-phone text-theme-colored"
                    />
                    {' '}
                    9983340133
                  </a>
                  {' '}

                </li>
                <li className="m-0 pl-10 pr-10">
                  {' '}
                  <i className="fa fa-clock-o text-theme-colored" />
                  {' '}
                  Mon-Fri 9:00am - 9:00pm
                </li>
                <li className="m-0 pl-10 pr-10">
                  <a href="/" className="text-white">
                    <i className="fa fa-envelope-o text-theme-colored" />
                    info@grras.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 pr-0">
            <div className="widget pull-right no-border m-0">
              <ul className="styled-icons icon-dark icon-flat icon-sm sm-text-center mt-sm-15">
                <li><a href="https://www.facebook.com/jobplacementcoursegrras/" target="_blank" rel="noreferrer"><i className="fa fa-facebook text-white" /></a></li>
                <li><a href="/"><i className="fa fa-twitter text-white" /></a></li>
                <li><a href="/"><i className="fa fa-google-plus text-white" /></a></li>
                <li><a href="/"><i className="fa fa-instagram text-white" /></a></li>
                <li><a href="/"><i className="fa fa-linkedin text-white" /></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Appbar;
