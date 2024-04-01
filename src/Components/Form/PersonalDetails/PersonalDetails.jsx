import React from "react";
import "./PersonalDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { updatePersonalDetails } from "../../../state/action-creator/actions";

const PersonalDetails = () => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        console.log("k:", key, "v", value);
        var updatedDetails = { ...formData, [key]: value };
        console.log(updatePersonalDetails);
        dispatch(updatePersonalDetails(updatedDetails));
    };

    return (
        <div className="editor-form">
            <div className="field-wrap">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    required
                />
            </div>
            <div className="field-wrap">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    required
                />
            </div>
            <div className="field-wrap">
                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                />
            </div>
            <div className="field-wrap">
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    required
                />
                <br />
                <br />
            </div>
            <div className="field-wrap">
                <label htmlFor="phone">Phone number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone_no}
                    onChange={(e) => handleChange("phone_no", e.target.value)}
                    required
                />
            </div>
        </div>
    );
};

export default PersonalDetails;
