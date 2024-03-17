import React from "react";
import './Form.css'
import { useState } from 'react';

const Form = () => {
    //comment
    const [educationRows, setEducationRows] = useState([{ id: 1 }]);
    const [pastjobRow, setPastjobRow] = useState([{ id: 1 }]);
    const [AchivementRow, setAchivementRow] = useState([{ id: 1 }]);
    const [softSkillsRows, setSoftSkillsRows] = useState([{ id: 1 }]);
    const [techincalskillsRows, setTechnicalSkillsRow] = useState([{ id: 1 }]);
    const [projectsRows, setProjectRow] = useState([{ id: 1 }]);

    const addPastjobRow = () => {
        const newId = pastjobRow.length + 1;
        setPastjobRow([...pastjobRow, { id: newId }]);
    };

    const addEducationRow = () => {
        const newId = educationRows.length + 1;
        setEducationRows([...educationRows, { id: newId }]);
    };

    const addAchivementRow = () => {
        const newId = AchivementRow.length + 1;
        setAchivementRow([...AchivementRow, { id: newId }]);
    }
    const addSoftSkillsRow = () => {
        const newId = softSkillsRows.length + 1;
        setSoftSkillsRows([...softSkillsRows, { id: newId }]);
    };
    const addTechnicalSkillsRow = () => {
        const newId = techincalskillsRows.length + 1;
        setTechnicalSkillsRow([...techincalskillsRows, { id: newId }]);
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) { // Enter key
            addSoftSkillsRow();
        }
    };
    const addProjectRow = () => {
        const newId = projectsRows.length + 1;
        setProjectRow([...projectsRows, { id: newId }]);
    }

    const deleteEducationRow = (id) => {
        setEducationRows(educationRows.filter(row => row.id !== id));
    };

    const deletePastjobRow = (id) => {
        setPastjobRow(pastjobRow.filter(row => row.id !== id));
    };
    const deleteAchivementRow = (id) => {
        setAchivementRow(AchivementRow.filter(row => row.id !== id));
    }
    const deletesoftSkillRow = (id) => {
        setSoftSkillsRows(softSkillsRows.filter(row => row.id !== id));
    }
    const deletetechnicalskillsRow = (id) => {
        setTechnicalSkillsRow(techincalskillsRows.filter(row => row.id !== id));
    }
    const deleteProjectRow = (id) => {
        setProjectRow(projectsRows.filter(row => row.id !== id));
    }

    return (
        <>
            <header>
                <div className="header-main">
                    <div className="svg-logo"></div>
                </div>
            </header>
            <div className="main-content">
                <div className="main-content-pannel">
                    <div className="main-content-pannel-left">
                        <div className="editor-block-top">
                            <div className="template">
                                <div className="template-btn">
                                    <div className="change-temp-action"><span>Templates</span></div>
                                </div>
                            </div>
                            <div className="editor-inner-block">
                                <div className="editor-area-blueline">
                                    <ul className="step-wizard-list">
                                        <li className="step-wizard-item">
                                            <span className="progress-count">1</span>
                                            <span className="progress-label">Personal Detail</span>
                                        </li>
                                        <li className="step-wizard-item current-item">
                                            <span className="progress-count">2</span>
                                            <span className="progress-label">Profession Details</span>
                                        </li>
                                    </ul>
                                    <div className="editor-form-wrap">
                                        <div className="editor-form" style={{ display: "none" }}>
                                            <div className="form-row">
                                                <div className="field-wrap">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" name="firstName" required /><br /><br />
                                                </div>
                                                <div className="field-wrap">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" name="lastName" required /><br /><br />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrap">
                                                    <label htmlFor="job">Job Title</label>
                                                    <input type="text" id="job" name="job" required /><br /><br />
                                                </div>
                                                <div className="field-wrap">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" id="phone" name="phone" required /><br /><br />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="field-wrap1">
                                                    <label htmlFor="email">Email Address</label>
                                                    <input type="text" id="email" name="email" required />
                                                    <p className="email-declaimer">By creating a resume, you agree to receive emails
                                                        — unsubscribe anytime.</p>
                                                </div>
                                                <div className="field-wrap">
                                                    <label htmlFor="address">Address</label>
                                                    <input type="text" id="address" name="address" required /><br /><br />
                                                </div>
                                            </div>
                                            <div className="social-link">
                                                <div className="sl">Social Links</div>
                                                <div className="form-row">
                                                    <div className="field-wrap">
                                                        <label htmlFor="description">Description (optional)</label>
                                                        <input type="text" id="description" name="description" required /><br /><br />
                                                    </div>
                                                    <div className="field-wrap">
                                                        <label htmlFor="link">Link/Text/Etc.</label>
                                                        <input type="text" id="link" name="link" required /><br /><br />
                                                    </div>
                                                </div>
                                            </div><br />
                                            <div className="education-info">
                                                <div className="sl">Education</div>
                                                <div className="for-flex">
                                                    {educationRows.map(row => (
                                                        <div className="form-row" key={row.id}>
                                                            <div className="field-wrap">
                                                                <label htmlFor={`educationTitle${row.id}`}>Title</label>
                                                                <input type="text" id={`educationTitle${row.id}`} name={`educationTitle${row.id}`} required /><br /><br />
                                                            </div>
                                                            <div className="field-wrap">
                                                                <label htmlFor={`educationYear${row.id}`}>Year</label>
                                                                <input type="text" id={`educationYear${row.id}`} name={`educationYear${row.id}`} required /><br /><br />
                                                            </div>
                                                            {educationRows.length > 1 &&
                                                                <button className="delete-button" onClick={() => deleteEducationRow(row.id)}></button>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="main-btn" id="addEducation" onClick={addEducationRow}>
                                                <div className="plus-sign">+</div>
                                                <div className="button">Add One More</div>
                                            </div>
                                        </div>
                                        <div className="profesion-info">
                                            <div className="personal-info-main">
                                                <div className="title-btn">
                                                    <div className="sl">Past Job</div>

                                                </div>
                                                <div className="for-flex">
                                                    {pastjobRow.map(row => (
                                                        <div className="field-wrap-profesion" key={row.id}>
                                                            <div className="name-and-role">
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`compnyName${row.id}`}>Compny Name</label>
                                                                    <input type="text" className="no-outline" id={`educationTitle${row.id}`} name={`educationTitle${row.id}`} required />
                                                                </div>
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`compnyRole${row.id}`}>Role</label>
                                                                    <input type="text" id={`compnyRole${row.id}`} name={`compnyRole${row.id}`} required />
                                                                </div>
                                                            </div>
                                                            <div className="past-date">
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`compnyForm${row.id}`}>From</label>
                                                                    <input type="date" id={`compnyForm${row.id}`} name={`compnyForm${row.id}`} required />
                                                                </div>
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`compnyForm${row.id}`}>To</label>
                                                                    <input type="date" id={`compnyForm${row.id}`} name={`compnyForm${row.id}`} required />
                                                                </div>
                                                            </div>
                                                            <div className="field-wrap-inp bdr">
                                                                <label htmlFor={`compnyForm${row.id}`}>Description</label>
                                                                <textarea type="text" id={`compnyForm${row.id}`} name={`compnyForm${row.id}`} required> </textarea>
                                                            </div>
                                                            {/* <button className="delete-button" id="del" onClick={deletePastjobRow}></button> */}
                                                            {pastjobRow.length > 1 &&
                                                                <button className="delete-button" onClick={() => deletePastjobRow(row.id)}></button>
                                                            }
                                                        </div>
                                                    ))}

                                                </div>
                                                <div className="main-btn" id="addEducation" onClick={addPastjobRow}>
                                                    <div className="plus-sign">+</div>
                                                    <div className="button">Add One More</div>
                                                </div>
                                                <div className="title-btn">
                                                    <div className="sl">Achivements</div>
                                                </div>
                                                <div className="for-flex">
                                                    {AchivementRow.map(row => (
                                                        <div className="field-wrap-profesion" key={row.id}>
                                                            <div className="name-and-role">
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`AchivementTitle${row.id}`}>Title</label>
                                                                    <input type="text" id={`AchivementTitle${row.id}`} name={`AchivementTitle${row.id}`} required />
                                                                </div>
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`AchivementDate${row.id}`}>Date</label>
                                                                    <input type="text" id={`AchivementDate${row.id}`} name={`AchivementDate${row.id}`} required />
                                                                </div>
                                                            </div>
                                                            <div className="field-wrap-inp bdr">
                                                                <label htmlFor={`AchivementDesc${row.id}`}>Description</label>
                                                                <textarea type="text" id={`AchivementDesc${row.id}`} name={`AchivementDesc${row.id}`} required></textarea>
                                                            </div>
                                                            {AchivementRow.length > 1 &&
                                                                <button className="delete-button" onClick={() => deleteAchivementRow(row.id)}></button>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="main-btn" id="addEducation">
                                                    <div className="plus-sign">+</div>
                                                    <div className="button" onClick={addAchivementRow}>Add One More</div>
                                                </div>
                                                <div className="sl">Soft Skills</div>
                                                <div className="for-flex">
                                                    {softSkillsRows.map(row => (
                                                        <div className="field-wrap-achivements" key={row.id}>
                                                            <div className="field-wrap">
                                                                <input type="text" id={`educationTitle${row.id}`} name={`educationTitle${row.id}`} required onKeyDown={handleKeyDown} /><br /><br />
                                                            </div>
                                                            {softSkillsRows.length > 1 &&
                                                                <button className="delete-button" onClick={() => deletesoftSkillRow(row.id)}></button>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="main-btn" id="addEducation" onClick={addSoftSkillsRow}>
                                                    <div className="plus-sign">+</div>
                                                    <div className="button">Add One More</div>
                                                </div>
                                                {/* <div className="sl">Technical Skill</div>
                                                <div className="for-flex">
                                                    <div className="field-wrap-achivements">
                                                        <div className="field-wrap">
                                                            <label htmlFor="educationTitle"></label>
                                                            <input type="text" id="educationTitle" name="educationTitle"
                                                                required /><br /><br />
                                                        </div>
                                                        <button className="delete-button" id="del"></button>
                                                    </div>
                                                </div>
                                                <div className="main-btn" id="addEducation">
                                                    <div className="plus-sign">+</div>
                                                    <div className="button">Add One More</div>
                                                </div> */}
                                                <div className="sl">Technical Skill</div>
                                                <div className="for-flex">
                                                    {techincalskillsRows.map(row => (
                                                        <div className="field-wrap-achivements" key={row.id}>
                                                            <div className="field-wrap">
                                                                <input type="text" id={`educationTitle${row.id}`} name={`educationTitle${row.id}`} required /><br /><br />
                                                            </div>
                                                            {techincalskillsRows.length > 1 &&
                                                                <button className="delete-button" onClick={() => deletetechnicalskillsRow(row.id)}></button>
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="main-btn" id="addEducation" onClick={addTechnicalSkillsRow}>
                                                    <div className="plus-sign">+</div>
                                                    <div className="button">Add One More</div>
                                                </div>
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
                                                                    <input type="text" id={`projectTitle${row.id}`} name={`projectTitle${row.id}`}required />
                                                                </div>
                                                                <div className="field-wrap bdr">
                                                                    <label htmlFor={`projectDate${row.id}`}>Date</label>
                                                                    <input type="text" id={`projectDate${row.id}`} name={`projectDate${row.id}`}required />
                                                                </div>
                                                            </div>
                                                            <div className="field-wrap-inp bdr">
                                                                <label htmlFor={`projectDesc${row.id}`}>Description</label>
                                                                <textarea type="text" id={`projectDesc${row.id}`} name={`projectDesc${row.id}`}required> </textarea><br />
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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-content-pannel-right">

                    </div>
                </div>
            </div>
        </>

    )
}

export default Form;
