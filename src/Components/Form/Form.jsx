import React from "react";
import './Form.css'
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ProfesionDetails from "./ProfesionDetails/ProfesionDetails";
import HeaderTemplate from "../../Utils/HeaderTemplate/HeaderTemplate";
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';


const Form = () => {
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
                                        <PersonalDetails />
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

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form;
