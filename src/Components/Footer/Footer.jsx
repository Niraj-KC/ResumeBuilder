// Footer.js
import React from 'react';
import './Footer.css'
import logo from '../../assets/rb-new-logo-color.svg'

function Footer() {
  return (
        <div className="footer">
            <div className="footer-main">
                <div className="top-footer">
                    <div className="footer-logo-block">
                        <div className="footer-logo">
                            <a className="footer-anker">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="footer-img2"></div>
                        <div className="footer-media">
                            <a></a>
                        </div>
                    </div>
                    <div className="column">
                        <h3 className="mb">Build Your Resume</h3>
                        <ul className="ul-list">
                            <li className="mb"><a>Basic Resume Examples</a></li>
                            <li className="mb"><a>How To Write a Resume</a></li>
                            <li className="mb"><a>Resume Builder App</a></li>
                            <li className="mb"><a>Resume Examples</a></li>
                            <li className="mb"><a>Resume Templates</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3 className="mb">Career Resources</h3>
                        <ul className="ul-list">
                            <li className="mb"><a>Cover Letter Examples</a></li>
                            <li className="mb"><a>How To Write a Cover Letter</a></li>
                            <li className="mb"><a>Job Search Resource Center</a></li>
                            <li className="mb"><a>Thank You Note Examples</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3 className="mb">About Resume Builder</h3>
                        <ul className="ul-list">
                            <li className="mb"><a>About Us</a></li>
                            <li className="mb"><a>Contact Us</a></li>
                            <li className="mb"><a>Privacy Policy</a></li>
                            <li className="mb"><a>Terms of Service</a></li>
                            <li className="mb"><a>Press</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-med">
                    <div className="med-dark"></div>
                </div>
                <div className="footer-end">
                    <p>Copyright © 2024 All rights reserved ResumeBuilder.com</p>
                </div>
            </div>
        </div>
  );
}

export default Footer;
