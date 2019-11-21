import React, { Component, Fragment } from "react";
import Requests from "../components/Requests/Requests";
import API from "../utils/API";
class MyRequests extends Component {


    /// state (include the array with all the request )
    state = {
        resquests: []
    }
    //     // api call for all the requests from the tenant then
    //     // setState resquests = data   this means in the render we need to do (this.state.request.map(request => render component))

    componentDidMount() {
        console.log("before API call")
        let unitID = 2
        API.findAllTickets(unitID)
            .then(res => {
                console.log(res)
                //this.setState({resquests:res.data})
                this.setState({
                    resquests: [{
                        id: 1,
                        request: "the fridge is broken",
                        status: 0
                    },
                    {
                        id: 2,
                        request: "the door is broken",
                        status: 0
                    }]
                })
            })
            .catch(err => console.log(err))
    }

    handleStatus = (reqID) => {
        console.log("handlestatus1", reqID)
        //api call for updating the request based on the id and the type
    }
    // }
    render() {
        return (
            <Fragment>
                <video muted autoPlay loop poster='assets/backgroundStill.png' className="fullscreen-bg__video">
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
                                <img id="fingerLogo" src="assets/ttFingerLogoLoop.gif" />
                            </span>
                            <div className="container">
                                <section>
                                    <form className="ac-custom ac-list" autocomplete="off">
                                        <h2 id="myRequestTitle">My Requests</h2>
                                        {this.state.resquests.map(req =>
                                            <Requests
                                                key={req.id}
                                                id={req.id}
                                                request={req.request}
                                                handleStatus={this.handleStatus}

                                            />)}
                                    </form>
                                </section>
                            </div>
                            <div className="bottomBtns p-t-10">
                                <button className="newTaskImg">
                                    <a href="#">
                                        <img id="newTaskImg" src="./assets/addTaskSymbol.png" />
                                        <p className="login100-form-title" id="newRequestBtnTitle">
                                            New Request
                                        </p>
                                    </a>
                                </button>
                            </div>
                            <div className="text-center">
                                <a className="txt1" href="#">
                                    about TiskTask
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dropDownSelect1"></div>
            </Fragment>
        )
    }
};

export default MyRequests;

