import React, { useState, useEffect } from 'react';
import './TechnicalSkill.css';
import Chip from '../Chip/Chip';

const TechnicalSkill = ({ updateTechnicalSkills }) => {
    const [technicalSkillsRows, setTechnicalSkillsRow] = useState([]);

    const addTechnicalSkillsRow = (text) => {
        const newId = technicalSkillsRows.length + 1;
        setTechnicalSkillsRow([...technicalSkillsRows, { id: newId, text: text }]);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== "") { // Enter key
            addTechnicalSkillsRow(e.target.value.trim());
            e.target.value = "";
        }
    };

    const deleteTechnicalSkillsRow = (id) => {
        setTechnicalSkillsRow(technicalSkillsRows.filter(row => row.id !== id));
    };

    useEffect(() => {
        // Update parent component (ProfesionDetails) with technical skills
        updateTechnicalSkills(technicalSkillsRows.map(row => row.text));
    }, [technicalSkillsRows, updateTechnicalSkills]);

    return (
        <div>
            <div className="sl">Technical Skill</div>
            <div className="for-flex">
                <div className="field-wrap-achivements">
                    <div className="field-wrap">
                        <input type="text" id={`TechnicalSkill-input`} name={`TechnicalSkill-input`} required onKeyDown={handleKeyDown} /><br /><br />
                    </div>
                </div>
                <div className="chip-display">
                    {technicalSkillsRows.map(row => (
                        <Chip key={row.id} text={row.text} onClick={() => deleteTechnicalSkillsRow(row.id)}></Chip>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkill;
