import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: 'salad'},
  { label: "Bacon", type: 'bacon'},
  { label: "Cheese", type: 'cheese'},
  { label: "Meat", type: 'meat'}
];

const buildControls = ({ ingredientAdded, ingredientRemoved, disabled, price, purchaseable, ordered }) => (
  <div className="BuildControls">
    <p>Current Price:  <strong>{price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      ingredientAdded={() => ingredientAdded(ctrl.type)}
      ingredientRemoved={() => ingredientRemoved(ctrl.type)}
      disabled={disabled[ctrl.type]}
      />
    ))}
    <button 
    className="OrderButton"
    disabled={!purchaseable}
    onClick={ordered}
    >ORDER NOW</button>
  </div>
);

export default buildControls;