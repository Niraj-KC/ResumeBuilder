import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = ({ updateProjects }) => {
    const [projectsRows, setProjectRow] = useState([{ id: 1, title: '', date: '', description: '', link: '' }]);

    const addProjectRow = () => {
        const newId = projectsRows.length + 1;
        setProjectRow([...projectsRows, { id: newId, title: '', date: '', description: '', link: '' }]);
    };

    const deleteProjectRow = (id) => {
        setProjectRow(projectsRows.filter(row => row.id !== id));
    };

    const handleChange = (id, key, value) => {
        const updatedProjects = projectsRows.map(project => {
            if (project.id === id) {
                return { ...project, [key]: value };
            }
            return project;
        });
        setProjectRow(updatedProjects);
    };

    useEffect(() => {
        updateProjects(projectsRows);
    }, [projectsRows, updateProjects]);

    return (
        <div>
            <div className="title-btn">
                <div className="sl">Projects</div>
            </div>
            <div className="for-flex">
                {projectsRows.map(row => (
                    <div className="field-wrap-profesion" key={row.id}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectTitle${row.id}`}>Title</label>
                                <input
                                    type="text"
                                    id={`projectTitle${row.id}`}
                                    name={`projectTitle${row.id}`}
                                    value={row.title}
                                    onChange={(e) => handleChange(row.id, 'title', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectDate${row.id}`}>Date</label>
                                <input
                                    type="text"
                                    id={`projectDate${row.id}`}
                                    name={`projectDate${row.id}`}
                                    value={row.date}
                                    onChange={(e) => handleChange(row.id, 'date', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`projectDesc${row.id}`}>Description</label>
                            <textarea
                                type="text"
                                id={`projectDesc${row.id}`}
                                name={`projectDesc${row.id}`}
                                value={row.description}
                                onChange={(e) => handleChange(row.id, 'description', e.target.value)}
                                required
                            ></textarea><br />
                        </div>
                        <div className="for-link">
                            <label htmlFor={`projectLink${row.id}`}>Link</label><br />
                            <input
                                type="text"
                                id={`projectLink${row.id}`}
                                name={`projectLink${row.id}`}
                                value={row.link}
                                onChange={(e) => handleChange(row.id, 'link', e.target.value)}
                                required
                            />
                        </div>
                        {projectsRows.length > 1 &&
                            <button className="delete-button" onClick={() => deleteProjectRow(row.id)}>-</button>
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
