import React from 'react';


import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import BackToTopBtn from './components/BackToTopBtn.jsx';



const App = () => {
  return (

    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>

  );

};

export default App;
