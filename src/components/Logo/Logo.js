import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css'

const logo = () => (
  <div className="Logo">
    <img alt="" src={burgerLogo} />
  </div>
);

export default logo;