import React from 'react'
import './SoftSkills.css';
import { useState } from 'react';
import Chip from '../Chip/Chip';

const SoftSkills = () => {

    const [softSkillsRows, setSoftSkillsRows] = useState([]);

    const addSoftSkillsRow = (text) => {
        const newId = softSkillsRows.length + 1;
        setSoftSkillsRows([...softSkillsRows, { id: newId, text: text }]);
    };

    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        console.log(e.target.value);
        if (e.keyCode === 13 && e.target.value !== "") { // Enter key
            addSoftSkillsRow(e.target.value);
            e.target.value = "";
        }
    };

    const deletesoftSkillRow = (id) => {
        console.log(id);
        setSoftSkillsRows(softSkillsRows.filter(row => row.id !== id));
    }

    return (
        <div>
            <div className="sl">Soft Skills</div>
            <div className="for-flex">
                <div className="field-wrap-achivements">
                    <div className="field-wrap">
                        <input type="text" id={`educationTitle-input`} name={`educationTitle-input`} required onKeyDown={handleKeyDown} /><br /><br />
                    </div>
                </div>
                <div className="chip-display">
                    {softSkillsRows.map(row => (
                        <Chip text={row.text} onClick={() => deletesoftSkillRow(row.id)}></Chip>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default SoftSkills
