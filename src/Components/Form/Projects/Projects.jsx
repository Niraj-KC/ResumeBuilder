import React from 'react';
import './Projects.css';

import { useDispatch, useSelector } from "react-redux";
import { updateProjects, updateSelectedRow } from '../../../state/action-creator/actions';

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.formData.project);
    const selectedRow = useSelector(state => state.selectedRow.project);


    const addProjectRow = () => {
        // const newId = projects.length + 1;
        // setProjectRow([...projects, { id: newId, title: '', date: '', description: '', link: '' }]);
        dispatch(updateProjects([...projects, { title: '', date: '', description: '', link: '' }]))


        setTimeout(() => {
            dispatch(updateSelectedRow({ project: projects.length }));
        }, 1);
    };

    const setSelectRowNull = () => {
        dispatch(updateSelectedRow({ project: null }));
    }

    const deleteProjectRow = (idx) => {
        // setProjectRow(projects.filter(row => idx !== id));
        dispatch(updateProjects(projects.filter((_, index) => index !== idx)))
        setSelectRowNull();
    };

    const handleChange = (key, value) => {
        // console.log("k:", key, "v", value);

        if (selectedRow == null) {
            addProjectRow();
        }
        var updatedProjects = [...projects];
        updatedProjects[selectedRow] = { ...updatedProjects[selectedRow], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updateProjects(updatedProjects));
    };


    const handleRowClick = (idx) => {
        dispatch(updateSelectedRow({ project: idx }));
    };

    return (
        <div>
            <div className="title-btn">
                <div className="sl">Projects</div>
            </div>
            <div className="for-flex">
                <div className="field-wrap-profesion" key={selectedRow}>
                    <div className="name-and-role">
                        <div className="field-wrap bdr">
                            <label htmlFor={`projectTitle${selectedRow}`}>Title</label>
                            <input
                                type="text"
                                id={`projectTitle${selectedRow}`}
                                name={`projectTitle${selectedRow}`}
                                value={projects[selectedRow]?.title || ""}
                                onChange={(e) => handleChange('title', e.target.value)}
                                required
                            />
                        </div>
                        <div className="field-wrap bdr">
                            <label htmlFor={`projectDate${selectedRow}`}>Date</label>
                            <input
                                type="date"
                                id={`projectDate${selectedRow}`}
                                name={`projectDate${selectedRow}`}
                                value={projects[selectedRow]?.date || ""}
                                onChange={(e) => handleChange('date', e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="field-wrap-inp bdr">
                        <label htmlFor={`projectDesc${selectedRow}`}>Description</label>
                        <textarea
                            type="text"
                            id={`projectDesc${selectedRow}`}
                            name={`projectDesc${selectedRow}`}
                            value={projects[selectedRow]?.desp || ""}
                            onChange={(e) => handleChange('desp', e.target.value)}
                            required
                        ></textarea><br />
                    </div>
                    <div className="for-link">
                        <label htmlFor={`projectLink${selectedRow}`}>Link</label><br />
                        <input
                            type="text"
                            id={`projectLink${selectedRow}`}
                            name={`projectLink${selectedRow}`}
                            value={projects[selectedRow]?.link || ""}
                            onChange={(e) => handleChange('link', e.target.value)}
                            required
                        />
                    </div>

                </div>
            </div>
            <div className="pjt-btn-div" id="addProject">
                <div className="pjt-btn-main" onClick={setSelectRowNull}>
                    <div className="pjt-plus-sign">+</div>
                    <div>Add More</div>
                </div>
            </div>

            {/* Table to display added rows */}
            <table className="project-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Year</th>
                        <th>Link</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, idx) => (
                        <tr key={idx} onClick={() => handleRowClick(idx)} className={selectedRow === idx ? 'selected' : ''}>
                            <td>{project.title}</td>
                            <td>{project.desp}</td>
                            <td>{project.date}</td>
                            <td>{project.link}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteProjectRow(idx)}></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Projects;
