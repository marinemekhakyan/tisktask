import React from "react";
import "./LandlordReg.css";

const NewProperty = ({ inputHandler, submitHandler }) => (
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
                        <input className="input100" type="text" name="propertyname" onChange={this.handleInputChange} required />
                        <span className="input-underline"></span>
                        <label htmlFor="propertyname" className="input-label">Property Name</label>
                    </div>
                    <div className="input100">
                        <input id="streetname" type="text" name="propertyaddress" onChange={inputHandler} required />
                        <span className="input-underline">Street Name</span>
                    </div>
                    <div className="input100">
                        <input id="city" type="text" name="city" onChange={inputHandler} required />
                        <span className="input100"></span>
                        <label htmlFor="city" className="input-label">City</label>
                    </div>
                    <div className="input100">
                        <input id="state" type="text" list="datalist" name="state" onChange={inputHandler} required />
                        <span className="input100"></span>
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
                    <div className="input100">
                        <input id="zip" type="number" name="zip" onChange={inputHandler} required />
                        <span className="input-underline"></span>
                        <label htmlFor="zip" className="input-label">ZIP</label>
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

export default NewProperty;