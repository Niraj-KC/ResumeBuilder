import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    UPDATE_PERSONAL_DETAILS,
    UPDATE_EDUCATION,
    UPDATE_PAST_JOBS,
    UPDATE_ACHIEVEMENTS,
    UPDATE_SOFT_SKILLS,
    UPDATE_TECHNICAL_SKILLS,
    UPDATE_PROJECTS,
    UPDATE_SELECTED_ROW
} from "../action-creator/actions";

const initialState = {
    selectedRow: {
        education: null,
        achievement: null,
        project: null,
        job: null
    },

    formData: {
        "first_name": "Michael",
        "last_name": "Brown",
        "phone_no": "555-123-4567",
        "email": "michael.brown@example.com",
        "address": "321 Pine Street, Hamlet, Country",
        "social_links": [
            "dd.com",
            "linkedin.com/michaelbrown"
        ],
        "education": [
            { "title": "Bachelor of Arts in English Literature", "year": 2011 },
            { "title": "Master of Fine Arts in Creative Writing", "year": 2013 }
        ],
        "job": [
            { "company": "Publishing House Ltd.", "role": "Editor", "desp": "Edited manuscripts for grammar, style, and coherence.", "from_date": "2014-03-12", "to_date": "2015-03-12", "is_current": false },
            { "company": "Freelance Writer Ltd.", "role": "Writer", "desp": "Authored articles for various publications.", "from_date": "2015-03-12", "to_date": "2018-03-12", "is_current": true }
        ],
        "achievement": [
            { "title": "Best Short Story Award", "desp": "Received for a short story published in a literary magazine.", "date": "2015-03-21" }
        ],
        "soft_skill": ["Writing", "Editing", "Creativity"],
        "technical_skill": ["Copywriting", "Proofreading", "Content Development"],
        "project": [
            { "title": "Book Editing Project", "desp": "Edited a bestselling novel for a renowned author.", "link": "example.com/book-editing", "date": "2015-03-21" }
        ]
    },
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_ROW:
            return {
                ...state,
                selectedRow: {
                    ...action.payload
                }
            }

        case FETCH_DATA_SUCCESS:
            // console.log("check", state, action.payload);
            return {
                ...state,
                // ...action.payload,
                formData: action.payload,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case UPDATE_PERSONAL_DETAILS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            };

        case UPDATE_PAST_JOBS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    job: action.payload
                }
            };

        case UPDATE_EDUCATION:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    education: action.payload
                }
            };

        case UPDATE_ACHIEVEMENTS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    achievement: action.payload
                }
            };
        case UPDATE_SOFT_SKILLS:
            console.log("pl:", action.payload);
            return {
                ...state,
                formData: {
                    ...state.formData,
                    soft_skill: action.payload
                }
            };
        case UPDATE_TECHNICAL_SKILLS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    technical_skill: action.payload
                }
            };
        case UPDATE_PROJECTS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    project: action.payload
                }
            };
        default:
            return state;
    }
};

export default reducer;
