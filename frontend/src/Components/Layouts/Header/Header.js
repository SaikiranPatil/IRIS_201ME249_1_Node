import React from 'react'
import './Header.css'
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header navbar-area">
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-left">
                  <Link to="/" className="logo">
                    <span className="title">
                      Media{" "}
                    </span>
                    Manager
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-middle">
                  <ul className="useful-links">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-end">
                  <div className="user">
                    <AiOutlineUser />
                    Hello
                  </div>
                  <ul className="user-login">
                    <li>
                      <Link to="/login">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
