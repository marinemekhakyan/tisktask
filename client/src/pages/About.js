import React, { Component, Fragment } from "react";
// import TenantReg from "../components/TenantRegistration/TenantReg";
import Auth from "../utils/Auth";

class About extends Component {
  componentDidMount() {
    console.log(Auth.isAuthenticatedAsLandlord());
    console.log(Auth.isAuthenticatedAsTenant());
  }

  newPropertyLink = () => {
    if (Auth.isAuthenticatedAsLandlord()) {
      console.log(Auth.isAuthenticatedAsLandlord());
      this.props.history.push("/add-new-property");
    } else {
      this.props.history.push("/");
    }
  };

  newTenantLink = () => {
    if (Auth.isAuthenticatedAsLandlord()) {
      console.log(Auth.isAuthenticatedAsLandlord());
      this.props.history.push("/tenant-registration");
    } else {
      this.props.history.push("/");
    }
  };

  tiskTaskLink = () => {
    // if (Auth.isAuthenticatedAsLandlord()) {
    //   console.log(Auth.isAuthenticatedAsLandlord());
    //   this.props.history.push("/tisktasks");
    // } else {
    //   this.props.history.push("/");
    // }
    // below for dev, above for production
    this.props.history.push("/tisktasks");
  };

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
                                <img
                                id="fingerLogo"
                                src="/assets/ttFingerLogoLoop.gif"
                                alt=""
                                />
                            </span>

                            <h2 className="login100-form-title" id="aboutTitle">About</h2>
                            
                            <div className="login100-form-title">
                                <h5 id="aboutWelcome">Welcome to TiskTask!</h5>
                                <p className="aboutParagraph" id="aboutBold">TENANTS</p>
                                <p className="aboutParagraph">No more Calling, Texting, Emailing your Maintenance Manager ... Then Calling, Texting, Emailing your Landlord to get that question answered, or repair addressed.</p>
                                <p className="aboutParagraph" id="aboutBold">LANDLORDS</p>
                                <p className="aboutParagraph">Stop pulling your hair out making sure you've answered every Call, Text, Email to every Tenants, Contractor, Electrical, HVAC, Plumbing, & Landscaping companies.</p>
                            </div>
                        </div>


                        <hr/>

                        <div className="aboutStatusBtns">
                            <div className="approvedSection">
                                <img id="aboutApprovedSymbol" src="./images/approvedSymbol.png"/>
                                <p id="symbolTitles">Approved</p>
                            </div>
                            <p className="symbolsParagraph">If this symbol is highlighted, it means the LandLord has seen and approved the Tenant's Request. LandLords may update the tenant by clicking this symbol on the TiskTasks Page.</p>
                            
                            <div className="inProgressSection">
                                <img id="aboutInProgressSymbol" src="./images/progressSymbol.png"/>
                                <p id="symbolTitles">In Progress</p>
                            </div>
                            <p className="symbolsParagraph">If this symbol is highlighted, it means the LandLord has scheduled to resolve the Tenant's Request. LandLords may update the tenant by clicking this symbol on the TiskTasks Page.</p>
                            
                            <div className="onHoldSection">
                                <img id="aboutOnHoldSymbol" src="./images/onHoldSymbol.png"/>
                                <p id="symbolTitles">On Hold</p>
                            </div>
                            <p className="symbolsParagraph" id="onHoldParagraph">If this symbol is highlighted, it means the LandLord has encountered a hiccup in the process of resolving the Tenant's Request, and is actively working to resolve the issue. LandLords may update the tenant by clicking this symbol on the TiskTasks Page.</p>
                        </div>

                        <hr/>

                        <div>
                            <h2 className="login100-form-title" id="teamTitle">TiskTask Team</h2>
                            
                            <button>
                                <a href="https://mafner.github.io/mhDevDesigns/" className="creatorsSection1">
                                    <h5 id="aboutNames">Matt H.</h5>
                                    <img id="mattPic" src="./images/mattPic.PNG"/>
                                    <p id="aboutRoles">UI/UX | Concept Design</p>
                                </a>
                            </button>
                            
                            <button>
                                <a href="https://github.com/marinemekhakyan" className="creatorsSection2">
                                    <p id="aboutRoles">Back End | Team Captain</p>
                                    <img id="marinePic" src="./images/marinePic.PNG"/>
                                    <h5 id="aboutNames">Marine M.</h5>
                                </a>
                            </button>
                            
                            <button>	
                                <a href="https://github.com/bretbaker808" className="creatorsSection3">
                                    <h5 id="aboutNames">Brett B.</h5>
                                    <img id="brettPic" src="./images/brettPic.PNG"/>
                                    <p id="aboutRoles">Back End | Most Valuable Programer</p>
                                </a>
                            </button>

                            </div>

                            <div className="text-center p-t-80">
                                <a className="txt1" href="/">
                                Back Home
                                </a>
                            <div/>
                        </div>
                    </div>
                </div>

                <div id="dropDownSelect1"/>
            </Fragment>
        );
    }
}

export default About;