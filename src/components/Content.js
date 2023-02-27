import React, { useState } from 'react';
import './ContentSlider.css';
import { ContentSlider } from './ContentSlider';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


const Content = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [description, setDescription] = useState('');
  const lenght = slides.length;

  const [imageUrl, setImageUrl] = useState('')

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }

  const loadImage = async (path) => {
    const image = await import(`../Images/${path}`);
    //console.log(image)
    setImageUrl(image.default);
  }



  return (
    
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {ContentSlider.map((slide, index) => {
          loadImage(slide.image)
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              <h3 className='image-title'>{slide.title}</h3>
              {index === current && (
                <img src={imageUrl} alt='travel image' className='image' onMouseEnter={() => setDescription(slide.description)} onMouseLeave={() => setDescription('')} />
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

export default Content;