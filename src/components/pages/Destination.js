import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import {SliderData}  from '../SliderData';
// import CardDest from '../CardDest';



export default function Destination() {
  return (
    <>
      <Navbar />
      <ImageSlider slides={SliderData} />;
      <Footer />
    </>
  )
}
