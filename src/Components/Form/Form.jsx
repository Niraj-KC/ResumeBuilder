import React from "react";
import './Form.css'
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ProfesionDetails from "./ProfesionDetails/ProfesionDetails";
import HeaderTemplate from "../../Utils/HeaderTemplate/HeaderTemplate";
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';
import Resume from "../Resume/Resume";
import Template1 from "../Resume/Template1/Template1";
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
          {"title": "Bachelor of Science in Electrical Engineering", "year": 2010},
          {"title": "Master of Engineering in Renewable Energy", "year": 2012}
        ],
        "job": [
          {"company": "Energy Solutions Inc.", "role": "Electrical Engineer", "desp": "Designed electrical systems for renewable energy projects.", "date": "31-03-2013", "is_current": false},
          {"company": "Renewable Power Co.", "role": "Project Manager", "desp": "Managed the implementation of large-scale solar projects.", "date": "31-03-2016", "is_current": true}
        ],
        "achievement": [
          {"title": "Leadership Excellence Award", "desp": "Recognized for exemplary leadership skills in project management.", "date": "31-03-2017"}
        ],
        "soft_skill": ["Project Management", "Problem-solving", "Adaptability"],
        "technical_skill": ["AutoCAD", "MATLAB", "Renewable Energy Systems"],
        "project": [
          {"title": "Solar Farm Installation", "desp": "Managed the installation of a 50MW solar farm project.", "link": "example.com/solar-farm"}
        ]
      }
      

    return (
        <div>
            <HeaderTemplate />
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
                                        {/* <PersonalDetails /> */}
                                        <div className="profesion-info">
                                            <div className="personal-info-main">
                                                <ProfesionDetails />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content-pannel-right">
                        <Resume data={obj}/>
                        {/* <Template1 data={obj}/> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form;
