import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Header.css';
import logo from '../../assets/rb-new-logo-color.svg';

function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="nav-ops">
            <Link to="/Template_rb">Resume Builder App</Link> {/* Example Link */}
            <Link to="/resume_examples">Resume Examples</Link> {/* Example Link */}
            <Link to="/cover_letter_examples">Cover Letter Examples</Link> {/* Example Link */}
            <Link to="/resume_templates">Resume Templates</Link> {/* Example Link */}
            <Link to="/Login">Log In</Link> {/* Link to Login Page */}
            <div className="nav-extra"></div>
            <Link to="/Template_rb"><div className="nav-ops2">
              <a className="nav-anker">
                <span className="aaa">Build My Resume</span>
              </a>
            </div></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
