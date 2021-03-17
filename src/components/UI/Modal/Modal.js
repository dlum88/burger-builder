import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // check the children prop to render any new children
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    // console.log('MODAL UPDATE')
  }

  render() {
    const { children, show, modalClosed } = this.props;
    return (
      <Aux>
        <BackDrop 
        show={show}
        clicked={modalClosed}
        />
        <div 
          className="Modal"
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}>
          {children}
        </div>
      </Aux>
    )
  }
};

export default Modal;