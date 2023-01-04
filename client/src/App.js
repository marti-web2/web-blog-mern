import React, { useState, Fragment } from "react"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import About from "./pages/about/About"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

const App = () => {
  const user = false

  return (
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
};

export default App
