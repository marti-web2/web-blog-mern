import React, { useState, Fragment } from "react"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Register from "./pages/register/Register"

const App = () => {

  return (
    <Fragment>
      <Topbar />
      <Register />
    </Fragment>
  );
};

export default App
