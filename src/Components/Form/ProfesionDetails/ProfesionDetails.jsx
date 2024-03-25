import React from 'react'
import './ProfesionDetails.css';
import PastJob from '../PastJob/PastJob';
import Achivements from "../Achivements/Achivements";
import SoftSkills from "../SoftSkills/SoftSkills";
import TechnicalSkill from "../TechnicalSkill/TechnicalSkill";
import Projects from "../Projects/Projects";

const ProfesionDetails = ({ updateProfessionDetails }) => {
    // State to hold profession details
    const [professionDetails, setProfessionDetails] = React.useState({
        pastJobs: [],
        achievements: [],
        softSkills: [],
        technicalSkills: [],
        projects: []
    });

    // Function to update past jobs
    const updatePastJobs = (jobs) => {
        setProfessionDetails(prevState => ({
            ...prevState,
            pastJobs: jobs
        }));
    };

    // Function to update achievements
    const updateAchievements = (achievements) => {
        setProfessionDetails(prevState => ({
            ...prevState,
            achievements: achievements
        }));
    };

    // Function to update soft skills
    const updateSoftSkills = (skills) => {
        setProfessionDetails(prevState => ({
            ...prevState,
            softSkills: skills
        }));
    };

    // Function to update technical skills
    const updateTechnicalSkills = (skills) => {
        setProfessionDetails(prevState => ({
            ...prevState,
            technicalSkills: skills
        }));
    };

    // Function to update projects
    const updateProjects = (projects) => {
        setProfessionDetails(prevState => ({
            ...prevState,
            projects: projects
        }));
    };

    // Call updateProfessionDetails to pass the profession details to the parent component (Form)
    React.useEffect(() => {
        updateProfessionDetails(professionDetails);
    }, [professionDetails, updateProfessionDetails]);

    return (
        <div>
            <PastJob updatePastJobs={updatePastJobs} />
            <Achivements updateAchievements={updateAchievements} />
            <SoftSkills updateSoftSkills={updateSoftSkills} />
            <TechnicalSkill updateTechnicalSkills={updateTechnicalSkills} />
            <Projects updateProjects={updateProjects} />
        </div>
    )
}

export default ProfesionDetails;
