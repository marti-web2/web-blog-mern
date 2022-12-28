import React, { Fragment } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../posts/Posts"
import "./home.css"

export default function Home() {
  return (
    // React.Fragment does not create any additional DOM node, and is widely supported
    <Fragment>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </Fragment>
  )
}
