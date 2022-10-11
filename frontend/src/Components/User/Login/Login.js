import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
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
                    />
                  </div>
                  <div className="form-group input-group">
                    <label htmlFor="reg-fn">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="reg-pass"
                      required=""
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
                    <button className="btn" type="submit">
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