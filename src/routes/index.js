import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NoPage from '../pages/NoPage';
import Home from '../pages/Home';
import FAQ from '../pages/Contactus';
import Form from '../components/Includes/SingleForm';
import Placement from '../pages/Placemnet';
import ISA from '../pages/ISA';
import Aboutus from '../pages/Aboutus (1)';
import Hire from '../pages/hire';
import WhatsApp from '../components/Includes/whatsapp';

function Routing() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/placement" element={<Placement />} />
      <Route exact path="/faq" element={<FAQ />} />
      <Route exact path="/hire-form-us" element={<Hire />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/isa" element={<ISA />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/register" element={<Form />} />
      <Route path="/whatsapp" element={<WhatsApp />} />

    </Routes>

  );
}

export default Routing;
