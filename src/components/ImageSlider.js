import React, { useState, useEffect } from 'react';
import './Slider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import salibungot from '../Images/salibungot_beach.JPG';
import borawan from '../Images/borawan_island.JPG';
import sunshine from '../Images/sunshine_farm.JPG';
import banahaw from '../Images/mount_banahaw.JPG';
import escudero from '../Images/villaEscudero.JPG';
import balagbag from '../Images/balabag_falls.JPG';

import kanaway from '../Images/kanaway_beach.JPG';
import lampas from '../Images/kwebang_lampas.JPG';
import mirador from '../Images/mount_mirador.jpg';
import dampalitan from '../Images/dampalitan_island.JPG';

const images = [salibungot,borawan,sunshine,banahaw,escudero,balagbag,mirador,kanaway,lampas,dampalitan];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [] );
  
  const nextSlide = () => {
    setCurrent(current === SliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? SliderData.length - 1 : current - 1);
  };


  return (
    
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              <h3 className='image-title'>{slide.title}</h3>
              {index === current && (
                <img src={images[index]}
                 alt='travel image' 
                 className='image'
                  />
              )}
             {index === current && <div className='description'>{slide.description}</div>}
          </div>
          );
        })}
      </section>
    );
};

export default ImageSlider;