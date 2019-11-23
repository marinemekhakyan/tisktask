import React, { Component, Fragment } from "react";
import axios from "axios";

class NewProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property_name: "",
      property_address: "",
      number_of_units: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("api/landlord/register/property", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        // if (res) {
        // this.props.history.push("/landlord-dashboard");
        // console.log("New property added");
        // }
      })
      .catch(err => {
        if (err) throw err;
      });
    this.props.history.push("/landlord-dashboard");
    console.log("New property added");
  }

  render() {
    return (
      <Fragment>
        <video
          muted
          autoPlay
          loop
          poster="assets/backgroundStill.png"
          className="fullscreen-bg__video"
        >
          <source src="assets/ttBackgroundVid.mp4" type="video/mp4" />
        </video>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                onSubmit={this.handleSubmit}
                className="login100-form validate-form"
              >
                <span className="login100-form-title" id="loginTitle">
                  TiskTask
                </span>
                <span className="login100-form-logo">
                  <img
                    id="fingerLogo"
                    src="/assets/ttFingerLogoLoop.gif"
                    alt=""
                  />
                </span>
                <span className="login100-form-title" id="loginSubTitle1">
                  Don't Get Scolded | Get Stuff Done
                </span>
                <h4 className="h4 mb-5">Add New Property</h4>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="property_name"
                    onChange={this.handleInputChange}
                    placeholder={"Property Name"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="propertyname" className="input-label">
                    Property Name
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="property_address"
                    onChange={this.handleInputChange}
                    placeholder={"Property Address"}
                    required
                  />
                  {/* <span className="input-underline">Street Name</span> */}
                </div>
                {/* <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="city"
                    onChange={this.handleInputChange}
                    placeholder={"City"}
                    required
                  />
                  <span className="input100"></span>
                  <label htmlFor="city" className="input-label">
                    City
                  </label>
                </div>
                <div className="wrap-input100 validate-input">
                  <label htmlFor="state" className="input-label text-white">
                    State
                  </label>
                  <input
                    className="state-dropdown"
                    type="text"
                    list="datalist"
                    name="state"
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="input100"></span>
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
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="number"
                    name="zip"
                    onChange={this.handleInputChange}
                    placeholder={"ZIP"}
                    required
                  />
                  <span className="input-underline"></span>
                  <label htmlFor="zip" className="input-label">
                    ZIP
                  </label>
                </div> */}
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="number"
                    name="number_of_units"
                    onChange={this.handleInputChange}
                    placeholder={"Number of Units"}
                    required
                  />
                  <span className="input-underline mb-5"></span>
                  {/* <label htmlFor="numberofunits" className="input-label">
                    Number of Units
                  </label> */}
                </div>
                {/* <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label> */}
                {/* </div> */}
                <div>
                <button className="login100-form-btn text-center m-auto">
                  SUBMIT
                </button>
                </div>
                <div className="text-center">
                <a className="txt1" href="/landlord-dashboard">
                  Back to my dashboard
                </a> 
                <hr /> 
                <a className="txt1" href="/about-tisktask">
                   About TiskTask
                </a>
                </div>
                {/* <div className="text-center p-t-5">
                  <a className="txt1" href="/landlord-dashboard">
                    Forgot Password?
                  </a>
                </div> */}
                    <div className="text-center">
                <a className="txt1" href="/landlord-dashboard">
                  Back to my dashboard
                </a> 
                <hr /> 
                <a className="txt1" href="/about-tisktask">
                   About TiskTask
                </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewProperty;
