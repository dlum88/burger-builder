import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: "Salad", type: 'salad'},
  { label: "Bacon", type: 'bacon'},
  { label: "Cheese", type: 'cheese'},
  { label: "Meat", type: 'meat'}
];

const buildControls = ({ ingredientAdded, ingredientRemoved, disabled }) => (
  <div className="BuildControls">
    {controls.map(ctrl => (
      <BuildControl 
      key={ctrl.label} 
      label={ctrl.label}
      ingredientAdded={() => ingredientAdded(ctrl.type)}
      ingredientRemoved={() => ingredientRemoved(ctrl.type)}
      disabled={disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;