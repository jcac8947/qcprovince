import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import {SliderData}  from '../SliderData';



export default function Destination() {
  return (
    <>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  )
}
