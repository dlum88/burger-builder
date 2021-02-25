import React from 'react';
import './Backdrop.css';

const backdrop = ({ show, clicked }) => (
  show ? <div 
  className="BackDrop"
  onClick={clicked}
  ></div> : null
);

export default backdrop;