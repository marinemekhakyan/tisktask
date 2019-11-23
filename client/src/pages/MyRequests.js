import React, { Component, Fragment } from "react";
import Requests from "../components/Comments/Comments";
// import API from "../utils/API";
import axios from "axios";

class MyRequests extends Component {
  /// state (include the array with all the request )
  // state = {
  //   requests: [],
  //   tenant_email: ""
  // };
  //     // api call for all the requests from the tenant then
  //     // setState requests = data   this means in the render we need to do (this.state.request.map(request => render component))

  componentDidMount() {
    // console.log("before API call");
    // let unitID = 2;
    // API.findAllTickets(unitID)
    //   .then(res => {
    //     console.log(res);
    //     //this.setState({resquests:res.data})
    //     this.setState({
    //       requests: [
    //         {
    //           id: 1,
    //           request: "neightbor's cats are loud",
    //           status: 0
    //         },
    //         {
    //           id: 2,
    //           request: "very squeeky door",
    //           status: 0
    //         }
    //       ]
    //     });
    //   })
    //   .catch(err => console.log(err));
    axios
      .get("api/tenant/get/tickets")
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("Searching for tickets");
        this.setState({
          requests: res.data
        });
      })
      .catch(err => {
        if (err) throw err;
      });
  }

  handleStatus = reqID => {
    console.log("handlestatus1", reqID);
    //api call for updating the request based on the id and the type
  };
  // }

  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      tenant_email: ""
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInputChange(event) {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state);

  //   axios
  //     .get("api/tenant/get/tickets")
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //       console.log("Searching for tickets");
  //     })
  //     .catch(err => {
  //       if (err) throw err;
  //     });
  // }

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
                <img id="fingerLogo" src="assets/ttFingerLogoLoop.gif" alt="" />
              </span>
              {/* <form onSubmit={this.handleSubmit}>
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100 pl-0 pb-1"
                    type="text"
                    name="tenant_email"
                    value={this.state.tenant_email}
                    onChange={this.handleInputChange}
                    placeholder={"Enter email to see requests"}
                    required
                  />
                  <span className="input-underline"></span>
                </div>
                <button className="login100-form-btn m-auto" type="submit">
                  SUBMIT
                </button>
              </form> */}
              <div className="container">
                <section>
                  <div
                    className="ac-custom ac-list text-center"
                    autoComplete="off"
                  >
                    <h2 id="myRequestTitle">My Requests</h2>
                    {/* {this.state.requests.map(req => (
                      <Requests
                        key={req.id}
                        id={req.id}
                        request={req.request}
                        handleStatus={this.handleStatus}
                      />
                    ))} */}
                    {this.state.requests.map(req => (
                      <div key={req.id} className="card">
                        <div className="card-body">
                          <p>{req.request}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="bottomBtns p-t-10 text-center mb-5">
                <button className="newTaskImg m-auto">
                  <a href="/new-request">
                    <img
                      id="newTaskImg"
                      src="./assets/addTaskSymbol.png"
                      alt=""
                    />
                    <p className="login100-form-title" id="newRequestBtnTitle">
                      New Request
                    </p>
                  </a>
                </button>
              </div>
              <div className="text-center">
              <a className="txt1" href="/tenant-dashboard">
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
        <div id="dropDownSelect1"></div>
      </Fragment>
    );
  }
}

export default MyRequests;
