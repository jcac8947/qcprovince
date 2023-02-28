import React from 'react';
import '../App.css';
import HeroVideo from '../videos/HeroVideo.mp4';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className='hero-container'>
      <video src={HeroVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Travel now!
        </Button>
  
      </div>
    </div>
       

  );
 
}


export default HeroSection;
