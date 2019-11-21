import React from 'react';
// import "./Requests.css";


function Requests(props) {

    return (
        <div>
        <ol>
            <li><input id="cb18" name="cb18" type="checkbox" /><label for="cb18"><span>{props.request}</span></label>
                <div className="statusBtns">
                    <button><a href="#"><img onclick={props.handleStatus(props.id)} id="approvedSymbol" src="./assets/approvedSymbol.png" /></a></button>
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
        </div >


    )
}

export default Requests;