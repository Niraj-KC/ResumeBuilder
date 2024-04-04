import React from 'react';
import './Resume.css'; // Import CSS file for styling

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

const Resume = () => {
  const formData = useSelector(state => state.formData);

  useEffect(() => {

    console.log("resume--fd: ", formData);
  }, []);

  return (
    <div className="resume">
      <div className="resume-top">
        <h2>{`${formData.first_name} ${formData.last_name}`}</h2>
        <p>Phone: {formData.phone_no}</p>
        <p>Email: {formData.email}</p>
        <p>Address: {formData.address}</p>
      </div>

      <div className="resume-body">

        <div className="section">
          <h3>Social Links</h3>
          <ul>
            {formData.social_links.map(link => (
              <li key={link}><a href={`http://${link}`} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Education</h3>
          <ul>
            {formData.education.map(edu => (
              <li key={edu.title}>{edu.title} - {edu.year}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Job Experience</h3>
          <ul>
            {formData.job.map(exp => (
              <li key={exp.company}>
                <strong>{exp.role} at {exp.company}</strong><br />
                {exp.desp}<br />
                {exp.date} {exp.is_current ? '- Present' : ''}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Achievements</h3>
          <ul>
            {formData.achievement.map(ach => (
              <li key={ach.title}>
                <strong>{ach.title}</strong><br />
                {ach.desp}<br />
                {ach.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="all-skills">
          <div className="section">
            <h3>Soft Skills</h3>
            <ul>
              {formData.soft_skill.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="section ml">
            <h3>Technical Skills</h3>
            <ul>
              {formData.technical_skill.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section">
          <h3>Projects</h3>
          <ul>
            {formData.project.map(proj => (
              <li key={proj.title}>
                <strong>{proj.title}</strong><br />
                {proj.desp}<br />
                <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Resume;
