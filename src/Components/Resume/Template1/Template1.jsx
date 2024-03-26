import React from 'react';
import './Template1.css';

function Template1({data}) {

    const {
        first_name,
        last_name,
        phone_no,
        email,
        address,
        social_links,
        education,
        job,
        achievement,
        soft_skill,
        technical_skill,
        project
      } = data;

  return (
    <>
      <div className="container">
        <div className="container-header">
          <div className="full-name">
            <span className="first-name">{`${first_name}`}</span> 
            <span className="last-name">{`${last_name}`}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{`${email}`}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">{`${phone_no}`}</span>
          </div>
          
          <div className="about">
            <span className="position">Front-End Developer </span>
            <span className="desc">
              I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
            </span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">KlowdBox</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  {/* <div className="name">Sample Institute of technology</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div> */}
                  {education.map(edu => (
            <li key={edu.title}>{edu.title} - {edu.year}</li>
          ))}
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Projects</div> 
            <div className="section__list">
              <div className="section__list-item">
                <div className="name">DSP</div>
                <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
              </div>
              <div className="section__list-item">
                <div className="name">DSP</div>
                <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Soft-Skills</div>
            <div className="skills">
              <div className="skills__item">
                <div className="left">
                  <div className="name">Javascript</div>
                </div>
              </div>
              <div className="skills__item">
                <div className="left">
                  <div className="name">CSS</div>
                </div>
                <div className="right">
                  <input  id="ck6" type="checkbox" checked/>
                  <label htmlFor="ck6"></label>
                  <input id="ck7" type="checkbox" checked/>
                  <label htmlFor="ck7"></label>
                  <input id="ck8" type="checkbox" />
                  <label htmlFor="ck8"></label>
                  <input id="ck9" type="checkbox" />
                  <label htmlFor="ck9"></label>
                  <input id="ck10" type="checkbox" />
                  <label htmlFor="ck10"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <div className="section__list-item">Football, programming.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template1;
