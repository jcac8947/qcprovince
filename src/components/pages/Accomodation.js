import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Content from '../Content';
import { ContentSlider } from '../ContentSlider';
import Footer from '../Footer';


export default function Accomodation() {
  return (
    <>
      <Navbar />
      <Content slides={ContentSlider}/>
      <Footer />
    </>
  )
}
