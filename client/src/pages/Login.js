import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import API from "../utils/API";
// import Title from "../components/Title";
// import Form from "../components/Form";
// import "./Login.css";

// class Login extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       username: '',
//       password: ''
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange (event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   handleSubmit (event) {
//     event.preventDefault();

//     // API.login(this.state.username, this.state.password)
//     //   .then(res => this.props.history.push('/secure'))
//     //   .catch(err => console.error(err));
//   }

//   render () {
//     return (
//       <Fragment>
//         <Title>TiskTask</Title>
//         <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} content={this.state} />
//         <Link to="/register" className="link-to-register">First time? Register here</Link>
//       </Fragment>
//     );
//   }
// }

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
        <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
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
        <div id="dropDownSelect1"></div>
      </Fragment>
    );
  }
}

export default Login;
