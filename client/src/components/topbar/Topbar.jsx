import React from "react"
import { Link } from "react-router-dom"
import "./topbar.css"

const icons = [
  {
    className: "fab fa-facebook-square",
    link: "https://www.facebook.com",
  },
  {
    className: "fab fa-instagram-square",
    link: "https://www.instagram.com",
  },
  {
    className: "fab fa-pinterest-square",
    link: "https://www.pinterest.com",
  },
  {
    className: "fab fa-twitter-square",
    link: "https://www.twitter.com",
  },
]

const links = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "CONTACT",
    link: "/contact",
  },
  {
    name: "WRITE",
    link: "/write",
  },
]

export default function TopBar({ user }) {
  return (
    <div className="top">
      <div className="topLeft">
        {icons.map(({ className, link }) => (
          <a
            key={className}
            className="topIcon"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={className}></i>
          </a>
        ))}
      </div>
      <div className="topCenter">
        <ul className="topList">
          {links.map(({ name, link }) => (
            <li key={name} className="topListItem">
              <Link className="link" to={link}>
                {name}
              </Link>
            </li>
          ))}
          {user && (
            <li className="topListItem">
              <Link className="link" to="/logout">
                LOGOUT
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
