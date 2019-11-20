import React, { Component, Fragment } from "react";

class TiskTasks extends Component  {

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
                        <form className="ac-custom ac-list"  autocomplete="off">
                            <h2 id="myRequestTitle">TiskTasks</h2>
                            <ol>
                                <li><input id="cb18" name="cb18" type="checkbox" /><label for="cb18"><span>Fix Refrigerator @ 123 Hollywood Blvd.</span></label>
                                    <div className="statusBtns">
                                        <button><a href="#"><img id="approvedSymbol" src="./assets/approvedSymbol.png"/></a></button>
                                        <button><a href="#"><img id="inProgressSymbol" src="./assets/progressSymbol.png"/></a></button>
                                        <button><a href="#"><img id="aboutOnHoldSymbol" src="./assets/onHoldSymbol.png"/></a></button>
                                        <button><a href="#"><img id="deleteSymbol" src="./assets/deleteSymbol.png"/></a></button>

                                    </div>
                                </li>
                                <li><input id="cb18" name="cb18" type="checkbox" /><label for="cb18"><span>Replace AC remote control @ 123 Hollywood Blvd.</span></label>
                                    <div className="statusBtns">
                                        <button><a href="#"><img id="approvedSymbol" src="./assets/approvedSymbol.png"/></a></button>
                                        <button><a href="#"><img id="inProgressSymbol" src="./assets/progressSymbol.png"/></a></button>
                                        <button><a href="#"><img id="aboutOnHoldSymbol" src="./assets/onHoldSymbol.png"/></a></button>
                                        <button><a href="#"><img id="deleteSymbol" src="./assets/deleteSymbol.png"/></a></button>
                                    </div>
                                </li>
                            </ol>
                        </form>
                    </section>
                </div>
                <div className="bottomBtns p-t-10">
                    <button className="newTaskImg">
                        <a href="#">
                            <img id="newTaskImg" src="./assets/addTaskSymbol.png"/>
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

