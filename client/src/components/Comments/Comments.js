import React, { Component } from "react";

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
    };
  }

  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const { props } = this;
    return (
      <div>
        <ol>
          <li>
            <input id="cb18" name="cb18" type="checkbox" />
            <label htmlFor="cb18">
              <span>{props.request}</span>
            </label>
            <div className="statusBtns">
              <button>
                <img
                  onClick={() => props.handleStatus(props.id, 1)}
                  id="approvedSymbol"
                  src="./assets/approvedSymbol.png"
                  alt=""
                />
              </button>
              <button>
                <img
                  id="inProgressSymbol"
                  src="./assets/progressSymbol.png"
                  alt=""
                />
              </button>
              <button>
                <img
                  id="aboutOnHoldSymbol"
                  src="./assets/onHoldSymbol.png"
                  alt=""
                />
              </button>
            </div>

            {/* COMMENT BOX */}

            <div className="detailBox">
              <div className="titleBox">
                <button
                  type="button"
                  className="collapsible"
                  onClick={this.expand}
                >
                  Comments
                </button>
                {/* <button type="button"><img className="collapsible" src="./images/collapseBtn.png"></button> */}
              </div>
              <div
                className={`comment-box-content${
                  this.state.expanded ? " expanded" : ""
                }`}
              >
                <div className="commentBox">
                  <p className="taskDescription">Need to Clarify Something?</p>
                  <p className="taskDescription1">Leave a Comment Here</p>
                </div>
                <div className="actionBox">
                  <ul className="commentList">
                    <li>
                      <div className="commenterImage">
                        <img src="./assets/tenantMsgIcon2.png" alt="" />
                      </div>
                      <div className="commentText">
                        <p className="">
                          Hey! Would it be OK to reschedule for Thursday?
                        </p>{" "}
                        <span className="date sub-text">
                          on November 18th, 2019
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="commenterImage">
                        <img src="./assets/landlordMsgIcon.png" alt="" />
                      </div>
                      <div className="commentText">
                        <p className="">Sure thing!</p>{" "}
                        <span className="date sub-text">
                          on November 18th, 2019
                        </span>
                      </div>
                    </li>
                  </ul>
                  <form className="form-inline">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="typeth here..."
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-default">
                        <img
                          id="sendMsgImg"
                          src="./assets/sendBtn.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      // var coll = document.getElementsByClassName("collapsible");

      //     var i;
      //     for (i = 0; i < coll.length; i++) {
      //      coll[i].addEventListener("click", function() {
      //         this.classList.toggle("active");
      //         var content = this.nextElementSibling;
      //         if (content.style.display === "block") {
      //         content.style.display = "none";
      //         } else {
      //         content.style.display = "block";
      //         }
      //     });
      // }
    );
  }
}

export default Requests;
