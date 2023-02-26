import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css'
import logogithub from '../img/25231.png';
import logolinked from '../img/Linkedin-Logo.png';
const imgStyle={width: '60px'}
const gitStyle={width: '40px'}

function Footer() {

    return (
      
      <div className="fixed-bottom customtb p-2">
          <div className="col text-center">
           <a href='https://github.com/jav8319'><img src={logogithub} alt="githu blogo" style={gitStyle}></img></a>
           <a href="https://www.linkedin.com/in/javier-muriel-66a34b190/"><img src={logolinked} alt="linked logo" style={imgStyle}></img></a>
           <a href="https://shielded-wave-42432.herokuapp.com/#Portfolio">#Portfolio</a>
          </div>
        </div>
    );
  
}

export default Footer;