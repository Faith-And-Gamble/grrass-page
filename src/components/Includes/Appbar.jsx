/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ButtonMailto from './ButtonMail';

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
                  <a href="/whatsapp" style={{ color: 'white' }}>
                    <i
                      className="fa fa-whatsapp text-theme-colored"
                    />
                    {' '}
                    9983340133
                    {' '}
                  </a>

                </li>
                <li className="m-0 pl-10 pr-10">
                  <ButtonMailto label="Write us an E-Mail" mailto="mailto:Aarambh@grrassolutions.in">
                    <i className="fa fa-envelope-o text-theme-colored" />
                    Aarambh@grrassolutions.in
                  </ButtonMailto>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 pr-0">
            <div className="widget pull-right no-border m-0">
              <ul className="styled-icons icon-dark icon-flat icon-sm sm-text-center mt-sm-15">
                <li>
                  <a
                    href="https://www.facebook.com/jobplacementcoursegrras/"
                    target="_blank"
                    rel="noreferrer"
                    data-bg-color="#3B5998"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aarambh.jobplacement/"
                    target="_blank"
                    rel="noreferrer"
                    data-bg-color="#02B0E8"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/aarambh-pay-after-placement-training/"
                    target="_blank"
                    rel="noreferrer"
                    data-bg-color="#05A7E3"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://g.page/r/CV0-oeB8da-kEAE"
                    data-bg-color="#A11312"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-map-marker" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UChWA4wZnAbbsyJDd1UxIqJg"
                    target="_blank"
                    rel="noreferrer"
                    data-bg-color="#C22E2A"
                  >
                    <i className="fa fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Appbar;
