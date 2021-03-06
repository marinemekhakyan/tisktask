import React, { Component } from "react";
import Moment from "react-moment";

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

  setImgAttribute = () => {
    let j;
    let p;
    let y;
    let doneImages = document.getElementsByClassName("doneImage");
    let progImages = document.getElementsByClassName("progImage");
    let holdImages = document.getElementsByClassName("holdImage");
    // console.log(images.length);
    for (j = 0; j < doneImages.length; j++) {
      doneImages[j].setAttribute("value", "done-" + j);
      doneImages[j].addEventListener("click", () => {
        doneImages[j].setAttribute("src", "./assets/approvedSymbolClicked.png");
      });
    }
    for (p = 0; p < progImages.length; p++) {
      progImages[p].setAttribute("value", "prog-" + p);
      progImages[p].addEventListener("click", () => {
        progImages[p].setAttribute("src", "./assets/progressSymbolClicked.png");
      });
    }
    const newHoldImg = e => {
      console.log(e);
      // e.setAttribute("src", "./assets/onHoldSymbolClicked.png");
    };
    for (y = 0; y < holdImages.length; y++) {
      holdImages[y].setAttribute("value", "hold-" + y);
      holdImages[y].addEventListener("click", newHoldImg);
    }
  };

  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  // componentDidMount() {
  //   this.setImgAttribute();
  // }

  render() {
    const { props } = this;
    return (
      <div className="border border-white p-2 mb-3">
        {/* <input id="cb18" name="cb18" type="checkbox" />
        <label htmlFor="cb18">
          <span>{props.request}</span>
        </label> */}
        <h6 className="text-white text-left p-1 m-1 mb-1">
          <Moment format="MM/DD/YY">{props.open_date}</Moment>
        </h6>
        <h6 className="text-white text-left p-1 m-1 mb-1">
          Status: {props.status}
        </h6>
        <h4 className="text-white text-left p-1 m-1 mb-3 border-bottom border-white">
          {props.request}
        </h4>
        <div className="statusBtns mb-3">
          <button>
            <img
              className="doneImage"
              onClick={props.done}
              id="approvedSymbol"
              src="./assets/approvedSymbol.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="progImage"
              onClick={props.inProgress}
              id="inProgressSymbol"
              src="./assets/progressSymbol.png"
              alt=""
            />
          </button>
          <button>
            <img
              style={{ height: "21.5%", width: "21.5%" }}
              className="holdImage"
              id="aboutOnHoldSymbol"
              src="./assets/onHoldSymbol.png"
              alt=""
            />
          </button>
        </div>

        {/* COMMENT BOX */}

        <div className="detailBox mb-3">
          <div className="titleBox">
            <button type="button" className="collapsible" onClick={this.expand}>
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
                    <img id="sendMsgImg" src="./assets/sendBtn.png" alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Requests;
