import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import Auth from "../utils/Auth";

class TenantDashboard extends Component {
  componentDidMount() {
    console.log(Auth.isAuthenticatedAsLandlord());
    console.log(Auth.isAuthenticatedAsTenant());
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
              <span className="login100-form-title" id="loginTitle">
                TiskTask
              </span>

              <span className="login100-form-title" id="loginSubTitle2">
                Don't Get Scolded | Get Stuff Done
              </span>

              <span className="login100-form-logo">
                <img
                  id="fingerLogo"
                  src="/assets/ttFingerLogoLoop.gif"
                  alt=""
                />
              </span>

              <h3 className="login100-form-title p-b-60 p-t-34" id="welcomeMsg">
                Welcome home,
                <span id="userSpan"></span>
              </h3>

              <div class="container-login100-form-btn">
                <a href="/new-request"><button class="login100-form-btn" id="repairBtn">
                  Create Request
                </button></a>
              </div>

              <div class="container-login100-form-btn">
              <a href="/my-requests"><button class="login100-form-btn" id="genQBtn" href="/my-requests">
                  My Requests
                </button></a>
              </div>

              <div className="text-center p-t-80">
                <a className="txt1" href="/">
                  about TiskTask
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
      </Fragment>
    );
  }
}

export default TenantDashboard;
