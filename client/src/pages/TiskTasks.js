import React, { Component, Fragment } from "react";
import Comments from "../components/Comments/Comments";
import API from "../utils/API";;

class TiskTasks extends Component {

    state = {
        unitID: 2,
        requests: []
    }

    componentDidMount() {
        console.log("before API call")
        this.getAllTickets();
    }

    getAllTickets = () => {
        API.findAllTickets(this.state.unitID)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                //this.setState({resquests:res.data})
                this.setState({
                    requests: [{
                        id: 1,
                        request: "neighbor's cats are loud",
                        status: 0
                    },
                    {
                        id: 2,
                        request: "very squeeky door",
                        status: 0
                    }]
                })
            })
            .catch(err => console.error(err))
    }

    handleStatus = (reqID, newStatus) => {
        console.log("handlestatus1", reqID)
        API.updateTicket(this.state.unitID, reqID, { status: newStatus })
            .then(res => {
                if (res.ok) {
                    this.getAllTickets()
                }
            })
            .catch(err => console.error(err))
        //api call for updating the request based on the id and the type
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
                                        <h4 className="h4">TiskTasks</h4>
                                        {this.state.requests.map(req =>
                                            <Comments
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
                                    <a href="/new-request">
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

export default TiskTasks;