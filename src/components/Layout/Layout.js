import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';
// import classes from './Layout.css';
// CSS Modules is available In newer versions of React, you do not have to import classes. 
// Instead just import the entire file and set the className to the appropriate property from the CSS file.

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerToggleHandler = () => {
    this.setState( (prevState)=>{
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }


  render() {
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        closed={this.sideDrawerClosedHandler}
        open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>
          {children}
        </main>
      </Aux>
    )
  }
};

export default Layout;