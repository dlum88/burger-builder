import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';
class App extends Component {

  // ?? How to grab ingredients? from params?
  // implement Routes here to show BurgerBuilder / Checkout
  // add NavLink to Layout navigation buttons
  // in OrderSummary, implement Link to route to Checkout component
  // and implement Link to route back to BurgerBuilder on cancelation

  render() {
    return (
      <div >
          <Layout>
            <Switch>
              <Route path="/build-burger" component={BurgerBuilder}/>
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Layout>
      </div>
    );
  }
};


export default App;
