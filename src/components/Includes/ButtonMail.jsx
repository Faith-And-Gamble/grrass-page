/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonMailto({ mailto, label }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      style={{ color: 'white' }}
    >
      {label}
    </Link>
  );
}

ButtonMailto.propTypes = {
  mailto: propTypes.string,
  label: propTypes.string,
};

export default ButtonMailto;
