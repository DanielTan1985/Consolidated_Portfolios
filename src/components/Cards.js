import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='header'>Portfolios</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <CardItem
              src={require('./image/CardsPF01.PNG')}
              text='Javascript, React, Github'
              label='Frontend React (Collaboration)'
              path='/portfolios/PF01'
            /> */}
            <CardItem
              src={require('./image/CardsPF02.PNG')}
              text='Javascript, Node.js, Github, Heroku, Postgres'
              label='Backend Node.js (Collaboration)'
              path='/portfolios/PF02'
            />
            <CardItem
              src={require('./image/CardsPF03.png')}
              text='Javascript, React Native, Github, Postgres, Heroku'
              label='Frontend React Native (Collaboration)'
              path='/portfolios/PF03'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./image/CardsPF04.JPG')}
              text='Javascript, Html, Css, Github'
              label='Pet project (Personal)'
              path='/portfolios/PF04'
            />
            <CardItem
              src={require('./image/CardsPF05.PNG')}
              text='Javascript, Node.js, Github, Postgres, AWS'
              label='Frontend + Backend Node.js (Personal)'
              path='/portfolios/PF05'
            />
            <CardItem
              src='https://media.istockphoto.com/photos/under-construction-concept-picture-id542175174?k=20&m=542175174&s=612x612&w=0&h=FINfeMVVpw1h1MMPJ3w8TM6CvTmw0Q04Ybi7i37S_v8='
              text='Working hard on it...'
              label='Work in Progress'
              path='/portfolios/PF06'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
