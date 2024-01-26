import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Contact from './Contact';


export default function Main() {
  return (
    <div >
      <Header />
      <div className='main-content'>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

