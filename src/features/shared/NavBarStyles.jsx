import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const NavBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarParent: {
    backgroundColor: "white",
  },
  menuButton: {
    color: "black",
    marginRight: theme.spacing(2),
  },
  title: {
    color: "black",
    flexGrow: 1,
  },
  loginBtn: {
    color: "black",
  },
}));

export default NavBarStyles;
