import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';
  

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Social Media</h3>
        <ul className='social-media'>
                <a href="https://www.facebook.com/daniel.tan.3158652"
                target="_blank" rel="noopener noreferrer" 
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                    <a href="https://twitter.com/cupidsuxDaniel" 
                    target="_blank" rel="noopener noreferrer" 
                    className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                        <a href="https://www.linkedin.com/in/danieltan85/" 
                        target="_blank" rel="noopener noreferrer"
                        className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
        </ul>
    </div>
  );
}
