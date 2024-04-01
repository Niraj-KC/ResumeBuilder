import React from 'react';
import './Education.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateEducation } from '../../../state/action-creator/actions';

function Education() {
    const educations = useSelector(state => state.formData.education);
    const dispatch = useDispatch();

    // Function to add a new row for past job
    const addEducationRow = () => {
        dispatch(updateEducation([...educations, { title: '', year: '' }]));
    };

    // Function to delete a row for past job
    const deleteEducationRow = (idx) => {
        dispatch(updateEducation(educations.filter((_, index) => index !== idx)));
    };

    // Function to handle change in input fields
    const handleChange = (idx, key, value) => {
        // console.log("k:", key, "v", value);
        var updatedJobs = [...educations];
        updatedJobs[idx] = { ...updatedJobs[idx], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updateEducation(updatedJobs));
    };

    return (
        <>
            <div className="education-info">
                <div className="sl">Education</div>
                <div className="for-flex">
                    {educations.map((education, idx) => (
                        <div className="form-row" key={idx}>
                            <div className="field-wrap">
                                <label htmlFor={`educationTitle${idx}`}>Title</label> <input
                                    type="text"
                                    id={`educationTitle${idx}`}
                                    name={`educationTitle${idx}`}
                                    value={education.title}
                                    required
                                    onChange={(e) => handleChange(idx, 'title', e.target.value)}
                                /><br /><br />
                            </div>
                            <div className="field-wrap">
                                <label htmlFor={`educationYear${idx}`}>Year</label>
                                <input
                                    type="text"
                                    id={`educationYear${idx}`}
                                    name={`educationYear${idx}`}
                                    value={education.year}
                                    required
                                    onChange={(e) => handleChange(idx, 'year', e.target.value)}
                                /><br /><br />
                            </div>
                            {educations.length > 1 &&
                                <button className="delete-button" onClick={() => deleteEducationRow(idx)}></button>
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="main-btn" id="addEducation" onClick={addEducationRow}>
                <div className="plus-sign">+</div>
                <div className="button">Add One More</div>
            </div>
        </>
    )
}

export default Education