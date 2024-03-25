import React from 'react';


const ResumePDF = ({ data }) => {
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
    <div className="resume" id='resume'>
      <h2>{`${first_name} ${last_name}`}</h2>
      <p>Phone: {phone_no}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>

      <div className="section">
        <h3>Social Links</h3>
        <ul>
          {social_links.map(link => (
            <li key={link}><a href={`http://${link}`} target="_blank" rel="noopener noreferrer">{link}</a></li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Education</h3>
        <ul>
          {education.map(edu => (
            <li key={edu.title}>{edu.title} - {edu.year}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Job Experience</h3>
        <ul>
          {job.map(exp => (
            <li key={exp.company}>
              <strong>{exp.role} at {exp.company}</strong><br />
              {exp.desp}<br />
              {exp.date} - {exp.is_current ? 'Present' : 'Past'}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Achievements</h3>
        <ul>
          {achievement.map(ach => (
            <li key={ach.title}>
              <strong>{ach.title}</strong><br />
              {ach.desp}<br />
              {ach.date}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Soft Skills</h3>
        <ul>
          {soft_skill.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Technical Skills</h3>
        <ul>
          {technical_skill.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Projects</h3>
        <ul>
          {project.map(proj => (
            <li key={proj.title}>
              <strong>{proj.title}</strong><br />
              {proj.desp}<br />
              <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumePDF;
