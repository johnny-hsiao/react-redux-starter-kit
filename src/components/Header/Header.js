import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import classes from './Header.scss';

export const Header = () => (
  <AppBar 
    iconElementLeft={
      <IndexLink 
        to='/' 
        activeClassName={classes.activeRoute}
        className={classes.route}
      >
        Home
      </IndexLink>
    }
    iconElementRight={
      <Link 
        to='/counter' 
        activeClassName={classes.activeRoute}
        className={classes.route}
      >
        Counter
      </Link>
    }
  />
);

export default Header;