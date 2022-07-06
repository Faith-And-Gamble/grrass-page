import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import Form from '../components/Includes/SingleForm';
import Placement from '../pages/Placemnet';
import ISA from '../pages/ISA';
import Aboutus from '../pages/Aboutus (1)';
import Hire from '../pages/hire';

function Routing() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/placement" element={<Placement />} />
      <Route exact path="/contact" element={<Contactus />} />
      <Route exact path="/hire-form-us" element={<Hire />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/isa" element={<ISA />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/register" element={<Form />} />

    </Routes>

  );
}

export default Routing;
