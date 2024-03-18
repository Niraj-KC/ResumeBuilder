import React from "react";
import './Form.css'
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import PastJob from "./PastJob/PastJob";
import Achivements from "./Achivements/Achivements";
import SoftSkills from "./SoftSkills/SoftSkills";
import TechnicalSkill from "./TechnicalSkill/TechnicalSkill";
import Projects from "./Projects/Projects";

const Form = () => {
    return (
        <>
            <header>
                <div className="header-main">
                    <div className="svg-logo"></div>
                </div>
            </header>
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
                                        <PersonalDetails /> 
                                        <div className="profesion-info">
                                            <div className="personal-info-main">
                                                <PastJob />
                                                <Achivements />
                                                <SoftSkills />
                                                <TechnicalSkill />
                                                <Projects />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-content-pannel-right">

                    </div>
                </div>
            </div>
        </>

    )
}

export default Form;
