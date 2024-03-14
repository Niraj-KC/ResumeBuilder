import React from 'react'
import './ThreeColumnSection.css'
import { Link } from 'react-router-dom'
// import AI from '../../assets/artificial-intelligence.png'
// import resume from '../../assets/resume.png'
// import color from '../../assets/color-pick.png'
// import window from '../../assets/windows.png'
// import file from '../../assets/files.png'
// import check from '../../assets/check.png'   

const ThreeColumnSection = () => {
    return (
        <div className="three-column-wrap">
            <div className="main-1">
                <div className="main-1-add">
                    <h2>Get hired 33% faster with our feature-packed and </h2>
                    <h2>easy-to-use resume builder app</h2>
                </div>
                <div className="total-block">
                    <div className="three-column">
                        <div className="block1">
                            <div className="block-img one"></div>
                            <div className="block-title">
                                AI resume builder
                            </div>
                            <div className="block-para">
                                <p> Use AI-enabled resume suggestions in the Resume Builder app to write a keyword-rich resume.</p>
                            </div>
                        </div>
                        <div className="block1">
                            <div className="block-img two"></div>
                            <div className="block-title">
                                Professional templates
                            </div>
                            <div className="block-para">
                                <p>Choose from over 30 applicant tracking systems (ATS)-friendly modern and professional templates.</p>
                            </div>
                        </div>
                        <div className="block1">
                            <div className="block-img three"></div>
                            <div className="block-title">
                                Customize fonts and colors
                            </div>
                            <div className="block-para">
                                <p>Select custom fonts and colors on any resume template.</p>
                            </div>
                        </div>
                        <div className="block1">
                            <div className="block-img four"></div>
                            <div className="block-title">
                                Free resume examples
                            </div>
                            <div className="block-para">
                                <p>Use our more than 500 resume examples and templates to see what a great resume looks like in your field.</p>
                            </div>
                        </div>
                        <div className="block1">
                            <div className="block-img five"></div>
                            <div className="block-title">
                                ATS-friendly templates
                            </div>
                            <div className="block-para">
                                <p>Sail through applicant tracking systems with resume templates that appeal to both machines and humans.</p>
                            </div>
                        </div>
                        <div className="block1">
                            <div className="block-img six"></div>
                            <div className="block-title">
                                Expert tips and guidance
                            </div>
                            <div className="block-para">
                                <p>Get help every step of the way as you build your resume with expert tips and suggested phrases.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn-anker">
                    <div className="primary-btn">
                        <span>Get Started Now</span>
                    </div>
                </a>
                
            </div>
            
        </div>
        
    )
}

export default ThreeColumnSection;
