import React, { useState, useEffect } from "react";
import './PersonalDetails.css';

const PersonalDetails = () => {

    return (
        <div className="editor-form">
            <div className="form-row">
                <div className="field-wrap">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required /><br /><br />
                </div>
                <div className="field-wrap">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required /><br /><br />
                </div>
            </div>
            <div className="form-row">
                <div className="field-wrap">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" id="job" name="job" required /><br /><br />
                </div>
                <div className="field-wrap">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" required /><br /><br />
                </div>
            </div>
            <div className="form-row">
                <div className="field-wrap1">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id="email" name="email" required />
                    <p className="email-declaimer">By creating a resume, you agree to receive emails
                        — unsubscribe anytime.</p>
                </div>
                <div className="field-wrap">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" required /><br /><br />
                </div>
            </div>

        </div>
    );
};

export default PersonalDetails;
