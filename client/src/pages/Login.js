import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //// API.login(this.state.username, this.state.password)
    //// .then(res => this.props.history.push('/secure'))
    //// .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
            <div>
    <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
        <source src="assets/ttBackgroundVid.mp4" type="video/mp4" />
    </video>
    <form className="form" onSubmit={this.handleSubmit}>
        <div className="input-container">
            <input id="propertyname" type="text" name="propertyname" onChange={this.handleInputChange} />
            <span className="input-underline"></span>
            <label htmlFor="propertyname" className="input-label">Property name</label>
        </div>
        <div className="input-container">
            <input id="propertyaddress" type="text" name="propertyaddress" onChange={this.handleInputChange} required />
            <span className="input-underline"></span>
            <label htmlFor="propertyaddress" className="input-label">Street name</label>
        </div>
        <div className="input-container">
            <input id="city" type="text" name="city" onChange={this.handleInputChange} required />
            <span className="input-underline"></span>
            <label htmlFor="city" className="input-label">City</label>
        </div>
        <div className="input-container">
            <input id="state" type="text" list="datalist" name="state" onChange={this.handleInputChange} required />
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
            <input id="zip" type="number" name="zip" onChange={this.handleInputChange} required />
            <span className="input-underline"></span>
            <label htmlFor="zip" className="input-label">ZIP</label>
        </div>
        <div className="input-container">
            <input id="numberofunits" type="number" name="numberofunits" onChange={this.handleInputChange} required />
            <span className="input-underline"></span>
            <label htmlFor="numberofunits" className="input-label">Number of Units</label>
        </div>
        <button className="btn">SUBMIT</button>
    </form>
    </div>
        {/* <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
          <source src="assets/ttBackgroundVid.mp4" type="video/mp4" />
        </video>

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
                  <input className="input100" type="text" name="username" onChange={this.handleInputChange} value={this.state.username} required />
                  <span className="input-underline"></span>
                  <label htmlFor="username" className="input-label">Username</label>
                </div>

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} required />
                  <span className="input-underline"></span>
                  <label htmlFor="password" className="input-label">Password</label>
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>

                <div className="text-center p-t-90">
                  <a className="txt1" href="#">
                    Landlord? Register Here.
                    </a>
                </div>

                <div className="text-center p-t-5">
                  <a className="txt1" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1"></div> */}
      </Fragment>
    );
  }
}

export default Login;
