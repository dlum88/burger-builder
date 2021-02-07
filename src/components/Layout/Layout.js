import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
// import classes from './Layout.css';
// CSS Modules is available In newer versions of React, you do not have to import classes. 
// Instead just import the entire file and set the className to the appropriate property from the CSS file.


const layout = ({children}) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">
      {children}
    </main>
  </Aux>
);

export default layout;