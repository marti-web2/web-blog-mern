import React, { useState } from "react"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

const App = () => {

  return (
    <>
      <Topbar />
     <Write />
    </>
  );
};

export default App
