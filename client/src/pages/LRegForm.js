import React, { Component, Fragment } from "react";
import axios from "axios";

class LandlordReg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
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
      .post("api/landlord/register/self", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        if (err) throw err;
      });
  }

  render() {
    const { first_name, last_name, phone_number, email, password } = this.state;
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
                  <img id="fingerLogo" src="/assets/ttFingerLogoLoop.gif" />
                </span>
                <span className="login100-form-title" id="loginSubTitle1">
                  Don't Get Scolded | Get Stuff Done
                </span>

                <h4 className="h4">Landlord Registration</h4>
      
              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" name="firstname" onChange={this.handleSubmit} required />
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
    
              <div className="wrap-input100 validate-input">
                <input className="input100" type="password" name="password" onChange={this.handleInputChange} required />
                <span className="input-underline"></span>
                <label htmlFor="password" className="input-label">Password</label>
              </div>
  
              <div class="contact100-form-checkbox">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>
              <button className="login100-form-btn">SUBMIT</button>
              <div class="text-center p-t-5">
                <a class="txt1" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </Fragment>
    )
  }
}

export default LandlordReg;
