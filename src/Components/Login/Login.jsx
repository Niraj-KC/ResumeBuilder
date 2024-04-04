import React from 'react'

import './Login.css'
import { BASE_URL } from "../../Utils/config/config.js"
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';
import HeaderTemplate from '../../Utils/HeaderTemplate/HeaderTemplate';

const extra = () => {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
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
                var data = { email: email, password: password };
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
                            console.log("data", data);
                            setLoggedIn(true);
                            localStorage.setItem("AppUser", JSON.stringify(data.response_data.user));
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
                var data = { first_name: first_name, last_name: last_name, email: email, password: password };
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
                        if (data.response_data.created) {
                            setLoggedIn(true);
                            localStorage.setItem("AppUser", JSON.stringify(data.response_data.user));
                            navigate("/");
                        }
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
                                                <div className="field-wrap-email">First Name</div>
                                                <input type="text" value={first_name} onChange={(e)=>{setFirstName(e.target.value.trim())}}   placeholder="Enter Your First Name" />
                                            </div>
                                            <div className="field-wrap">
                                                <div className="field-wrap-email">Last Name</div>
                                                <input type="text" value={last_name}  onChange={(e)=>{setLastName(e.target.value.trim())}} placeholder="Enter Your Last Name" />
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
