import React, { Component, Fragment } from "react";

class MyRequests extends Component {

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
                                        <ol>
                                            <li><input id="cb18" name="cb18" type="checkbox" /><label for="cb18"><span>Fix Refrigerator @ 123 Hollywood Blvd.</span></label>
                                                <div className="statusBtns">
                                                    <button><a href="#"><img id="approvedSymbol" src="./assets/approvedSymbol.png" /></a></button>
                                                    <button><a href="#"><img id="inProgressSymbol" src="./assets/progressSymbol.png" /></a></button>
                                                    <button><a href="#"><img id="aboutOnHoldSymbol" src="./assets/onHoldSymbol.png" /></a></button>
                                                </div>

                                                {/* COMMENT BOX */}

                                                <div class="detailBox">
                                                    <div class="titleBox" >
                                                        <label>Comments</label>
                                                        {/* <button type="button"><img class="collapsible" src="./images/collapseBtn.png"></button> */}
                                                    </div>
                                                    <div class="commentBox">
                                                        <p class="taskDescription">Need to Clarify Something?</p>
                                                        <p class="taskDescription1">Leave a Comment Here</p>
                                                    </div>
                                                    <div class="actionBox">
                                                        <ul class="commentList">
                                                            <li>
                                                                <div class="commenterImage">
                                                                    <img src="./assets/tenantMsgIcon2.png" />
                                                                </div>
                                                                <div class="commentText">
                                                                    <p class="">Hey! Would it be OK to reschedule for Thursday?</p> <span class="date sub-text">on November 18th, 2019</span>

                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="commenterImage">
                                                                    <img src="./assets/landlordMsgIcon.png" />
                                                                </div>
                                                                <div class="commentText">
                                                                    <p class="">Sure thing!</p> <span class="date sub-text">on November 18th, 2019</span>

                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <form class="form-inline" role="form">
                                                            <div class="form-group">
                                                                <input class="form-control" type="text" placeholder="typeth here..." />
                                                            </div>
                                                            <div class="form-group">
                                                                <button class="btn btn-default">
                                                                    <img id="sendMsgImg" src="./assets/sendBtn.png" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </li>

                                        </ol>
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

