import React from 'react'
import './PastJob.css';
import { useState } from 'react';

const PastJob = () => {

    const [pastjobRow, setPastjobRow] = useState([{ id: 1 }]);

    const addPastjobRow = () => {
        const newId = pastjobRow.length + 1;
        setPastjobRow([...pastjobRow, { id: newId }]);
    };

    const deletePastjobRow = (id) => {
        setPastjobRow(pastjobRow.filter(row => row.id !== id));
    };

    return (
        <div>
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
        </div>
    )
}

export default PastJob;
