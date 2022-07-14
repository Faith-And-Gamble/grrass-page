import React from 'react';
import Appbar from './Appbar';
// import Batch from './Batch';
import Navbar from './Navbar';

function Header() {
  return (
    <header id="header" className="header">
      <Appbar />
      {/* <Batch /> */}
      <Navbar />
    </header>
  );
}

export default Header;
