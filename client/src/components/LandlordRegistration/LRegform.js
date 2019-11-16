import React from "react";
import "./LRegform.css";

const LRegform = ({ inputHandler, submitHandler }) => (
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
      <input id="primaryphone" type="text" name="phone_number" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="primaryphone" className="input-label">Primary phone</label>
    </div>
    <div className="input-container">
      <input id="username" type="email" name="username" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="username" className="input-label">Email</label>
    </div>
    <div className="input-container">
      <input id="password" type="password" name="password" onChange={inputHandler} required />
      <span className="input-underline"></span>
      <label htmlFor="password" className="input-label">Password</label>
    </div>
    <button className="btn">SUBMIT</button>
  </form>
);

export default LRegform;