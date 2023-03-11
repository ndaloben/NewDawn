import React from 'react'
import './hero.css'
import Therapist from '../../assets/images/africa.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className="text">
      <span className='one'>We Provide All HealthCare Solutions</span>
      <span className='two'>At NewDawn We Protect Your Health And Take Care Of You To 
      The Best Of Our Ability</span>
      </div>
    <button className='btn'>Read More</button>
    <motion.div
     animate={{ rotate: 180 }}
     transition={{ from: -90, duration: 2 }}
     className='right-h'></motion.div>
    <motion.div
     animate={{ rotate: -180 }}
     transition={{ from: 90, duration: 2 }}
     className='right-g'></motion.div>
      <div className='therapy'>
        <img src={Therapist} alt="" />
      </div>
   
    </div>
  )
}

export default Hero
