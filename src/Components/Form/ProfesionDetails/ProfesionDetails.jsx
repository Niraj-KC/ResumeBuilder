import React, { useState, useEffect, useCallback } from 'react';
import './ProfesionDetails.css';
import PastJob from '../PastJob/PastJob';
import Achivements from "../Achivements/Achivements";
import SoftSkills from "../SoftSkills/SoftSkills";
import TechnicalSkill from "../TechnicalSkill/TechnicalSkill";
import Projects from "../Projects/Projects";

const ProfesionDetails = ({ updateProfessionDetails, formData }) => {
    // State to hold profession details
    const [professionDetails, setProfessionDetails] = useState({
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

    // Memoized updateProfessionDetails function
    const memoizedUpdateProfessionDetails = useCallback(
        (professionDetails) => {
            updateProfessionDetails(professionDetails);
        },
        [updateProfessionDetails]
    );

    // Update profession details from formData when it changes
    useEffect(() => {
        if (formData) {
            setProfessionDetails(formData);
        }

    }, [formData]);

    // Call updateProfessionDetails to pass the profession details to the parent component (Form)
    useEffect(() => {
        memoizedUpdateProfessionDetails(professionDetails);
    }, [memoizedUpdateProfessionDetails, professionDetails]);

    return (
        <div>
            <PastJob updatePastJobs={updatePastJobs} />
            <Achivements updateAchievements={updateAchievements} />
            <SoftSkills updateSoftSkills={updateSoftSkills} />
            <TechnicalSkill updateTechnicalSkills={updateTechnicalSkills} />
            <Projects updateProjects={updateProjects} />
        </div>
    );
};

export default ProfesionDetails;
