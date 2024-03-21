import React from 'react'
import './Login.css'
import { useState } from 'react';
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';
import HeaderTemplate from '../../Utils/HeaderTemplate/HeaderTemplate';

const extra = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleShowSignupForm = () => {
        setShowLoginForm(false);
    };

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    return (
        <div>
            <HeaderTemplate />
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
                                        <span id="signup" className={`signUp ${showLoginForm ? '' : 'active'}`} onClick={handleShowSignupForm}>Register</span>
                                        <span id="login" className={`Login ${showLoginForm ? 'active' : ''}`} onClick={handleShowLoginForm}>Login</span>
                                    </div>
                                </div>
                                <div className="form">
                                    <div className={`signup-form ${showLoginForm ? 'hidden' : ''}`} id="signupForm">
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Name</div>
                                            <input type="text" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Email</div>
                                            <input type="text" placeholder="Enter Your Email Address" />
                                        </div>
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Password</div>
                                            <div className="password-wrap">
                                                <input type="text" placeholder="Enter Your Password" />
                                                {/* <div className="show-pass-img"></div> */}
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Confirm Password</div>
                                            <div className="password-wrap">
                                                <input type="text" placeholder="Enter Your Password" />
                                                <div className="show-pass-img"></div>
                                            </div>
                                        </div>
                                        <div className="field-wrap align-right">
                                            <button>Sign Up</button>
                                        </div>
                                    </div>
                                    <div className={`signup-form ${showLoginForm ? '' : 'hidden'}`} id="loginForm">
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Email</div>
                                            <input type="text" placeholder="Enter Your Email Address" />
                                        </div>
                                        <div className="field-wrap">
                                            <div className="field-wrap-email">Password</div>
                                            <div className="password-wrap">
                                                <input type="password" placeholder="Enter Your Password" />
                                                <div className="show-pass-img"></div>
                                            </div>
                                            <div className="forget-link"><a>Forgot Password?</a></div>
                                        </div>
                                        <div className="field-wrap align-right">
                                            <button>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTemplate />
        </div>

    )
}

export default extra;
