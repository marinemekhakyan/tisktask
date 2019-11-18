import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import TenantDashboard from "./pages/TenantDash";
import LandlordDashboard from "./pages/LandlordDash";

import './App.css';

function App() {
  return (
    <Router>
      <div className="flexbox">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tenant-dashboard" component={TenantDashboard} />
          <Route exact path="/landlord-dashboard" component={LandlordDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
