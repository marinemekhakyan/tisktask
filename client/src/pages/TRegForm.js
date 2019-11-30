import React, { Component, Fragment } from "react";
import axios from "axios";

class TenantRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      primary_phone: "",
      primary_email: "",
      property_name: "",
      property_address: "",
      unit_number: "",
      password: ""
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
      .post("api/landlord/register/tenant", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res) {
          this.props.history.push("/landlord-dashboard");
        }
      })
      .catch(err => {
        if (err) throw err;
      });
      
      event.preventDefault();
      alert("Welcome to TiskTask!");
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
                <a href="/"><span className="login100-form-logo">
                  <img
                    id="fingerLogo"
                    src="/assets/ttFingerLogoLoop.gif"
                    alt=""
                  />
                </span></a>
                <span className="login100-form-title" id="loginSubTitle1">
                  Don't Get Scolded | Get Stuff Done
                </span>
                <h4 className="h4 mb-5">Tenant Registration</h4>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                    placeholder={"First Name"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="firstname" className="input-label">
                    First Name
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                    placeholder={"Last Name"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="lastname" className="input-label">
                    Last Name
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="primary_phone"
                    value={this.state.primary_phone}
                    onChange={this.handleInputChange}
                    placeholder={"Primary Phone"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="primaryphone" className="input-label">
                    Primary Phone
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="email"
                    name="primary_email"
                    value={this.state.primary_email}
                    onChange={this.handleInputChange}
                    placeholder={"Primary Email"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="primaryemail" className="input-label">
                    Primary Email
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="property_name"
                    value={this.state.property_name}
                    onChange={this.handleInputChange}
                    placeholder={"Property Name"}
                    required
                  />
                  {/* <span className="input-underline">Street Name</span> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="property_address"
                    value={this.state.property_address}
                    onChange={this.handleInputChange}
                    placeholder={"Property Address"}
                    required
                  />
                  {/* <span className="input100"></span>
                  placeholder={"First Name"} */}
                </div>
                {/* <div className="wrap-input100 validate-input">
                  <label htmlFor="state" className="input-label">
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
                    className="input100"
                    type="number"
                    name="zip"
                    onChange={this.handleInputChange}
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
                    type="text"
                    name="unit_number"
                    value={this.state.unit_number}
                    onChange={this.handleInputChange}
                    placeholder={"Unit Number"}
                    required
                  />
                  {/* <span className="input-underline"></span> */}
                  {/* <label htmlFor="unitnumber" className="input-label">
                    Unit Number
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder={"Password"}
                    required
                  />
                  <span className="input-underline mb-5"></span>
                  {/* <label htmlFor="password" className="input-label">
                    Password
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
                  </label>
                </div> */}
                <button className="login100-form-btn text-center m-auto">
                  SUBMIT
                </button>
                <div className="text-center p-t-5 mt-3">
                  <a className="txt1" href="/landlord-dashboard">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <div className="text-center">
                <a className="txt1" href="/landlord-dashboard">
                  Back to my dashboard
                </a> 
                <hr /> 
                <a className="txt1" href="/about-tisktask">
                   About TiskTask
                </a>
                </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TenantRegistration;
