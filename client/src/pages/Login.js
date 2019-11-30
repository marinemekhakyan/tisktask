import React, { Component, Fragment } from "react";
import axios from "axios";
import Auth from "../utils/Auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      role: ""
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
    if (this.state.role === "landlord") {
      axios
        .post("api/landlord/login", this.state)
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res) {
            Auth.landlordLlogin(() => {
              console.log(Auth.isAuthenticatedAsLandlord());
              this.props.history.push("/landlord-dashboard");
            });
          }
        })
        .catch(err => {
          if (err) throw err;
        });
    }
    if (this.state.role === "tenant") {
      axios
        .post("api/tenant/login", this.state)
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res) {
            Auth.tenantLlogin(() => {
              console.log(Auth.isAuthenticatedAsTenant());
              this.props.history.push("/tenant-dashboard");
            });
          }
        })
        .catch(err => {
          if (err) throw err;
        });
    }
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
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="username"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    placeholder={"Email"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="username" className="input-label">
                    Username
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    placeholder={"Password"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="password" className="input-label">
                    Password
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="role"
                    onChange={this.handleInputChange}
                    value={this.state.role.toLocaleLowerCase()}
                    placeholder={"Role"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="password" className="input-label">
                    Role
                  </label> */}
                </div>
                {/* <input
                  className="mr-2"
                  type="radio"
                  name="role"
                  onChange={this.handleInputChange}
                  value={this.state.role}
                />
                {"Landlord"}
                <br />
                <input
                  className="mr-2 mb-5"
                  type="radio"
                  name="role"
                  onChange={this.handleInputChange}
                  value={this.state.role}
                />
                {"Tenant"} */}
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
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit">
                    Login
                  </button>
                </div>
                <div className="text-center p-t-90">
                  <a className="txt1" href="/landlord-registration">
                    Landlord? Register Here.
                  </a>
                </div>
                <div className="text-center p-t-5">
                  <a className="txt1" href="/">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <a className="txt1" href="/about-tisktask">
                   About TiskTask
                </a>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
      </Fragment>
    );
  }
}

export default Login;
