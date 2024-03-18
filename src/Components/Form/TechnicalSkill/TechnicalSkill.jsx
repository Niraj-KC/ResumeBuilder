import React from 'react'
import './TechnicalSkill.css';
import Chip from '../Chip/Chip';
import { useState } from 'react';

const TechnicalSkill = () => {

    const [techincalskillsRows, setTechnicalSkillsRow] = useState([]);

    const addTechnicalSkillsRow = (text) => {
        const newId = techincalskillsRows.length + 1;
        setTechnicalSkillsRow([...techincalskillsRows, { id: newId, text: text }]);
    }
    const handleKeyDown = (e) => {
        console.log(e.keyCode);
        console.log(e.target.value);
        if (e.keyCode === 13 && e.target.value !== "") { // Enter key
            addTechnicalSkillsRow(e.target.value);
            e.target.value = "";
        }
    };

    const deletetechnicalskillsRow = (id) => {
        setTechnicalSkillsRow(techincalskillsRows.filter(row => row.id !== id));
    }

    return (
        <div>
            <div className="sl">Technical Skill</div>
            <div className="for-flex">
                <div className="field-wrap-achivements">
                    <div className="field-wrap">
                        <input type="text" id={`TechnicalSkill-imput`} name={`TechnicalSkill-imput`} required onKeyDown={handleKeyDown} /><br /><br />
                    </div>
                </div>
                {techincalskillsRows.map(row => (
                    <Chip text={row.text} onClick={() => deletetechnicalskillsRow(row.id)}></Chip>
                ))}
            </div>
        </div>
    )
}

export default TechnicalSkill;
