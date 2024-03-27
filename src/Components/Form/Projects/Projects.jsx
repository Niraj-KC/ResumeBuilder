import React, { useState, useEffect } from 'react';
import './Projects.css';

import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from '../../../state/action-creator/actions';

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.formData.project);

    // const [projectsRows, setProjectRow] = useState([{ id: 1, title: '', date: '', description: '', link: '' }]);

    const addProjectRow = () => {
        // const newId = projects.length + 1;
        // setProjectRow([...projects, { id: newId, title: '', date: '', description: '', link: '' }]);
        dispatch(updateProjects([...projects, { title: '', date: '', description: '', link: '' }]))
    };

    const deleteProjectRow = (idx) => {
        // setProjectRow(projects.filter(row => idx !== id));
        dispatch(updateProjects(projects.filter((_, index) => index !== idx)))
    };

    const handleChange = (idx, key, value) => {
        // console.log("k:", key, "v", value);
        var updatedProjects = [...projects];
        updatedProjects[idx] = { ...updatedProjects[idx], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updateProjects(updatedProjects));
    };


    return (
        <div>
            <div className="title-btn">
                <div className="sl">Projects</div>
            </div>
            <div className="for-flex">
                {projects.map((project, idx) => (
                    <div className="field-wrap-profesion" key={idx}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectTitle${idx}`}>Title</label>
                                <input
                                    type="text"
                                    id={`projectTitle${idx}`}
                                    name={`projectTitle${idx}`}
                                    value={project.title}
                                    onChange={(e) => handleChange(idx, 'title', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectDate${idx}`}>Date</label>
                                <input
                                    type="date"
                                    id={`projectDate${idx}`}
                                    name={`projectDate${idx}`}
                                    value={project.date}
                                    onChange={(e) => handleChange(idx, 'date', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`projectDesc${idx}`}>Description</label>
                            <textarea
                                type="text"
                                id={`projectDesc${idx}`}
                                name={`projectDesc${idx}`}
                                value={project.description}
                                onChange={(e) => handleChange(idx, 'description', e.target.value)}
                                required
                            ></textarea><br />
                        </div>
                        <div className="for-link">
                            <label htmlFor={`projectLink${idx}`}>Link</label><br />
                            <input
                                type="text"
                                id={`projectLink${idx}`}
                                name={`projectLink${idx}`}
                                value={project.link}
                                onChange={(e) => handleChange(idx, 'link', e.target.value)}
                                required
                            />
                        </div>
                        {projects.length > 1 &&
                            <button className="delete-button" onClick={() => deleteProjectRow(idx)}>-</button>
                        }
                    </div>
                ))}
            </div>
            <div className="main-btn" id="addEducation">
                <div className="plus-sign">+</div>
                <div className="button" onClick={addProjectRow}>Add One More</div>
            </div>
        </div>
    );
};

export default Projects;
