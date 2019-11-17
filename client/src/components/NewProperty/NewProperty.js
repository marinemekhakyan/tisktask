import React from "react";
import "./TenantReg.css";

const TenantReg = ({ inputHandler, submitHandler }) => (
    <div>
    <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
        <source src="assets/ttBackgroundVid.mp4" type="video/mp4" />
    </video>
    <form className="form" onSubmit={submitHandler}>
        <div className="input-container">
            <input id="propertyname" type="text" name="propertyname" onChange={inputHandler} />
            <span className="input-underline"></span>
            <label htmlFor="propertyname" className="input-label">Property name</label>
        </div>
        <div className="input-container">
            <input id="propertyaddress" type="text" name="propertyaddress" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="propertyaddress" className="input-label">Street name</label>
        </div>
        <div className="input-container">
            <input id="city" type="text" name="city" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="city" className="input-label">City</label>
        </div>
        <div className="input-container">
            <input id="state" type="text" list="datalist" name="state" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="state" className="input-label">State</label>
            <datalist id="datalist">
          <option value="AL"></option>
          <option value="AK"></option>
          <option value="AR"></option>
          <option value="AZ"></option>
          <option value="CA"></option>
          <option value="CO"></option>
          <option value="CT"></option>
          <option value="DC"></option>
          <option value="DE"></option>
          <option value="FL"></option>
          <option value="GA"></option>
          <option value="GU"></option>
          <option value="HI"></option>
          <option value="IA"></option>
          <option value="ID"></option>
          <option value="IL"></option>
          <option value="IN"></option>
          <option value="KS"></option>
          <option value="KY"></option>
          <option value="LA"></option>
          <option value="MA"></option>
          <option value="MD"></option>
          <option value="ME"></option>
          <option value="MI"></option>
          <option value="MN"></option>
          <option value="MO"></option>
          <option value="MP"></option>
          <option value="MS"></option>
          <option value="MT"></option>
          <option value="NC"></option>
          <option value="ND"></option>
          <option value="NE"></option>
          <option value="NH"></option>
          <option value="NJ"></option>
          <option value="NM"></option>
          <option value="NV"></option>
          <option value="NY"></option>
          <option value="OH"></option>
          <option value="OK"></option>
          <option value="OR"></option>
          <option value="PA"></option>
          <option value="PR"></option>
          <option value="RI"></option>
          <option value="SC"></option>
          <option value="SD"></option>
          <option value="TN"></option>
          <option value="TX"></option>
          <option value="UM"></option>
          <option value="UT"></option>
          <option value="VA"></option>
          <option value="VI"></option>
          <option value="VT"></option>
          <option value="WA"></option>
          <option value="WI"></option>
          <option value="WV"></option>
          <option value="WY"></option>
        </datalist>
        </div>
        <div className="input-container">
            <input id="zip" type="number" name="zip" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="zip" className="input-label">ZIP</label>
        </div>
        <div className="input-container">
            <input id="numberofunits" type="number" name="numberofunits" onChange={inputHandler} required />
            <span className="input-underline"></span>
            <label htmlFor="numberofunits" className="input-label">Number of Units</label>
        </div>
        <button className="btn">SUBMIT</button>
    </form>
    </div>
);

export default TenantReg;