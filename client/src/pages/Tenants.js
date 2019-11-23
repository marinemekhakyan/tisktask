import React, { Fragment } from "react";

const Tenants = () => (
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
        <div className="ten-wrap-login100">
          <span className="login100-form-title" id="loginTitle">
            TiskTask
          </span>
          <span className="login100-form-logo">
            <img id="fingerLogo" src="/assets/ttFingerLogoLoop.gif" alt="" />
          </span>
          <span className="login100-form-title" id="loginSubTitle1">
            Don't Get Scolded | Get Stuff Done
          </span>
          <h4 className="h4">Tenant Directory</h4>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col" id="prop-name">
                  First Name
                </th>
                <th scope="col" id="prop-name">
                  Last Name
                </th>
                <th scope="col" id="prop-name">
                  Phone
                </th>
                <th scope="col" id="prop-name">
                  Email
                </th>
                <th scope="col" id="prop-street">
                  Street
                </th>
                <th scope="col" id="prop-city">
                  City
                </th>
                <th scope="col" id="prop-state">
                  State
                </th>
                <th scope="col" id="prop-zip">
                  ZIP
                </th>
                <th scope="col" id="prop-units">
                  Unit Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sigmund</td>
                <td>Freud</td>
                <td>0238023048</td>
                <td>followyourinstincts@aol.com</td>
                <td>123 Dogs blvd.</td>
                <td>Los Angeles</td>
                <td>CA</td>
                <td>90034</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Aretha</td>
                <td>Franklin</td>
                <td>0238002397</td>
                <td>medaqueen@myspace.com</td>
                <td>123 Dogs blvd.</td>
                <td>Los Angeles</td>
                <td>CA</td>
                <td>90034</td>
                <td>11</td>
              </tr>
            </tbody>
          </table>
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

export default Tenants;
