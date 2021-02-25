import React from 'react'
import './Button.css';

const button = ({ children, clicked, btnType }) => (
  <button className={["Button", btnType].join(' ')} onClick={ clicked }>{ children }</button>
);

export default button
