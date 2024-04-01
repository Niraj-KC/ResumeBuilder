import React, { useState, useEffect } from 'react';
import './TechnicalSkill.css';
import Chip from '../Chip/Chip';

import { useDispatch, useSelector } from "react-redux";
import { updateTechnicalSkills } from '../../../state/action-creator/actions';
const TechnicalSkill = () => {
    const dispatch = useDispatch();
    const technicalSkills = useSelector(state => state.formData.technical_skill);

    const handleKeyDown = (e) => {
        const val = e.target.value.trim();
        if (e.keyCode === 13 && val !== "") { // Enter key
            dispatch(updateTechnicalSkills([...technicalSkills, val]))
            e.target.value = "";
        }
    };

    const deleteTechnicalSkillsRow = (idx) => {
        dispatch(updateTechnicalSkills(technicalSkills.filter((_, index) => index !== idx)))
    };

    return (
        <div>
            <div className="sl">Technical Skill</div>
            <div className="for-flex">
                <div className="field-wrap-achivements">
                    <div className="field-wrap">
                        <input type="text" id={`TechnicalSkill-input`} name={`TechnicalSkill-input`} onKeyDown={handleKeyDown} /><br /><br />
                    </div>
                </div>
                <div className="chip-display">
                    {technicalSkills.map((skill, idx) => (
                        <Chip key={idx} text={skill} onClick={() => deleteTechnicalSkillsRow(idx)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkill;
