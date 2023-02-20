import React from 'react';
import './Cards.css';
import ContentItem from '../components/pages/ContentItem';

function Content() {
    return (
<div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ContentItem
              src='images/balesin.jpg'
              text='Located in the Pacific Ocean just 60 nautical miles east of Manila, Balesin is approximately a 30-minute plane ride from Manila, 45-minute plane ride from Clark, or 35-minute plane ride from Sangley, yet is a world completely unto itself.'
              label='Balesin Beach Resort'
              path='/destination'
            />
            <ContentItem
              src='images/Kehalani.jpg'
              text='The finest island getaway Great for family reunions, family retreat and friends getaway trips or a quick weekend away.'
              label='Kehalani Beach Resort'
              path='/destination'
            />
          </ul>
          <ul className='cards__items'>
            <ContentItem
              src='images/Nilandingan.jpg'
              text='Protected by Mangroves on both the left and right sides of the beach, Nilandingan is one of the most private and secluded spots of Cagbalete Island.'
              label='Nilandingan Cove'
              path='/destination'
            />
            <ContentItem
              src='images/batis.jpeg'
              text='Batis Aramin Resort and Hotel is a popular resort located in Lucban, Quezon, Philippines. The resort is situated on a 25-hectare property that is surrounded by lush greenery and offers stunning views of the nearby mountains.'
              label='Batis Aramin Resort and Hotel'
              path='/destination'
            />
            <ContentItem
              src='images/queen.jpg'
              text='The Queen Margarette Hotel in Quezon is located in the city of Lucena, which is the capital of the province of Quezon in the Philippines. The hotel is situated in the heart of the city, making it a convenient base for travellers visiting the area.'
              label='Queen Margarette Hotel'
              path='/destination'
            />
          </ul>
        </div>
      </div>
    </div>
    );
  }
  export default Content;
  