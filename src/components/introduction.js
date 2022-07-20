import React from 'react';
import './introduction.css';
import introduction from './image/Intro_image2.jpg';

function intro() {
  return (
    <div>
      <img src={introduction} alt="Intro" className="stretch" />
    </div>
    );
}

export default intro;
