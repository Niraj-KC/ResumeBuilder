import { useDispatch, useSelector } from "react-redux";

import './PastJob.css';
import { updatePastJobs, updateSelectedRow } from '../../../state/action-creator/actions';

const PastJob = () => {
    const jobs = useSelector(state => state.formData.job);
    const selectedRow = useSelector(state => state.selectedRow.job);

    const dispatch = useDispatch();

    // Function to add a new row for past job
    const addPastjobRow = () => {
        dispatch(updatePastJobs([...jobs, { company: '', role: '', from_date: '', to_date: '', description: '' }]));
        setTimeout(() => {
            dispatch(updateSelectedRow({ job: jobs.length }));
        }, 1);
    };
    const setSelectRowNull = () => {
        dispatch(updateSelectedRow({ project: null }));
    }
    // Function to delete a row for past job
    const deletePastjobRow = (idx) => {
        dispatch(updatePastJobs(jobs.filter((_, index) => index !== idx)));
        setSelectRowNull()
    };

    // Function to handle change in input fields
    const handleChange = (key, value) => {
        // console.log("k:", key, "v", value);
        if (selectedRow == null) {
            addPastjobRow();
        }
        var updatedJobs = [...jobs];
        updatedJobs[selectedRow] = { ...updatedJobs[selectedRow], [key]: value };
        // console.log("up-job: ", updatedJobs[selectedRow]);
        dispatch(updatePastJobs(updatedJobs));
    };

    const handleRowClick = (idx) => {
        dispatch(updateSelectedRow({ job: idx }));
    };

    return (
        <div>
            <div className="for-flex">
                <div className="field-wrap-profesion" key={selectedRow}>
                    <div className="name-and-role">
                        <div className="field-wrap bdr">
                            <label htmlFor={`companyName${selectedRow}`}>Company Name</label>
                            <input
                                type="text"
                                className="no-outline"
                                id={`companyName${selectedRow}`}
                                name={`companyName${selectedRow}`}
                                value={jobs[selectedRow]?.company || ""}
                                onChange={(e) => handleChange('company', e.target.value)}
                                required
                            />
                        </div>
                        <div className="field-wrap bdr">
                            <label htmlFor={`companyRole${selectedRow}`}>Role</label>
                            <input
                                type="text"
                                id={`companyRole${selectedRow}`}
                                name={`companyRole${selectedRow}`}
                                value={jobs[selectedRow]?.role || ""}
                                onChange={(e) => handleChange('role', e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="past-date">
                        <div className="field-wrap bdr">
                            <label htmlFor={`fromDate${selectedRow}`}>From</label>
                            <input
                                type="date"
                                id={`fromDate${selectedRow}`}
                                name={`fromDate${selectedRow}`}
                                value={jobs[selectedRow]?.from_date || ""}
                                onChange={(e) => handleChange('from_date', e.target.value)}
                                required
                            />
                        </div>
                        <div className="field-wrap bdr">
                            <label htmlFor={`toDate${selectedRow}`}>To</label>
                            <input
                                type="date"
                                id={`toDate${selectedRow}`}
                                name={`toDate${selectedRow}`}
                                value={jobs[selectedRow]?.to_date || ""}
                                onChange={(e) => handleChange('to_date', e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="field-wrap-inp bdr">
                        <label htmlFor={`description${selectedRow}`}>Description</label>
                        <textarea
                            type="text"
                            id={`description${selectedRow}`}
                            name={`description${selectedRow}`}
                            value={jobs[selectedRow]?.desp || ""}
                            onChange={(e) => handleChange('desp', e.target.value)}
                            required
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="job-btn-div" id="addEducation">
                <div className="job-btn-main" onClick={setSelectRowNull}>
                    <div className="job-plus-sign">+</div>
                    <div>Add More</div>
                </div>
            </div>

            {/* Table to display added rows */}
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Description</th>
                        <th>From</th>
                        <th>To</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, selectedRow) => (
                        <tr key={selectedRow} onClick={() => handleRowClick(selectedRow)} className={selectedRow === selectedRow ? 'selected' : ''}>
                            <td>{job.company}</td>
                            <td>{job.role}</td>
                            <td>{job.desp}</td>
                            <td>{job.from_date}</td>
                            <td>{job.to_date}</td>
                            <td>
                                <button className="delete-button" onClick={() => deletePastjobRow(selectedRow)}></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PastJob;
