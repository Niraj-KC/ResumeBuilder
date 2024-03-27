import { useDispatch, useSelector } from "react-redux";

import './PastJob.css';
import { updatePastJobs } from '../../../state/action-creator/actions';

const PastJob = () => {
    const jobs = useSelector(state => state.formData.job);
    const dispatch = useDispatch();

    // Function to add a new row for past job
    const addPastjobRow = () => {
        dispatch(updatePastJobs([...jobs, { company: '', role: '', fromDate: '', toDate: '', description: '' }]));
    };

    // Function to delete a row for past job
    const deletePastjobRow = (idx) => {
        dispatch(updatePastJobs(jobs.filter((_, index) => index !== idx)));
    };

    // Function to handle change in input fields
    const handleChange = (idx, key, value) => {
        // console.log("k:", key, "v", value);
        var updatedJobs = [...jobs];
        updatedJobs[idx] = { ...updatedJobs[idx], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updatePastJobs(updatedJobs));
    };



    return (
        <div>
            <div className="title-btn">
                <div className="sl">Past Job</div>
            </div>
            <div className="for-flex">
                {jobs.map((job, idx) => (
                    <div className="field-wrap-profesion" key={idx}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`companyName${idx}`}>Company Name</label>
                                <input
                                    type="text"
                                    className="no-outline"
                                    id={`companyName${idx}`}
                                    name={`companyName${idx}`}
                                    value={job.company}
                                    onChange={(e) => handleChange(idx, 'company', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`companyRole${idx}`}>Role</label>
                                <input
                                    type="text"
                                    id={`companyRole${idx}`}
                                    name={`companyRole${idx}`}
                                    value={job.role}
                                    onChange={(e) => handleChange(idx, 'role', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="past-date">
                            <div className="field-wrap bdr">
                                <label htmlFor={`fromDate${idx}`}>From</label>
                                <input
                                    type="date"
                                    id={`fromDate${idx}`}
                                    name={`fromDate${idx}`}
                                    value={job.fromDate}
                                    onChange={(e) => handleChange(idx, 'fromDate', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`toDate${idx}`}>To</label>
                                <input
                                    type="date"
                                    id={`toDate${idx}`}
                                    name={`toDate${idx}`}
                                    value={job.toDate}
                                    onChange={(e) => handleChange(idx, 'toDate', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`description${idx}`}>Description</label>
                            <textarea
                                type="text"
                                id={`description${idx}`}
                                name={`description${idx}`}
                                value={job.description}
                                onChange={(e) => handleChange(idx, 'description', e.target.value)}
                                required
                            ></textarea>
                        </div>
                        {jobs.length > 1 &&
                            <button className="delete-button" onClick={() => deletePastjobRow(idx)}>-</button>
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
