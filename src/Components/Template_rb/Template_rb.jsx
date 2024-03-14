import React from 'react'
import './Template_rb.css';
import mix from '../../assets/multi-color.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Template_rb = () => {
  return (
    <>
      <header>
        <div className="header-main">
          <div className="svg-logo"></div>
        </div>
      </header>
      <div className="block">
        <h1>Select a Template</h1>
        <p>Select a color and a template to get started</p>
        <div className="color-selector-main">
          <ul className="color-selector">
            <li className="item border">
              <span className="color-selector-radio">
                <i className="no-color"></i>
              </span>
            </li>
            <li className="item0" style={{ backgroundColor: 'rgb(125, 125, 125)' }}></li>
            <li className="item1" style={{ backgroundColor: 'rgb(0, 0, 139)' }}></li>
            <li className="item2" style={{ backgroundColor: 'rgb(140, 0, 0)' }}></li>
            <li className="item3" style={{ backgroundColor: 'rgb(0, 80, 0)' }}></li>
            <li className="item4" style={{ backgroundColor: 'rgb(23, 169, 228)' }}></li>
            <li className="item5" style={{ backgroundColor: 'rgb(255, 127, 127)' }}></li>
            <li className="item6" style={{ backgroundColor: 'rgb(34, 166, 153)' }}></li>
            <li className="item7" style={{ backgroundColor: 'rgb(255, 204, 0)' }}></li>
            <li className="item8" style={{ backgroundColor: 'rgb(245, 241, 238)' }}></li>
            <div className="multi">
              <p>Custom:</p>
              <div className="multiple-color">
                <img src={mix} alt="" />
                <label htmlFor="input-color-picker">#B01C23</label>
              </div>
            </div>
          </ul>
        </div>
        <div className="select-templet">
          <div className="templet-items">
            {/* Repeat the following div as needed for each template */}
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
            <div className="templet-box img"></div>
          </div>
        </div>
      </div>
      <div className="skip-bar">
        <Link to="/Login"><a className="skip-link">Skip for Now</a></Link>
      </div>
      <div className="footer-container">
        <div className="footer">
          <p>© 2024 ResumeBuilder.com. All rights reserved.</p>
          <a>Contact Us.</a>
        </div>
      </div>
    </>
  )
}

export default Template_rb
