import React from "react";
// import "./main.css";
// import "./util.css";


class LandlordRegistration extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //     // API.login(this.state.username, this.state.password)
    //     //   .then(res => this.props.history.push('/secure'))
    //     //   .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
      <div>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form className="login100-form validate-form" onSubmit={submitHandler}>
              <span className="login100-form-title" id="loginTitle">
                TiskTask
              </span>
              <span className="login100-form-logo">
                <img id="fingerLogo" src="../src/images/fingerLogo.png" />
              </span>
              <span class="login100-form-title" id="loginSubTitle1">
                Don't Get Scolded | Get Stuff Done
              </span>
  
              <div className="input-container">
                <input id="firstname" type="text" name="firstname" onChange={inputHandler} required />
                <span className="input-underline"></span>
                <label htmlFor="firstname" className="input-label">First Name</label>
              </div>
  
              <div className="input-container">
                <input id="lastname" type="text" name="lastname" onChange={inputHandler} required />
                <span className="input-underline"></span>
                <label htmlFor="lastname" className="input-label">Last Name</label>
              </div>
  
              <div className="input-container">
                <input id="primaryphone" type="text" name="primaryphone" onChange={inputHandler} required />
                <span className="input-underline"></span>
                <label htmlFor="primaryphone" className="input-label">Primary Phone</label>
              </div>
  
              <div className="input-container">
                <input id="primaryemail" type="email" name="primaryemail" onChange={inputHandler} required />
                <span className="input-underline"></span>
                <label htmlFor="primaryemail" className="input-label">Primary Email</label>
              </div>
  
              <div className="input-container">
                <input id="username" type="text" name="username" onChange={inputHandler} value={content.username} required />
                <span className="input-underline"></span>
                <label htmlFor="username" className="input-label">Username</label>
              </div>
  
              <div className="input-container">
                <input id="password" type="password" name="password" onChange={inputHandler} value={content.password} required />
                <span className="input-underline"></span>
                <label htmlFor="password" className="input-label">Password</label>
              </div>
  
              <div class="contact100-form-checkbox">
                <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>
              <button className="btn">SUBMIT</button>
              <div class="text-center p-t-5">
                <a class="txt1" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
    )
  }
};

export default LandlordRegistration;
