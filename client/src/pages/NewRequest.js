import React, { Component, Fragment } from "react";
import axios from "axios";

class NewRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request: "",
      tenant_email: ""
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
      .post("api/tenant/create/ticket", this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("New tcket created");
        this.props.history.push("/tenant-dashboard");
      })
      .catch(err => {
        if (err) throw err;
      });

      event.preventDefault();
      alert("Thank you for submitting a request! Please wait for your Landlord to update the request status.")
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
                <h4 className="h4 mb-5">Add New Request</h4>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="request"
                    value={this.state.request}
                    onChange={this.handleInputChange}
                    placeholder={"Request Description"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="description" className="input-label">
                    Description of Request
                  </label> */}
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="tenant_email"
                    value={this.state.tenant_email}
                    onChange={this.handleInputChange}
                    placeholder={"Email"}
                    required
                  />
                  <span className="input-underline"></span>
                  {/* <label htmlFor="street" className="input-label">
                    Street
                  </label> */}
                </div>
                {/* <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="city"
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="input100"></span>
                  <label htmlFor="city" className="input-label">
                    City
                  </label>
                </div>
                <div className="wrap-input100 validate-input">
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
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="number"
                    name="unit"
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className="input-underline"></span>
                  <label htmlFor="unit" className="input-label">
                    Unit Number
                  </label>
                </div>
                <div className="wrap-input100 validate-input">
                  <p
                    className="input100"
                    type="number"
                    name="availability"
                    onChange={this.handleInputChange}
                    required
                  />
                  <label htmlFor="availability" className="input-label">
                    Availability
                  </label>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="Monday"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Mon
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="Tuesday"
                    />
                    <label className="form-check-label" for="inlineCheckbox2">
                      Tue
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Wednesday"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Wed
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Thursday"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Thu
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Friday"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Fri
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Saturday"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Sat
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Sunday"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Sun
                    </label>
                  </div>
                </div>

                <div className="wrap-input100 validate-input">
                  <p
                    className="input100"
                    name="visit"
                    onChange={this.handleInputChange}
                    required
                  />
                  <label htmlFor="visit" className="input-label">
                    Are you ok if someone enters the premises without you?
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="yes"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="no"
                    />
                    <label className="form-check-label" for="inlineCheckbox2">
                      No
                    </label>
                  </div>
                </div>
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" for="ckb1">
                    Remember me
                  </label>
                </div> */}
                <button className="login100-form-btn" type="submit">
                  SUBMIT
                </button>
                <div className="text-center">
                <a className="txt1" href="/tenant-dashboard">
                  Back to my dashboard
                </a> 
                <hr /> 
                <a className="txt1" href="/about-tisktask">
                   About TiskTask
                </a>
                </div>
                {/* <div className="text-center p-t-5">
                                    <a className="txt1" href="#">
                                        Forgot Password?
                                    </a> 
                                </div> */}
                <div className="text-center">
                <a className="txt1" href="/tenant-dashboard">
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

export default NewRequest;
