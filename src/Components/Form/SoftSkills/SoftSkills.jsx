import React, { useState, useEffect } from 'react';
import './SoftSkills.css';
import Chip from '../Chip/Chip';

const SoftSkills = ({ updateSoftSkills }) => {
    const [softSkillsRows, setSoftSkillsRows] = useState([]);

    const addSoftSkillsRow = (text) => {
        const newId = softSkillsRows.length + 1;
        setSoftSkillsRows([...softSkillsRows, { id: newId, text: text }]);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== "") { // Enter key
            addSoftSkillsRow(e.target.value.trim());
            e.target.value = "";
        }
    };

    const deletesoftSkillRow = (id) => {
        setSoftSkillsRows(softSkillsRows.filter(row => row.id !== id));
    };

    useEffect(() => {
        // Update parent component (ProfesionDetails) with soft skills
        updateSoftSkills(softSkillsRows.map(row => row.text));
    }, [softSkillsRows, updateSoftSkills]);

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
                        <Chip key={row.id} text={row.text} onClick={() => deletesoftSkillRow(row.id)}></Chip>
                    ))}
                </div>  
            </div>
        </div>
    );
};

export default SoftSkills;
