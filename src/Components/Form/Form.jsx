import React from "react";
import './Form.css'
import React, { useState } from 'react';

const Form = () => {
    
    const [educationRows, setEducationRows] = useState([{ id: 1 }]);

    const addEducationRow = () => {
        const newId = educationRows.length + 1;
        setEducationRows([...educationRows, { id: newId }]);
    };

    const deleteEducationRow = (id) => {
        setEducationRows(educationRows.filter(row => row.id !== id));
    };

    return (
        <>
            <header>
                <div class="header-main">
                    <div class="svg-logo"></div>
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
                                        <div className="editor-form">
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
                                                            {educationRows.length >= 1 &&
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
                                            <div className="sl">Profession Details</div>
                                            <div className="for-flex">
                                                <div className="field-wrap-profesion">
                                                    <div className="field-wrap">
                                                        <label htmlFor="educationTitle">Title</label>
                                                        <input type="text" id="educationTitle" name="educationTitle" required /><br /><br />
                                                    </div>
                                                    <div className="field-wrap-profesion">
                                                        <label htmlFor="educationYear">Role</label>
                                                        <input type="text" id="educationYear" name="educationYear" required /><br /><br />
                                                    </div>
                                                    <div className="field-wrap">
                                                        <label htmlFor="educationYear">Description</label>
                                                        <input type="text" id="educationYear" name="educationYear" required /><br /><br />
                                                    </div>
                                                    <div className="field-wrap">
                                                        <label htmlFor="educationYear">Joining Date</label>
                                                        <input type="text" id="educationYear" name="educationYear" required /><br /><br />
                                                    </div>
                                                    <button className="delete-button" id="del" style={{ visibility: 'hidden' }}></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-btn" id="addEducation">
                                            <div className="plus-sign">+</div>
                                            <div className="button">Add One More</div>
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
