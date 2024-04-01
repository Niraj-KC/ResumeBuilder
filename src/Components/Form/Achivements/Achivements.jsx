import React from 'react'
import './Achivements.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateAchievements, updateSelectedRow } from '../../../state/action-creator/actions';

const Achivements = () => {
    const dispatch = useDispatch();
    const selectedRow = useSelector(state => state.selectedRow.achievement);
    const achivements = useSelector(state => state.formData.achievement);

    // const [AchivementRow, setAchivementRow] = useState([{ id: 1 }]);

    const addAchivementRow = () => {
        // const newId = achivements.length + 1;
        // setAchivementRow([...achivements, { id: newId }]);
        dispatch(updateAchievements([...achivements, { "title": "", "desp": "", "date": "" }]))

        setTimeout(() => {
            dispatch(updateSelectedRow({ achievement: achivements.length }));
        }, 1);
    }

    const deleteAchivementRow = (selectedRow) => {
        // setAchivementRow(achivements.filter(row => selectedRow !== id));
        dispatch(updateAchievements(achivements.filter((_, index) => index !== selectedRow)));
    }

    const handleChange = (key, value) => {
        // console.log("k:", key, "v", value);

        if (selectedRow == null) {
            addAchivementRow();
        }
        var updatedAchievements = [...achivements];
        updatedAchievements[selectedRow] = { ...updatedAchievements[selectedRow], [key]: value };
        // console.log("up-job: ", updatedJobs[selectedRow]);
        dispatch(updateAchievements(updatedAchievements));
    };

    const handleRowClick = (idx) => {
        dispatch(updateSelectedRow({ achievement: idx }));
    };

    return (
        <div>
            <div className="for-flex">
                <div className="field-wrap-profesion" key={selectedRow}>
                    <div className="name-and-role">
                        <div className="field-wrap bdr">
                            <label htmlFor={`AchivementTitle${selectedRow}`}>Title</label>
                            <input type="text"
                                id={`AchivementTitle${selectedRow}`}
                                name={`AchivementTitle${selectedRow}`}
                                onChange={(e) => handleChange('title', e.target.value)}
                                value={achivements[selectedRow]?.title || ""}
                                required />
                        </div>
                        <div className="field-wrap bdr">
                            <label htmlFor={`AchivementDate${selectedRow}`}>Date</label>
                            <input type="date" id={`AchivementDate${selectedRow}`} name={`AchivementDate${selectedRow}`}
                                value={achivements[selectedRow]?.date || ""}
                                onChange={(e) => handleChange('date', e.target.value)} required />
                        </div>
                    </div>
                    <div className="field-wrap-inp bdr">
                        <label htmlFor={`AchivementDesc${selectedRow}`}>Description</label>
                        <textarea type="text" id={`AchivementDesc${selectedRow}`} name={`AchivementDesc${selectedRow}`}
                            value={achivements[selectedRow]?.desp || ""}
                            onChange={(e) => handleChange('desp', e.target.value)} required></textarea>
                    </div>
                </div>
            </div>

            <div className="ach-btn-div" id="addAchivement">
                <div className="ach-btn-main" onClick={() => dispatch(updateSelectedRow({ achievement: null }))}>
                    <div className="ach-plus-sign">+</div>
                    <div>Add More</div>
                </div>
            </div>

            {/* Table to display added rows */}
            <table className="achivement-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Desp</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {achivements.map((achivement, idx) => (
                        <tr key={idx} onClick={() => handleRowClick(idx)} className={selectedRow === idx ? 'selected' : ''}>
                            <td>{achivement.title}</td>
                            <td>{achivement.desp}</td>
                            <td>{achivement.date}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteAchivementRow(idx)}></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Achivements
