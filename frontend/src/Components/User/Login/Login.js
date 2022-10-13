import React, { useState, useEffect } from "react";
import './Login.css'
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../redux/actions/userAction";
import { useNavigate, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { display } from "../../Utils/toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("login submitted");
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      display(error,"warn");
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      display("Logged in successfully","sucess")
      navigate(`/account`);
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <>
      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form className="card login-form" method="post">
                <div className="card-body">
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="reg-email"
                      required=""
                      value={loginEmail} 
                      onChange={(e)=>{setLoginEmail(e.target.value)}} 
                    />
                  </div>
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-pass"
                      required=""
                      value={loginPassword} 
                      onChange={(e)=>{setLoginPassword(e.target.value)}} 
                    />
                  </div>
                  <div className="d-flex flex-wrap justify-content-between bottom-content">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input width-auto"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <Link className="lost-pass" to="/forgot">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit" onClick={loginSubmit}>
                      Login
                    </button>
                  </div>
                  <p className="outer-link">
                    Don't have an account? <Link to="/register">Register here </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login