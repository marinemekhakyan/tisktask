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
        if (res) {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        if (err) throw err;
      });

      event.preventDefault();
      alert("Welcome to TiskTask!");

      
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
                  <img
                    id="fingerLogo"
                    src="/assets/ttFingerLogoLoop.gif"
                    alt=""
                  />
                </span>
                <span className="login100-form-title" id="loginSubTitle1">
                  Don't Get Scolded | Get Stuff Done
                </span>

                <h4 className="h4 mb-5">Landlord Registration</h4>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={this.handleInputChange}
                    placeholder={"First Name"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="first_name" className="input-label">
                    First Name
                  </label> */}
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={this.handleInputChange}
                    placeholder={"Last Name"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="last_name" className="input-label">
                    Last Name
                  </label> */}
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="phone_number"
                    value={phone_number}
                    onChange={this.handleInputChange}
                    placeholder={"Primary Phone"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="phone_number" className="input-label">
                    Primary Phone
                  </label> */}
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder={"Email"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="email" className="input-label">
                    Email
                  </label> */}
                </div>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder={"Password"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="password" className="input-label">
                    Password
                  </label> */}
                </div>

                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div>
                  <button className="login100-form-btn" onClick={this.handleSubmit}>SUBMIT</button>
                </div>
                <div className="text-center p-t-5">
                  <a className="txt1" href="/landlord-dashboard">
                    Forgot Password?
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

export default LandlordReg;
