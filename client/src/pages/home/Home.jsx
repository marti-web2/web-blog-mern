import React, { Fragment, useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../posts/Posts"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router"

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    // React.Fragment does not create any additional DOM node, and is widely supported
    <Fragment>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </Fragment>
  )
}
