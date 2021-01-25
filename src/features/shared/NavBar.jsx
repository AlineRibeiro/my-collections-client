import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import { NavBarStyles } from "./NavBarStyles";

const NavBar = () => {
  const classes = NavBarStyles();
  const userEmail = useSelector(state => state.user.email)

  useEffect(() => {
  }, [userEmail]);

  return (
    <AppBar className={classes.appBarParent} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <Link to="/snacks">Snackrism</Link>
        </Typography>

        <Typography variant="h6" className={classes.title}>
          <Link to="/snacks">{userEmail}</Link>
        </Typography>

        <Button className={classes.loginBtn} color="inherit">
          <Link to="/users">Register</Link>
        </Button>

        <Button className={classes.loginBtn} color="inherit">
          <Link to="/sign-in">Login</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
