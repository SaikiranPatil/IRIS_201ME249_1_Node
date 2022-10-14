import React from 'react'
import './Header.css'
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logOut } from '../../../redux/actions/userAction';
import { useDispatch, useSelector } from "react-redux";
import { display } from "../../Utils/utils";

const Header = ({ user, isAuthenticated }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logOutClick = () => {
    dispatch(logOut());
    display("Logged Out Sucessfully","sucess");
    navigate("/login");
  };

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
                      Media
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
                  </div>
                  <ul className="user-login">
                    {
                      isAuthenticated ?
                        <>
                          <AiOutlineUser />
                          <li>
                            <Link to="/account">{user && user.name}</Link>
                          </li>
                          <li>
                            <Link onClick={logOutClick}>Log Out</Link>
                          </li>
                        </> :
                        <>
                          <li>
                            <Link to="/login">Sign In</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                        </>
                    }
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
