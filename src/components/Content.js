import React, { useState, useEffect } from 'react';
import './ContentSlider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ContentSlider } from './ContentSlider';
import balesin from '../Images/balesin.jpg';
import kehalani from '../Images/Kehalani.jpg';
import nilandingan from '../Images/Nilandingan.jpg';
import queen from '../Images/queen.jpg';
import batis from '../Images/batis.jpeg';

const images = [balesin, kehalani, nilandingan, queen, batis];

const Content = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Load all the images in advance
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const nextSlide = () => {
    setCurrent(current === ContentSlider.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? ContentSlider.length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {ContentSlider.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            <h3 className='image-title'>{slide.title}</h3>
            {index === current && (
              <img
                src={images[index]}
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

export default Content;