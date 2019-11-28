import React, { Component, Fragment } from "react";
// import TenantReg from "../components/TenantRegistration/TenantReg";
import Auth from "../utils/Auth";

class LandlordDashboard extends Component {
  componentDidMount() {
    console.log(Auth.isAuthenticatedAsLandlord());
    console.log(Auth.isAuthenticatedAsTenant());
  }

  newPropertyLink = () => {
    if (Auth.isAuthenticatedAsLandlord()) {
      console.log(Auth.isAuthenticatedAsLandlord());
      this.props.history.push("/add-new-property");
    } else {
      this.props.history.push("/");
    }
  };

  newTenantLink = () => {
    if (Auth.isAuthenticatedAsLandlord()) {
      console.log(Auth.isAuthenticatedAsLandlord());
      this.props.history.push("/tenant-registration");
    } else {
      this.props.history.push("/");
    }
  };

  tiskTaskLink = () => {
    // if (Auth.isAuthenticatedAsLandlord()) {
    //   console.log(Auth.isAuthenticatedAsLandlord());
    //   this.props.history.push("/tisktasks");
    // } else {
    //   this.props.history.push("/");
    // }
    // below for dev, above for production
    this.props.history.push("/tisktasks");
  };

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

              <div className="container-login100-form-btn">
                <a href="/tisktasks"><button className="login100-form-btn" id="repairBtn">
                  TiskTasks
                </button></a>
              </div>

              <div className="container-login100-form-btn">
                <a href="tenant-registration"><button
                  onClick={this.newTenantLink}
                  className="login100-form-btn"
                  id="genQBtn"
                  href="#"
                >
                  New Tenant
                </button></a>
              </div>

              <div className="container-login100-form-btn">
                <a href="add-new-property"><button
                  onClick={this.newPropertyLink}
                  className="login100-form-btn"
                  id="concernBtn"
                >
                  New Property
                </button></a>
                {/* </a> */}
              </div>

              <div className="text-center p-t-80">
                <a className="txt1" href="/about-tisktask">
                  About TiskTask
                </a>
                <hr />
                <a className="txt1" href="/">
                  Log Out
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

export default LandlordDashboard;
