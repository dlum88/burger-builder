import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';


class BurgerIngredient extends Component {
  
  render() {
    const { type } = this.props;
    let ingredient = null;
    switch (type) {
      case('bread-bottom'):
      // the className is written like this because CSS Modules is built into React and all I need to do is assign it the classname
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>;
            <div className={classes.Seeds2}></div>;
          </div>
        )
        break;
        case('meat'):
          ingredient = <div className={classes.Meat}></div>;
        break;
        case('cheese'):
          ingredient = <div className={classes.Cheese}></div>;
        break;
        case('salad'):
          ingredient = <div className={classes.Salad}></div>;
        break;
        case('bacon'):
          ingredient = <div className={classes.Bacon}></div>;
        break;
        default:
          ingredient = null;
        break;
    };
    return ingredient;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;