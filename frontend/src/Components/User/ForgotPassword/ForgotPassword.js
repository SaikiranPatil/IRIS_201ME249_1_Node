import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ForgotPassword.css";
import { clearErrors, forgotPassword } from "../../../redux/actions/userAction";
import { useNavigate, Link } from "react-router-dom";
import { FORGOT_PASSWORD_RESET } from "../../../redux/constants/userConstants";
import { display } from "../../Utils/utils";
import Loader from "../../Utils/Loader/Loader";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPassword({ email }));
  }

  const { error, message, loading } = useSelector(state => state.forgotPassword)

  useEffect(() => {
    if (error) {
      display(error, "error")
      dispatch(clearErrors());
    }
    if (message) {
      display(message, "sucess");
      navigate('/mail/sucess');
      dispatch({ type: FORGOT_PASSWORD_RESET });
    }
  }, [dispatch, error, navigate, loading, message]);

  if (loading) { return <Loader /> }

  return (
    <>
      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <div className="register-form">
                <div className="title">
                  <h3>Forogt Password</h3>
                  <p>
                    Enter your Email to recover you account.
                  </p>
                </div>
                <form className="row" method="post" onSubmit={forgotPasswordSubmit} >
                  <div className="">
                    <div className="form-group input-group">
                      <label htmlFor="reg-email">E-mail Address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="reg-email"
                        required=""
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                      />
                    </div>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit">
                      Submit
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
      </div >
    </>
  )
}

export default ForgotPassword