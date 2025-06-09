import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar'; 
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FocusSection from './Components/FocusSection';
import Footer from './Components/Footer';
import About from './Components/About';
import ImageSlider from './Components/ImageSlider';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsappButton from './Components/WhatsappButton';
import ScrollToTop from './Components/ScrollToTop';
import HeroImageSection from './Components/HeroImageSection';
import FeatureSection from './Components/FeatureSection';
import ContentWithHeroImage from './Components/ContentWithHeroImage';
import ContactUsForm from './Components/ContactUsForm';
import Contact from './Components/Contact';
import SearchPage from './Components/SearchPage';


function HomePage() {
  return (
    <>
      <HeroSection />
      <FocusSection />
      <ImageSlider />
      <AboutSection />
      <HeroImageSection />
      <FeatureSection />
      <ContentWithHeroImage />
      <ContactUsForm />
      <WhatsappButton/>
    </>
  );
}

function App() {
  return (
    <Router>
      <MyNavbar />
      <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
