import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class Secure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie: null,
      loading: true
    };
  }

  componentDidMount() {
    this.validateCookie();
  }

  validateCookie() {
    const cookieValue = cookie.load("connect.sid");
    axios
      .get("/api/auth/session/", cookieValue)
      .then(res => {
        if (res.status === 200) {
          this.setState({ cookie: cookieValue, loading: false });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch(err => this.setState({ loading: false }));
  }

  // handleLogout() {
  //   API.logout()
  //     .then(res => this.props.history.push("/login"))
  //     .catch(err => console.error(err));
  // }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (!this.state.cookie) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <Title>This is a secure page</Title>
        <button id="logout" onClick={this.handleLogout} className="btn">
          LOG OUT
        </button>
      </Fragment>
    );
  }
}

export default Secure;
