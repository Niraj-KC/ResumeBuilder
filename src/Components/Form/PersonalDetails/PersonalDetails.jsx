import React, { useState, useEffect } from "react";
import './PersonalDetails.css';

const PersonalDetails = ({ updatePersonalDetails }) => {
    const [educationRows, setEducationRows] = useState([{ id: 1 }]);

    const addEducationRow = () => {
        const newId = educationRows.length + 1;
        setEducationRows([...educationRows, { id: newId }]);
    };

    const deleteEducationRow = (id) => {
        setEducationRows(educationRows.filter(row => row.id !== id));
    };

    const handleInputChange = (e, id, key) => {
        const updatedEducationRows = educationRows.map(row => {
            if (row.id === id) {
                return { ...row, [key]: e.target.value };
            }
            return row;
        });
        setEducationRows(updatedEducationRows);
    };

    useEffect(() => {
        // Update parent component (ProfesionDetails) with personal details
        const personalDetails = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            job: document.getElementById('job').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value
            // Add more fields if needed
        };
        updatePersonalDetails(personalDetails);
    }, [educationRows, updatePersonalDetails]);

    return (
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
            <div className="education-info">
                <div className="sl">Education</div>
                <div className="for-flex">
                    {educationRows.map(row => (
                        <div className="form-row" key={row.id}>
                            <div className="field-wrap">
                                <label htmlFor={`educationTitle${row.id}`}>Title</label>
                                <input
                                    type="text"
                                    id={`educationTitle${row.id}`}
                                    name={`educationTitle${row.id}`}
                                    required
                                    onChange={(e) => handleInputChange(e, row.id, 'title')}
                                /><br /><br />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor={`educationYear${row.id}`}>Year</label>
                                <input
                                    type="text"
                                    id={`educationYear${row.id}`}
                                    name={`educationYear${row.id}`}
                                    required
                                    onChange={(e) => handleInputChange(e, row.id, 'year')}
                                /><br /><br />
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
    );
};

export default PersonalDetails;
