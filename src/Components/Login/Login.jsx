import React from 'react'
import './Login.css'

const extra = () => {
  return (
    <div>
        <header>
          <div className="header-main">
              <div className="svg-logo"></div>
          </div>
      </header>
      <div className="login-reg">
          <div className="login-page">
              <div className="login-page-left">
                  <div className="login-info">
                      <div className="login-info-site-logo">
                          <div className="login-info-site-div">
                              <div className="site-logo"></div>
                          </div>
                      </div>
                      <div className="login-title">
                          <h1>The Best Free Online Resume Builder</h1>
                      </div>
                      <p>A Quick and Easy Way to Create Your Professional Resume.</p>
                  </div>
              </div>
              <div className="login-page-right">
                  <div className="login-block">
                      <div className="login">
                          <h3>Welcome to <span>Resume Builder</span></h3>
                          <div className="login-signup">
                              <div className="toggle-base">
                                  <span className="signUp active">Sign Up</span>
                                  <span className="Login">Login</span>
                              </div>
                          </div>
                          <div className="social-login"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
  )
}

export default extra
