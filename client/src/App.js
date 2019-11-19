import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import TenantDashboard from "./pages/TenantDash";
import LandlordDashboard from "./pages/LandlordDash";
import LandlordRegistration from "./pages/LRegForm";
import TenantRegistration from "./pages/TRegForm"

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
          <Route exact path="/landlord-registration" component={LandlordRegistration} />
          <Route exact path="/tenant-registration" component={TenantRegistration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
