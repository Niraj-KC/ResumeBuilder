import React from 'react'
import './ProfesionDetails.css';
import PastJob from '../PastJob/PastJob';
import Achivements from "../Achivements/Achivements";
import SoftSkills from "../SoftSkills/SoftSkills";
import TechnicalSkill from "../TechnicalSkill/TechnicalSkill";
import Projects from "../Projects/Projects";

const ProfesionDetails = () => {
    return (
        <div>
            <PastJob />
            <Achivements />
            <SoftSkills />
            <TechnicalSkill />
            <Projects />
        </div>
    )
}

export default ProfesionDetails;
