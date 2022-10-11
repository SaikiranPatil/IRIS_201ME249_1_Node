import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
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
              <form className="row" method="post">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-fn">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="reg-fn"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="reg-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="reg-email"
                      required=""
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
                      required=""
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
