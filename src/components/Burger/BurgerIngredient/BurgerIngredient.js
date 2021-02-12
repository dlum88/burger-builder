import React, { Component } from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';


class BurgerIngredient extends Component {
  
  render() {
    const { type } = this.props;
    let ingredient = null;
    switch (type) {
      case('bread-bottom'):
      // the className is written like this because CSS Modules is built into React and all I need to do is assign it the classname
        ingredient = <div className="BreadBottom"></div>;
        break;
      case('bread-top'):
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>;
            <div className="Seeds2"></div>;
          </div>
        )
        break;
        case('meat'):
          ingredient = <div className="Meat"></div>;
        break;
        case('cheese'):
          ingredient = <div className="Cheese"></div>;
        break;
        case('salad'):
          ingredient = <div className="Salad"></div>;
        break;
        case('bacon'):
          ingredient = <div className="Bacon"></div>;
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