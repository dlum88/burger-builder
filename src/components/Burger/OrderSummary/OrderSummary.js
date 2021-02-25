import React from 'react';
import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Aux';

const orderSummary = ({ ingredients, purchaseCanceled, purchaseContinue, price }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}: {ingredients[igKey]}</span>
        </li>
      )
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled} btnType="Danger">CANCEL</Button>
      <Button clicked={purchaseContinue} btnType="Success">CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;