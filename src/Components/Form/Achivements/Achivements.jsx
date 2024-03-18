import React from 'react'
import './Achivements.css';
import { useState } from 'react';

const Achivements = () => {
    
    const [AchivementRow, setAchivementRow] = useState([{ id: 1 }]);

    const addAchivementRow = () => {
        const newId = AchivementRow.length + 1;
        setAchivementRow([...AchivementRow, { id: newId }]);
    }

    const deleteAchivementRow = (id) => {
        setAchivementRow(AchivementRow.filter(row => row.id !== id));
    }

    return (
        <div>
            <div className="title-btn">
                <div className="sl">Achivements</div>
            </div>
            <div className="for-flex">
                {AchivementRow.map(row => (
                    <div className="field-wrap-profesion" key={row.id}>
                        <div className="name-and-role">
                            <div className="field-wrap bdr">
                                <label htmlFor={`AchivementTitle${row.id}`}>Title</label>
                                <input type="text" id={`AchivementTitle${row.id}`} name={`AchivementTitle${row.id}`} required />
                            </div>
                            <div className="field-wrap bdr">
                                <label htmlFor={`AchivementDate${row.id}`}>Date</label>
                                <input type="text" id={`AchivementDate${row.id}`} name={`AchivementDate${row.id}`} required />
                            </div>
                        </div>
                        <div className="field-wrap-inp bdr">
                            <label htmlFor={`AchivementDesc${row.id}`}>Description</label>
                            <textarea type="text" id={`AchivementDesc${row.id}`} name={`AchivementDesc${row.id}`} required></textarea>
                        </div>
                        {AchivementRow.length > 1 &&
                            <button className="delete-button" onClick={() => deleteAchivementRow(row.id)}></button>
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
