import React from 'react';
import './BuildControl.css';

const buildControl = ({ label, ingredientAdded, ingredientRemoved, disabled }) => (
  <div className="BuildControl">
    <div className="Label">{label}</div>
    <button 
    onClick={ingredientRemoved} 
    className="Less" 
    disabled={disabled}>Less</button>
    <button 
    onClick={ingredientAdded} 
    className="More">More</button>
  </div>
);

export default buildControl;