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
    flexGrow: 1,
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  loginBtn: {
    color: "black",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
}));

export default NavBarStyles;
