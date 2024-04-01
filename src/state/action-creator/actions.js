// actions.js

import axios from "axios";

export const UPDATE_PERSONAL_DETAILS = 'UPDATE_PERSONAL_DETAILS';
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_PAST_JOBS = 'UPDATE_PAST_JOBS';
export const UPDATE_ACHIEVEMENTS = 'UPDATE_ACHIEVEMENTS';
export const UPDATE_SOFT_SKILLS = 'UPDATE_SOFT_SKILLS';
export const UPDATE_TECHNICAL_SKILLS = 'UPDATE_TECHNICAL_SKILLS';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';




export const updatePersonalDetails = (personalDetails) => ({
  type: UPDATE_PAST_JOBS,
  payload: personalDetails
});

export const updateEducation = (educations) => ({
  type: UPDATE_EDUCATION,
  payload: educations
});

export const updatePastJobs = (jobs) => ({
  type: UPDATE_PAST_JOBS,
  payload: jobs
});

export const updateAchievements = (achievements) => ({
  type: UPDATE_ACHIEVEMENTS,
  payload: achievements
});

export const updateSoftSkills = (skills) => ({
  type: UPDATE_SOFT_SKILLS,
  payload: skills
});

export const updateTechnicalSkills = (skills) => ({
  type: UPDATE_TECHNICAL_SKILLS,
  payload: skills
});

export const updateProjects = (projects) => ({
  type: UPDATE_PROJECTS,
  payload: projects
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
});

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/resume/2`);
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error));
        }
    };
};
