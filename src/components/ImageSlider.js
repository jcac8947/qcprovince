import React, { useState } from 'react';
import './Slider.css';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [description, setDescription] = useState('');
  const slider = slides.length;

  const nextSlide = () => {
    setCurrent(current === slider - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slider - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.slider <= 0) {
    return null;
  }

  return (
    
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              <h3 className='image-title'>{slide.title}</h3>
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' onMouseEnter={() => setDescription(slide.description)} onMouseLeave={() => setDescription('')} />
              )}
              {index === current && (
                <div className='description'>{description}</div>
              )}
            </div>
          );
        })}
      </section>
    );
};

export default ImageSlider;