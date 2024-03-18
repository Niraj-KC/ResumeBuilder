import React from 'react';
import { useEffect,useRef } from 'react';
import './MainSection.css'
import { Link } from 'react-router-dom';

function MainSection() {

    const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const isImg1Visible = useRef(true); 

  useEffect(() => {
    function toggleImages() {
        if (isImg1Visible.current) {
          img1Ref.current.style.transform = 'rotateY(-180deg)';
          img1Ref.current.style.opacity = '0';
      
          img2Ref.current.style.transform = 'rotateY(0deg)'; 
          img2Ref.current.style.opacity = '1';
      
          isImg1Visible.current = false;
        } else {
          img1Ref.current.style.transform = 'rotateY(-360deg)';
          img1Ref.current.style.opacity = '1';
      
          img2Ref.current.style.transform = 'rotateY(-180deg)';
          img2Ref.current.style.opacity = '0';
      
          isImg1Visible.current = true;
        }
      }
      

    const intervalId = setInterval(toggleImages, 5000);

    return () => clearInterval(intervalId);
  }, []);

    return (
        <div className="main">
            <div className="home-banner">
                <div className="home-banner-left">
                    <div className="banner-img">
                        <div className="banner-img1" ref={img1Ref}></div>
                        <div className="banner-img2" ref={img2Ref}></div>
                    </div>
                </div>
                <div className="home-banner-right-outer">
                    <div className="right-details">
                        <div className="heading">
                            <h1>The Best Online</h1>
                            <h1>Resume Builder</h1>
                        </div>
                        <div className="para">
                            Easily create the perfect resume for any job using our best-in-class resume builder platform.
                        </div>
                        <div className="cta-link">
                            <div className="div-cta-link">
                                <Link to="/Template_rb">
                                    <a className="primary-btn-banner-cta">
                                        <span>Create My Resume Now</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="stats-wrap">
                            <div className="stats-inner">
                                <div className="stats">
                                    <div className="stats-percentage">
                                        <div className="stats-img"> </div>
                                        <span>2x</span>
                                    </div>
                                    <p>more interviews</p>
                                </div>
                                <div className="stats">
                                    <div className="stats-percentage">
                                        <div className="stats-img"></div>
                                        <span>25%</span>
                                    </div>
                                    <p> more job offers </p>
                                </div>
                            </div>
                        </div>
                        <div className="brand-title">
                            <span>Subscribers have been hired by:</span>
                        </div>
                        <marquee behavior="scroll" direction="left" ><div className="scrolling-img"></div></marquee>
                    </div>

                </div>

            </div>
            <p>Our online resume builder offers a quick and easy way to create your professional resume from over 30 design templates. Create a resume using our AI-powered online resume wizard, plus take advantage of expert suggestions and customizable modern and professional resume templates. Free users have access to our easy-to-use tool and TXT file downloads.</p>
        </div>
    );
}

export default MainSection;
