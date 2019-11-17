import React from "react";
import "./LandlordReg.css";

const LandlordReg = ({ inputHandler, submitHandler }) => (
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
    <button className="btn">SUBMIT</button>
  </form>
);

export default LandlordReg;