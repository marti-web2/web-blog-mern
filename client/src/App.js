import React, { useState } from "react"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"

const App = () => {

  return (
    <>
      <Topbar />
     <Settings />
    </>
  );
};

export default App
