import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/images.jfif'
              text='The Ninoy Aquino Parks and Wildlife Center is a 23.85-hectare Protected Area located in Diliman, Quezon City, Philippines.'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/image2.jfif'
              text='Alibijaban is a small island located off the southeastern coast of Bondoc Peninsula in the Philippines.'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.jfif'
              text='Mount Banahaw is an active complex volcano on Luzon in the Philippines. The three-peaked volcano is located at the boundary of Laguna and Quezon provinces.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/image4.jfif'
              text='Large church with religious attractions'
              label='Religious'
              path='/products'
            />
            <CardItem
              src='images/image5.jfif'
              text='Cagbalete is an island off the east coast of Luzon, Philippines on Lamon Bay. It is part of Quezon Province and administered by the municipality of Mauban.'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
