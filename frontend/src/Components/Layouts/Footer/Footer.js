import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="footer-logo">
                    <a href="index.html">
                      <Link to="/" id="footer-logo">
                        <span className="title">
                          Media
                        </span>
                        Manager
                      </Link>
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-8 col-12">
                  <div className="footer-newsletter">
                    <h4 className="title">
                      Subscribe to our Newsletter
                      <span>Get all the latest information, Sales and Offers.</span>
                    </h4>
                    <div className="newsletter-form-head">
                      <form
                        action="#"
                        method="get"
                        target="_blank"
                        className="newsletter-form"
                      >
                        <input
                          name="EMAIL"
                          placeholder="Email address here..."
                          type="email"
                        />
                        <div className="button">
                          <button className="btn">
                            Subscribe
                            <span className="dir-part" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="inner-content">
              <div className="row align-items-center">
                <div className="col-lg-4 col-12">
                  <div className="copyright">
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer