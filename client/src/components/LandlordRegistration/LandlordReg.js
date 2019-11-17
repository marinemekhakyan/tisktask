import React from "react";
import "./LandlordReg.css";

const LandlordReg = ({ inputHandler, submitHandler }) => (
  <Fragment>
  <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form onSubmit={this.handleSubmit} className="login100-form validate-form">
                <span className="login100-form-title" id="loginTitle">
                  TiskTask
                </span>

                <span className="login100-form-logo">
                  <img id="fingerLogo" src="/assets/ttFingerLogoLoop.gif" />
                </span>

                <span className="login100-form-title" id="loginSubTitle1">
                  Don't Get Scolded | Get Stuff Done
                </span>

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="firstname" onChange={this.handleInputChange} required />
                  <span className="input-underline"></span>
                  <label htmlFor="firstname" className="input-label">First Name</label>
                </div>

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="lastname" onChange={this.handleInputChange} required />
                  <span className="input-underline"></span>
                  <label htmlFor="lastname" className="input-label">Last Name</label>
                </div>
                <div className="wrap-input100 validate-input">
                  <input className="input100" type="number" name="primaryphone" onChange={this.handleInputChange} required />
                  <span className="input-underline"></span>
                  <label htmlFor="primaryphone" className="input-label">Primary Phone</label>
                </div>
                <div className="wrap-input100 validate-input">
                  <input className="input100" type="email" name="primaryemail" onChange={this.handleInputChange} required />
                  <span className="input-underline"></span>
                  <label htmlFor="primaryemail" className="input-label">Primary Email</label>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
        </Fragment>
);

export default LandlordReg;