import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

import "./Home.css";

const Home = () => (
  <Fragment>
    <Title>Authentication</Title>
    <button className="btn"><Link to="/login">ENTER</Link></button>
  </Fragment>
)

export default Home;
