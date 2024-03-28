import React from 'react'
import './Achivements.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateAchievements } from '../../../state/action-creator/actions';

const Achivements = () => {
    const dispatch = useDispatch();
    const achivements = useSelector(state => state.formData.achievement);

    // const [AchivementRow, setAchivementRow] = useState([{ id: 1 }]);

    const addAchivementRow = () => {
        // const newId = achivements.length + 1;
        // setAchivementRow([...achivements, { id: newId }]);
        dispatch(updateAchievements([...achivements, { "title": "", "desp": "", "date": "" }]))
    }

    const deleteAchivementRow = (idx) => {
        // setAchivementRow(achivements.filter(row => idx !== id));
        dispatch(updateAchievements(achivements.filter((_, index) => index !== idx)));
    }

    const handleChange = (idx, key, value) => {
        // console.log("k:", key, "v", value);
        var updatedAchievements = [...achivements];
        updatedAchievements[idx] = { ...updatedAchievements[idx], [key]: value };
        // console.log("up-job: ", updatedJobs[idx]);
        dispatch(updateAchievements(updatedAchievements));
    };

    return (
        <div>
            <div className="title-btn">
                <div className="sl">Achivements</div>
            </div>
            <div className="for-flex">
                {achivements.map((achivement, idx) => (
                    <div className="field-wrap-profesion" key={idx}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`AchivementTitle${idx}`}>Title</label>
                                <input type="text"
                                    id={`AchivementTitle${idx}`}
                                    name={`AchivementTitle${idx}`}
                                    onChange={(e) => handleChange(idx, 'title', e.target.value)}
                                    value={achivement.title}
                                    required />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`AchivementDate${idx}`}>Date</label>
                                <input type="date" id={`AchivementDate${idx}`} name={`AchivementDate${idx}`}
                                    value={achivement.date}
                                    onChange={(e) => handleChange(idx, 'date', e.target.value)} required />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`AchivementDesc${idx}`}>Description</label>
                            <textarea type="text" id={`AchivementDesc${idx}`} name={`AchivementDesc${idx}`}
                                value={achivement.desp}
                                onChange={(e) => handleChange(idx, 'desp', e.target.value)} required></textarea>
                        </div>
                        {achivements.length > 1 &&
                            <button className="delete-button" onClick={() => deleteAchivementRow(idx)}></button>
                        }
                    </div>
                ))}
            </div>

            <div className="main-btn" id="addEducation">
                <div className="plus-sign">+</div>
                <div className="button" onClick={addAchivementRow}>Add One More</div>
            </div>
        </div>
    )
}

export default Achivements
