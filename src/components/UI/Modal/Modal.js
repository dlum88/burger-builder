import React from 'react';
import Aux from '../../../hoc/Aux';
import BackDrop from '../Backdrop/Backdrop';
import './Modal.css';

const modal = ({ children, show, modalClosed }) => (
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
);

export default modal;