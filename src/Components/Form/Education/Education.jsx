import React, { useState, useEffect } from 'react';
import './Education.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateEducation, updateSelectedRow } from '../../../state/action-creator/actions';

function Education() {
    const educations = useSelector(state => state.formData.education);
    const selectedRow = useSelector(state => state.selectedRow.education);
    const dispatch = useDispatch();

    // Function to add a new row for past job
    const addEducationRow = () => {
        dispatch(updateEducation([...educations, { title: '', year: '' }]));
        // console.log("#len-ar", educations.length);
        setTimeout(() => {
            dispatch(updateSelectedRow({ education: educations.length }));
        }, 1);
        console.log("#len-ar", selectedRow);

    };

    // Function to delete a row for past job
    const deleteEducationRow = (idx) => {
        dispatch(updateEducation(educations.filter((_, index) => index !== idx)));
    };

    // Function to handle change in input fields
    const handleChange = (key, value) => {
        // console.log("k:", key, "v", value);
        if (selectedRow == null) {
            addEducationRow();
        }
        var updatedJobs = [...educations];
        updatedJobs[selectedRow] = { ...updatedJobs[selectedRow], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updateEducation(updatedJobs));
    };

    const handleRowClick = (idx) => {
        dispatch(updateSelectedRow({education: idx}));
    };


    return (
        <>
            <div className="education-info">
                <div className="field-wrap">
                    <label htmlFor={`educationTitle`}>Title</label>
                    <input
                        type="text"
                        id={`educationTitle`}
                        name={`educationTitle`}
                        value={educations[selectedRow]?.title || ""}
                        required
                        autoComplete="off"
                        onChange={(e) => handleChange('title', e.target.value)}
                    />

                </div>
                <div className="field-wrap">
                    <label htmlFor={`educationYear`}>Passout Year</label>
                    <input
                        type="text"
                        id={`educationYear`}
                        name={`educationYear`}
                        value={educations[selectedRow]?.year || ""}
                        required
                        autoComplete="off"
                        onChange={(e) => handleChange('year', e.target.value)}
                    />
                </div>
            </div>

            <div className="edu-btn-div" id="addEducation">
                <div className="edu-btn-main" onClick={() => dispatch(updateSelectedRow({education:null}))}>
                    <div className="edu-plus-sign">+</div>
                    <div>Add More</div>
                </div>
            </div>

            {/* Table to display added rows */}
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {educations.map((education, idx) => (
                        <tr key={idx} onClick={() => handleRowClick(idx)} className={selectedRow === idx ? 'selected' : ''}>
                            <td>{education.title}</td>
                            <td>{education.year}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteEducationRow(idx)}></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Education