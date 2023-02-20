import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardDest() {
  return (
    <div className='cards'>
      <h1>Guys hindi pa tapos ito...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/DestImage/balabag_falls.jpg'
              text='Balagbag Falls (Brgy Tingnoan, Real)
              Balagbag Falls is one of the emerging tourist spots in Quezon province, especially for adventurers and nature lovers. It is a multi-tier waterfall surrounded by lush vegetation.
              It’s also very much accessible, some 5 minutes of walk from the parking area. The first layer has a deep pool, fit for swimming. You can climb on one of the cliffs and jump towards the pool..'
              path='/destination'
            />
            <CardItem
              src='images/DestImage/borawan_island.jpg'
              text='The Island is located in a peaceful community at Barangay Lipata, Padre Burgos, Quezon Province route going to the South. The name Borawan was given by a local resident as it’s monicker as the resort name implies it is a combination of the famous tourist destination Boracay Island, with it’s White Sand like Beach and Palawanlike with it’s giant rock formations bound in this unique Resort'
              path='/destination'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/DestImage/dampalitan_island.jpg'
              text='Dampalitan Island (Padre Burgos)
              Although it’s popularly promoted as an island, it is a beach on a small peninsula of mainland Quezon province. It has powdery white sands similar to those found in Boracay Island. There are also pine forests lining the beach, and you can just lean on one of these and relax the whole day. There are cottages available if you plan to have an overnight stay.'
              path='/destination'
            />
            <CardItem
              src='images/DestImage/kanaway_beach.jpg'
              text='Kanawan Beach also lies within Jomalig Island and is one of the off-beaten tourist spots in Quezon province. Just like Salibungot Beach, it also has golden sands that stretch for as much as 400 meters!'
              path='/destination'
            />
            <CardItem
              src='images/DestImage/kwebang_lampas.jpg'
              text='Puting Buhangin literally means white sands. Unlike in other famous beaches in Quezon province, the sands here are cleaner and whiter. Located on the coast of Pagbilao Grande Island, Puting Buhangin is accessible from Borawan Beach via a 3-40 minute boat ride.'
              path='/destination'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardDest;
