import React, { useState, useEffect } from 'react';
import './SoftSkills.css';
import Chip from '../Chip/Chip';

import { useDispatch, useSelector } from "react-redux";
import { updateSoftSkills } from '../../../state/action-creator/actions';

const SoftSkills = () => {
    const dispatch = useDispatch();
    const softSkills = useSelector(state => state.formData.soft_skill);

    const handleKeyDown = (e) => {
        const val = e.target.value.trim();
        if (e.keyCode === 13 && val !== "") { // Enter key
            dispatch(updateSoftSkills([...softSkills, val]))
            e.target.value = "";
        }
    };

    const deletesoftSkillRow = (idx) => {
        dispatch(updateSoftSkills(softSkills.filter((_, index) => index !== idx)));
    };

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
                    {softSkills.map((skill, idx) => (
                        <Chip key={idx} text={skill} onClick={() => deletesoftSkillRow(idx)}></Chip>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
