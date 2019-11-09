import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Secure from "./pages/Secure";
import TenantDashboard from "./pages/TenantDash";
import LandlordDashboard from "./pages/LandlordDash";
import AboutUsPage from "./pages/AboutUs";

import './App.css';

function App() {
  return (
    <Router>
      <div className="flexbox">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/tenant-dashboard" component={TenantDashboard} />
          <Route exact path="/landlord-dashboard" component={LandlordDashboard} />
          <Route exact path="/secure" component={Secure} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
