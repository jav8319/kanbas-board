import React from 'react';
import logogithub from './img/25231.png';
import logolinked from './img/Linkedin-Logo.png';

export default function Footer() {


  return (
    
      <div className='footerdiv'>            
        <a href='https://github.com/jav8319' target='_blank' rel="noopener noreferrer">
          <img className='githublogo'src={logogithub} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/javier-muriel-66a34b190/" target='_blank' rel="noopener noreferrer">
          <img className='linkedlogo' src={logolinked} alt="linkedin logo"></img>
        </a>
           </div>
  
  );
}

