import './Register.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../redux/actions/userAction";
import { useNavigate, Link } from "react-router-dom";
import { display } from '../../Utils/toast';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const signUpSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      display("Password and Confirm Password did not match", "error");
    } else {
      dispatch(register(name,email,password));
    }
  };

  useEffect(() => {
    if (error) {
      display(error,"error");
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/account`);
    }
  }, [dispatch, error, isAuthenticated, navigate]);
  return (
    <div className="account-login section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <div className="register-form">
              <div className="title">
                <h3>No Account? Register</h3>
                <p>
                  Registration takes less than a minute but gives you full control
                  over your orders.
                </p>
              </div>
              <form className="row" onSubmit={signUpSubmit}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-fn">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="reg-fn"
                      name="name"
                      required=""
                      value={name}
                      onChange={(e) => { setName(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="reg-email"
                      required=""
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-pass">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-pass"
                      name="password"
                      required=""
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-pass-confirm">Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-pass-confirm"
                      required=""
                      value={confirmPassword}
                      onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="button">
                  <button className="btn" type="submit">
                    Register
                  </button>
                </div>
                <p className="outer-link">
                  Already have an account? <Link to="/login">Login Now</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
