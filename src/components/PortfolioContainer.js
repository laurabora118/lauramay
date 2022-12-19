import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import TitleResume from './pages/TitleResume';
import About from './pages/About';
import TitleAbout from './pages/TitleAbout';
import TitlePortfolio from './pages/TitlePortfolio';
import Contact from './pages/Contact';
import Header from './pages/headerfooter/Header';
import Footer from './pages/headerfooter/Footer';
import Bottomnav from './pages/headerfooter/Bottomnav';
import Form from './pages/contactform/Form';
import Project from './pages/Project';
// import Lauraimage from '../images/mypic.jpg';
import './styles/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <div><Header /> <TitleAbout /> <About /> <Footer /> <Bottomnav /></div>;
    }
    if (currentPage === 'Portfolio') {
      return <div><Header /> <TitlePortfolio /> <Project /> <Footer /> <Bottomnav /></div>;
    }
    if (currentPage === 'Contact') {
      return <div><Header /> <Contact /> <Form /> <Footer /> <Bottomnav /></div>;
    }
    if (currentPage === 'Resume') {
      return <div><Header /> <TitleResume /> <Resume /> <Footer /> <Bottomnav /></div>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );

}




