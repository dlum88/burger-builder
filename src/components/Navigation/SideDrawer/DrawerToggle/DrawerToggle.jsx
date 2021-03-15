import React from 'react'

import classes from '../DrawerToggle/DrawerToggle.module.css';

const drawerToggle = ({ drawerToggleClicked }) => (
  <div onClick={drawerToggleClicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>

);

export default drawerToggle;