import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slideshow from './components/Slideshow';

import one from '/public/1.png';
import two from '/public/2.png';
import three from '/public/3.png';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './Section6';
import University from './components/University';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Form from './components/Form';
import NSDMPage from './components/NsdmPage';
import WhatsAppSection from './components/WhatsAppSection';
import AboutUs from './components/AboutUs';
import Dpharma from './components/Dpharma';
import Cmsalopathy from './components/Cmsalopathy';
import Recognition from './components/Recognition';
import Affiliation from './components/Affiliation';
import ExamBranch from './components/examBranch';
import Payment from './components/Payment';
import VerifyDocument from './components/VerifyDocument';
import ContactUs from './components/ContactUs';
const images = [one, two, three];

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slideshow images={images} />
              <div className="h-2 bg-slate-100" />
              <Courses />
              <div className="h-2 bg-slate-100" />
              <Section1 />
              <div className="h-2 bg-slate-100" />
              <Section2 />
              <div className="h-2 bg-slate-100" />
              <Form />
              <div className="h-2 bg-slate-100" />
              <NSDMPage />
              <div className="h-2 bg-slate-100" />
              <Section3 />
              <div className="h-2 bg-slate-100" />
              <Section4 />
              <div className="h-2 bg-slate-100" />
              <Section5 />
              <div className="h-2 bg-slate-100" />
              <Section6 />
              <div className="h-2 bg-slate-100" />
              <University />
              <div className="h-2 bg-slate-100" />
              <WhatsAppSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dpharma" element={<Dpharma />} />
        <Route path="/cmsalopathy" element={<Cmsalopathy />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/affiliation" element={<Affiliation />} />
        <Route path="/examination branch" element={<ExamBranch />} />
        <Route path="/payment method" element={<Payment />} />
        <Route path="/verify documents" element={<VerifyDocument />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
