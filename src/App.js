import React from 'react'
import './App.css'
import Navbar from './assets/nav/Navbar'
import Hero from './components/hero/Hero'
// import About from './components/about/About'
// import Testimonials from './components/testimonials/Testimonials'
// import Footer from './assets/footer/Footer'
import Health from './components/health/Health'
import Nutrition from './components/nutrition/Nutrition'
import Specialists from './components/specialists/Specialists'


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
     <Health />
      <Nutrition />
      <Specialists />

      {/* 
      <Testimonials />    
      <About />
      <Footer /> */}
    </div>
  )
};

export default App
