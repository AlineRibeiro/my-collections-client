import React from "react";
import "./App.css";
import "./features/Snacks/SnackParent";
import SnackParent from "./features/Snacks/SnackParent";
import NavBar from "./features/shared/NavBar";

function App() {
  return(
    <>
    <NavBar />
    <SnackParent />
    </>
  )
}

export default App;
