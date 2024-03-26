import React, { useState, useEffect } from 'react';
import './PastJob.css';

const PastJob = ({ updatePastJobs }) => {
    const [pastJobs, setPastJobs] = useState([
        { id: 1, company: '', role: '', fromDate: '', toDate: '', description: '' }
    ]);

    // Function to add a new row for past job
    const addPastjobRow = () => {
        const newId = pastJobs.length + 1;
        setPastJobs([...pastJobs, { id: newId, company: '', role: '', fromDate: '', toDate: '', description: '' }]);
    };

    // Function to delete a row for past job
    const deletePastjobRow = (id) => {
        setPastJobs(pastJobs.filter(row => row.id !== id));
    };

    // Function to handle change in input fields
    const handleChange = (id, key, value) => {
        setPastJobs(prevPastJobs => {
            return prevPastJobs.map(job => {
                if (job.id === id) {
                    return { ...job, [key]: value };
                }
                return job;
            });
        });
    };

    useEffect(() => {
        // Only call updatePastJobs if the pastJobs state has changed
        if (JSON.stringify(pastJobs) !== JSON.stringify(updatePastJobs)) {
            updatePastJobs(pastJobs);
        }
    }, [pastJobs, updatePastJobs]);



    return (
        <div>
            <div className="title-btn">
                <div className="sl">Past Job</div>
            </div>
            <div className="for-flex">
                {pastJobs.map(row => (
                    <div className="field-wrap-profesion" key={row.id}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`companyName${row.id}`}>Company Name</label>
                                <input
                                    type="text"
                                    className="no-outline"
                                    id={`companyName${row.id}`}
                                    name={`companyName${row.id}`}
                                    value={row.company}
                                    onChange={(e) => handleChange(row.id, 'company', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`companyRole${row.id}`}>Role</label>
                                <input
                                    type="text"
                                    id={`companyRole${row.id}`}
                                    name={`companyRole${row.id}`}
                                    value={row.role}
                                    onChange={(e) => handleChange(row.id, 'role', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="past-date">
                            <div className="field-wrap bdr">
                                <label htmlFor={`fromDate${row.id}`}>From</label>
                                <input
                                    type="date"
                                    id={`fromDate${row.id}`}
                                    name={`fromDate${row.id}`}
                                    value={row.fromDate}
                                    onChange={(e) => handleChange(row.id, 'fromDate', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`toDate${row.id}`}>To</label>
                                <input
                                    type="date"
                                    id={`toDate${row.id}`}
                                    name={`toDate${row.id}`}
                                    value={row.toDate}
                                    onChange={(e) => handleChange(row.id, 'toDate', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`description${row.id}`}>Description</label>
                            <textarea
                                type="text"
                                id={`description${row.id}`}
                                name={`description${row.id}`}
                                value={row.description}
                                onChange={(e) => handleChange(row.id, 'description', e.target.value)}
                                required
                            ></textarea>
                        </div>
                        {pastJobs.length > 1 &&
                            <button className="delete-button" onClick={() => deletePastjobRow(row.id)}>-</button>
                        }
                    </div>
                ))}
            </div>
            <div className="main-btn" id="addEducation" onClick={addPastjobRow}>
                <div className="plus-sign">+</div>
                <div className="button">Add One More</div>
            </div>
        </div>
    );
};

export default PastJob;
