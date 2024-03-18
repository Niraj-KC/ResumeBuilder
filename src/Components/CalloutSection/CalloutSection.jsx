// CalloutSection.js
import React from 'react';
import './CalloutSection.css'
import brand1 from '../../assets/brand-1.svg'
import brand2 from '../../assets/brand-2-1.svg'
import brand3 from '../../assets/brand-3.svg'
import brand4 from '../../assets/brand-4.svg'
import brand5 from '../../assets/brand-5.svg'
import brand6 from '../../assets/brand-6.svg'
import brand7 from '../../assets/brand-7.svg'
import brand8 from '../../assets/brand-8.svg'
import brand9 from '../../assets/brand-9.svg'
import brand10 from '../../assets/brand-10.svg'
import brand11 from '../../assets/brand-11.svg'
import { Link } from 'react-router-dom';


function CalloutSection() {
  return (
    <div className="callout-wrap">
        <div className="callout-main">
            <div className="callout-main-h2">
                <h2>Let’s Land Your Dream Job Together</h2>
            </div>
            <div className="callout-main-anker">
                <Link to="/Template_rb">
                <a className="callout-btn-anker">
                    <div className="callout-btn">
                        <a>Start Your Resume Now</a>
                    </div>
                </a>
                </Link>
            </div>
            <div className="brand-wrap-div">
                <div className="brand-wrap">
                    <div className="brand-wrap-1">
                        <div className="callout-brand-title">
                            As seen in
                        </div>
                    </div>
                    <div className="brand-wrap-2">
                        <div className="brand-list-1">
                            <ul className="brand-list-ul">
                                <li className="li-img box"><img src={brand1} alt=""/></li>
                                <li className="li-img2 box"><img src={brand2} alt=""/></li>
                                <li className="li-img3 box"><img src={brand3} alt=""/></li>
                                <li className="li-img4 box"><img src={brand4} alt=""/></li>
                                <li className="li-img5 box"><img src={brand5} alt=""/></li>
                                <li className="li-img6 box"><img src={brand6} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="brand-wrap-3">
                        <div className="brand-list-2">
                            <ul className="brand-list-ul2">
                                <li className="li-img7 box"><img src={brand7} alt=""/></li>
                                <li className="li-img8 box"><img src={brand8} alt=""/></li>
                                <li className="li-img9 box"><img src={brand9} alt=""/></li>
                                <li className="li-img10 box"><img src={brand10} alt=""/></li>
                                <li className="li-img11 box"><img src={brand11} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CalloutSection;
