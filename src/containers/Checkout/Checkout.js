import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  // create a checkout summary form which displays a review of teh burger
  // what the user is about to buy and the price
  // button to cancel checkout and to go back to the burger builder
  // button to continue that will load the contact form
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    }
  };
  render() {
    const { ingredients } = this.state;
    
    return (
      <div>
        <CheckoutSummary ingredients={ingredients}/>
      </div>
    )
  }
};


export default Checkout;