import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Working from './components/Working';
import NotWorking from './components/notWorking';
import Biography from './components/Biography';
import Education from './components/Education';
import Slider from './components/Slider';
import Fee from './components/Fee';
import Directions from './components/Directions';
import Guides from './components/Guides';
import Mail from './components/Mail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Working />
      <NotWorking />
      <Biography />     
      <Education/>
      <Slider/>
      <Directions/>
      <Fee />      
      <Guides />
      <Mail/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
