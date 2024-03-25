import React from 'react'

import './Login.css'
import { BASE_URL } from "../../Utils/config/config.js"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderTemplate from '../../Utils/Header/HeaderTemplate';
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';

const extra = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleShowSignupForm = () => {
        setShowLoginForm(false);
    };

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (showLoginForm) {
            try {
                var data = { email: "abc@asd.com", password: "password123456" };
                fetch(`${BASE_URL}/authentication/login/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("#reg-res: ", data);
                        if (data.response_data.is_authenticated) {
                            setLoggedIn = true;
                            localStorage.setItem("AppUser", true);
                            navigate("/");
                        }
                    })

            } catch (err) {
                setError('Invalid credentials');
                console.error(err);
            }
        }
        else {
            try {
                var data = { first_name: "fn", last_name: "ln", email: "abc@asd.com", password: "password123456" };
                fetch(`${BASE_URL}/authentication/register/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("#reg-res: ", data);
                    })

            } catch (err) {
                // setError('Invalid credentials');
                console.error(err);
            }
        }
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
                            <form method="post" onSubmit={handleSubmit}>
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
                                                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="field-wrap">
                                                <div className="field-wrap-email">Password</div>
                                                <div className="password-wrap">
                                                    <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
                                                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="field-wrap">
                                                <div className="field-wrap-email">Password</div>
                                                <div className="password-wrap">
                                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                    <div className="show-pass-img"></div>
                                                </div>
                                                <div className="forget-link"><a>Forgot Password?</a></div>
                                            </div>
                                            <div className="field-wrap align-right">
                                                <button>Login</button>
                                            </div>
                                            {error && <p>{error}</p>}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTemplate />
        </div>

    )
}

export default extra;
