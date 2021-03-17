import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends Component {

  /**
   * This could be a functional component
   * does not need to be class
   * just left it like this for testing purposes
   */
  componentWillUpdate() {
    // componentWillUpdate is depracated. left in for testing purposes
    // console.log('WILLUPDATE')
  }

  render() {
    const { ingredients, purchaseCanceled, purchaseContinue, price } = this.props;
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
}

export default OrderSummary;