import React from "react"
import "./singlepost.css"

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/08/43/d1/0843d1fb-ec86-e58c-7dc6-c1f295fc331e/AppIcon-1x_U007emarketing-0-5-0-85-220.png/1200x630wa.png"
          alt="my single post"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <strong>Marti</strong>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, optio molestias soluta asperiores iure
          voluptatum!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
