import React from "react";
import './Form.css'
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ProfesionDetails from "./ProfesionDetails/ProfesionDetails";
import HeaderTemplate from "../../Utils/Header/HeaderTemplate";
import ResumePDF from "../Resume/Resume";

const Form = () => {
    var obj = {
        "first_name": "Emily",
        "last_name": "Johnson",
        "phone_no": "111-222-3333",
        "email": "emily.johnson@example.com",
        "address": "789 Elm Street, Village, Country",
        "social_links": [
            "cc.com",
            "linkedin.com/emilyjohnson"
        ],
        "education": [
            { "title": "Bachelor of Science in Electrical Engineering", "year": 2010 },
            { "title": "Master of Engineering in Renewable Energy", "year": 2012 }
        ],
        "job": [
            { "company": "Energy Solutions Inc.", "role": "Electrical Engineer", "desp": "Designed electrical systems for renewable energy projects.", "date": "31-03-2013", "is_current": false },
            { "company": "Renewable Power Co.", "role": "Project Manager", "desp": "Managed the implementation of large-scale solar projects.", "date": "31-03-2016", "is_current": true }
        ],
        "achievement": [
            { "title": "Leadership Excellence Award", "desp": "Recognized for exemplary leadership skills in project management.", "date": "31-03-2017" }
        ],
        "soft_skill": ["Project Management", "Problem-solving", "Adaptability"],
        "technical_skill": ["AutoCAD", "MATLAB", "Renewable Energy Systems"],
        "project": [
            { "title": "Solar Farm Installation", "desp": "Managed the installation of a 50MW solar farm project.", "link": "example.com/solar-farm" }
        ]
    }

    const [formData, setFormData] = useState({});

    // Function to update profession details state
    const updateFormData = (details) => {
        setFormData(prevState => ({
            ...prevState,
            ...details
        }));
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can submit formData to your desired endpoint
        console.log(formData);
    }
    return (
        <>
            <HeaderTemplate />
            <form action="" method="post" onSubmit={handleSubmit}>

                <div className="main-content">
                    <div className="main-content-pannel">
                        <div className="main-content-pannel-left">
                            <div className="editor-block-top">
                                <div className="template">
                                    <div className="template-btn">
                                        <div className="change-temp-action"><span>Templates</span></div>
                                    </div>
                                </div>
                                <div className="editor-inner-block">
                                    <div className="editor-area-blueline">
                                        <ul className="step-wizard-list">
                                            <li className="step-wizard-item">
                                                <span className="progress-count">1</span>
                                                <span className="progress-label">Personal Detail</span>
                                            </li>
                                            <li className="step-wizard-item current-item">
                                                <span className="progress-count">2</span>
                                                <span className="progress-label">Profession Details</span>
                                            </li>
                                        </ul>
                                        <div className="editor-form-wrap">
                                            {/* <PersonalDetails updatePersonalDetails={updateFormData} /> */}
                                            <div className="profesion-info">
                                                <div className="personal-info-main">
                                                    <ProfesionDetails updateProfessionDetails={updateFormData} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button type="submit">

                                </button>
                            </div>
                        </div>
                        <div className="main-content-pannel-right">
                            <ResumePDF data={obj} />
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}

export default Form;
