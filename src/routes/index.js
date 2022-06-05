import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import Form from '../components/Includes/SingleForm';

function Routing() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contactus />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/register" element={<Form />} />

    </Routes>

  );
}

export default Routing;
