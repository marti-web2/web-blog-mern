import React from "react"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_960_720.png"
        alt="post box with envelope being inserted"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quod, quia, voluptas quae voluptatem quibusdam quos
        voluptates quas quidem nesciunt. Quisquam, quae. Quisquam, quae.
      </p>
    </div>
  )
}
