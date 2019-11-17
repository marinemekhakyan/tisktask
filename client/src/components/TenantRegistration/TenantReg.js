import React from "react";
import "./TenantReg.css";

const TenantReg = ({ inputHandler, submitHandler }) => (
    <div>
    <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
        <source src="assets/ttBackgroundVid.mp4" type="video/mp4" />
    </video>
    <form className="form" onSubmit={submitHandler}>
        <div className="input-container">
            <input id="firstname" type="text" name="firstname" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="firstname" className="input-label">First Name</label>
        </div>
        <div className="input-container">
            <input id="lastname" type="text" name="lastname" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="lastname" className="input-label">Last Name</label>
        </div>
        <div className="input-container">
            <input id="primaryphone" type="number" name="primaryphone" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="primaryphone" className="input-label">Primary phone</label>
        </div>
        <div className="input-container">
            <input id="primaryemail" type="email" name="primaryemail" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="primaryemail" className="input-label">Primary Email</label>
        </div>
        <div className="input-container">
            <input id="address" type="text" name="address" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="address" className="input-label">Property Address</label>
        </div>
        <div className="input-container">
            <input id="unitnumber" type="text" name="unitnumber" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="unitnumber" className="input-label">Unit Number</label>
        </div>
        <button className="btn">SUBMIT</button>
    </form>
    </div>
);

export default TenantReg;