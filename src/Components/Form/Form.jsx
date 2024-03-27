// Form.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Form.css'
import { fetchData } from "../../state/action-creator/actions"; // Import your action
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ProfesionDetails from "./ProfesionDetails/ProfesionDetails";
import FooterTemplate from '../../Utils/FooterTemplate/FooterTemplate';
import Resume from "../Resume/Resume";
import Template1 from "../Resume/Template1/Template1";
import HeaderTemplate from "../../Utils/HeaderTemplate/HeaderTemplate";
import axios from "axios";
import { Stepper, Step } from 'react-form-stepper';


const Form = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.formData);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can dispatch an action to submit formData to your desired endpoint
        console.log(formData);
    }


    return (
        <div>
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
                                        {/* <ul className="step-wizard-list">
                                            <li className="step-wizard-item">
                                                <span className="progress-count">1</span>
                                                <span className="progress-label">Personal Detail</span>
                                            </li>
                                            <li className="step-wizard-item current-item">
                                                <span className="progress-count">2</span>
                                                <span className="progress-label">Profession Details</span>
                                            </li>
                                        </ul> */}
                                        {/* <Stepper activeStep={1}>
                                            <Step label="Personal Details" style={{ activeBgColor: 'blue' }} />
                                            <Step label="Career Details" />
                                        </Stepper> */}

                                        <div className="editor-form-wrap">
                                            <div className="profesion-info">
                                                <div className="personal-info-main">
                                                    <ProfesionDetails />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                        <div className="main-content-pannel-right">
                            {/* Display Resume or Template1 based on state */}
                            <Resume />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
