import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {
  
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    axios.get('/ingredients.json')
      .then(res => {
        this.setState({ingredients: res.data})
      })
      .catch(err => {
        this.setState({error: true})
      })
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, num) => {
        return sum + num;
      }, 0)
    this.setState({ purchaseable: sum > 0});
  };

  addIngredientHandler = (type) => {
    const  oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  };

  removeIngredientHandler = (type) => {
    const  oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients)
  };

  checkIngredientAmount = () => {
    const disableInfo = {
      ...this.state.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return disableInfo;
  };
  
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    // alert("You Continued!")
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "David Plum",
        address: {
          street: "Test Street 1",
          zipCode: 123456,
          country: "MURICA" 
        },
        email: "testemail@test.com"
      },
      deliveryMethod: 'fastest'
    };

    axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(err => {
        this.setState({loading: false, purchasing: false});
      })
  }
  
  render() {
    const disableInfo = this.checkIngredientAmount();
    const { loading, ingredients, error } = this.state;
    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner/>
    if (ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={ingredients}/>
          <BurgerControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
          />
        </Aux>
      )
      orderSummary = <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients} 
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}/>
    }
    if (loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal 
        show={this.state.purchasing}
        modalClosed={this.purchaseCancelHandler} > 
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);