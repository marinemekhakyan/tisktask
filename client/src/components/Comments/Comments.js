import React, { Component } from 'react';

const coll = document.getElementsByClassName("collapsible");

    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
}

class Requests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    expand = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    render() {
        const { props } = this;
        return (
            <div>
            <ol>
                <li><input id="cb18" name="cb18" type="checkbox" /><label for="cb18"><span>{props.request}</span></label>
                    <div className="statusBtns">
                        <button><a href="#"><img onClick={() => props.handleStatus(props.id, 1)} id="approvedSymbol" src="./assets/approvedSymbol.png" /></a></button>
                        <button><a href="#"><img id="inProgressSymbol" src="./assets/progressSymbol.png" /></a></button>
                        <button><a href="#"><img id="aboutOnHoldSymbol" src="./assets/onHoldSymbol.png" /></a></button>
                    </div>
                    </li>
                    {/* COMMENT BOX */}
    
                    <div className="detailBox">
                        <div className="titleBox" >
                            <button type="button" className="collapsible" onClick={this.expand}>Comments</button>
                            {/* <button type="button"><img className="collapsible" src="./images/collapseBtn.png"></button> */}
                        </div>
                        <div className={`comment-box-content${this.state.expanded ? ' expanded' : ''}`}>
                        <div className="commentBox">
                            <p className="taskDescription">Need to Clarify Something?</p>
                            <p className="taskDescription1">Leave a Comment Here</p>
                        </div>
                        <div className="actionBox">
                            <ul className="commentList">
                                <li>
                                    <div className="commenterImage">
                                        <img src="./assets/tenantMsgIcon2.png" />
                                    </div>
                                    <div className="commentText">
                                        <p className="">Hey! Would it be OK to reschedule for Thursday?</p> <span className="date sub-text">on November 18th, 2019</span>
    
                                    </div>
                                </li>
                                <li>
                                    <div className="commenterImage">
                                        <img src="./assets/landlordMsgIcon.png" />
                                    </div>
                                    <div className="commentText">
                                        <p className="">Sure thing!</p> <span className="date sub-text">on November 18th, 2019</span>
    
                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline" role="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="typeth here..." />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default">
                                        <img id="sendMsgImg" src="./assets/sendBtn.png" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
            </ol>
            </div >
    
    
        )
    }
}

export default Requests;