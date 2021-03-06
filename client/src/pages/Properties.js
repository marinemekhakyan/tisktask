import React, { Fragment } from "react";

const Properties = () => (
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
        <div className="prop-wrap-login100">
          <span className="login100-form-title" id="loginTitle">
            TiskTask
          </span>
          <a href="/"><span className="login100-form-logo">
            <img id="fingerLogo" src="/assets/ttFingerLogoLoop.gif" alt="" />
          </span></a>
          <span className="login100-form-title" id="loginSubTitle1">
            Don't Get Scolded | Get Stuff Done
          </span>
          <h4 className="h4">My Properties</h4>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col" id="prop-name">
                  Name
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
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
            <hr />
            <a className="txt1" href="/">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Properties;
