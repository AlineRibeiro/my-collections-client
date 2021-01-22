import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { NavBarStyles } from "./NavBarStyles";

const NavBar = () => {
  // const [snackIndex, setSnackIndex] = useState("");

  // const fetchSnackIndex = () => {
  //   Snack.index().then((response) => {
  //     setSnackIndex(response.snacks);
  //   });
  // };

  // useEffect(() => {
  //   fetchSnackIndex();
  // });
  const classes = NavBarStyles();

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
          Snackrism
        </Typography>
        <Button className={classes.loginBtn} color="inherit">
          Register
        </Button>
        <Button className={classes.loginBtn} color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
