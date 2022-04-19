import React from 'react';
import "./Footer.css"
import clarusway from '../img/clarusway_logo.png';

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Clarusway Web Design, Copyrigth © 2022</p>
        <a href="https://clarusway.com/"><img className="image2" src={clarusway} alt="" /></a>
        
      </footer>
    </div>
  );
}

export default Footer