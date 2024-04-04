// actions.js

import axios from "axios";
import { BASE_URL } from "../../Utils/config/config";
import { useDispatch, useSelector } from "react-redux";

export const UPDATE_PERSONAL_DETAILS = 'UPDATE_PERSONAL_DETAILS';
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const UPDATE_PAST_JOBS = 'UPDATE_PAST_JOBS';
export const UPDATE_ACHIEVEMENTS = 'UPDATE_ACHIEVEMENTS';
export const UPDATE_SOFT_SKILLS = 'UPDATE_SOFT_SKILLS';
export const UPDATE_TECHNICAL_SKILLS = 'UPDATE_TECHNICAL_SKILLS';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const UPDATE_SELECTED_ROW = 'UPDATE_SELECTED_ROW';


export const updateSelectedRow = (selectedRow) => ({
  type: UPDATE_SELECTED_ROW,
  payload: selectedRow
});


export const updatePersonalDetails = (personalDetails) => ({
  type: UPDATE_PERSONAL_DETAILS,
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

// export const fetchData = ({user_id}) => {
//   return async () => {
//     try {
//       // const response = await axios.get(`${BASE_URL}/resume/${user_id}`);
//       return await fetch(`${BASE_URL}/resume/${user_id}/`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then(res => res.json())
//         .then(data => {

//           console.log("res",data);
//           return fetchDataSuccess(data);
//         })

//     } catch (error) {
//       return fetchDataFailure(error);
//     }
//   };
// };

export const fetchData = async ({ user_id }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/resume/${user_id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      data.social_links = JSON.parse(data.social_links);
      data.soft_skill = JSON.parse(data.soft_skill)
      data.technical_skill = JSON.parse(data.technical_skill)

      console.log(dispatch(fetchDataSuccess(data)));
      // const formData = useSelector(state => state.formData);

      // console.log("res", formData);

    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(fetchDataFailure(error));
    }
  };
};
