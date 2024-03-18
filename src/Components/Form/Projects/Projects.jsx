import React from 'react'
import './Projects.css';
import { useState } from 'react';

const Projects = () => {

    const [projectsRows, setProjectRow] = useState([{ id: 1 }]);

    const addProjectRow = () => {
        const newId = projectsRows.length + 1;
        setProjectRow([...projectsRows, { id: newId }]);
    }

    const deleteProjectRow = (id) => {
        setProjectRow(projectsRows.filter(row => row.id !== id));
    }

    return (
        <div>
            <div className="title-btn">
                <div className="sl">Projects</div>
                {/* <button className="delete-button" id="del"></button> */}
            </div>
            <div className="for-flex">
                {projectsRows.map(row => (
                    <div className="field-wrap-profesion" key={row.id}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectTitle${row.id}`}>Title</label>
                                <input type="text" id={`projectTitle${row.id}`} name={`projectTitle${row.id}`} required />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`projectDate${row.id}`}>Date</label>
                                <input type="text" id={`projectDate${row.id}`} name={`projectDate${row.id}`} required />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`projectDesc${row.id}`}>Description</label>
                            <textarea type="text" id={`projectDesc${row.id}`} name={`projectDesc${row.id}`} required> </textarea><br />
                        </div>
                        <div className="for-link">
                            <label htmlFor={`projectLink${row.id}`}>Link</label><br />
                            <input type="text" id={`projectLink${row.id}`} name={`projectLink${row.id}`} required />
                        </div>
                        {projectsRows.length > 1 &&
                            <button className="delete-button" onClick={() => deleteProjectRow(row.id)}></button>
                        }
                    </div>
                ))}
            </div>
            <div className="main-btn" id="addEducation">
                <div className="plus-sign">+</div>
                <div className="button" onClick={addProjectRow}>Add One More</div>
            </div>
        </div>
    )
}

export default Projects
