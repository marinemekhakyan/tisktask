import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import TenantDashboard from "./pages/TenantDash";
import LandlordDashboard from "./pages/LandlordDash";
import LandlordRegistration from "./pages/LRegForm";
import TenantRegistration from "./pages/TRegForm";
import NewProperty from "./pages/NewProperty";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import { PrivateLandlordRoute } from "./utils/PrivateLandlordRoute";
import { PrivateTenantRoute } from "./utils/PrivateTenantRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flexbox">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateTenantRoute
            exact
            path="/tenant-dashboard"
            component={TenantDashboard}
          />
          <PrivateLandlordRoute
            exact
            path="/landlord-dashboard"
            component={LandlordDashboard}
          />
          <Route
            exact
            path="/landlord-registration"
            component={LandlordRegistration}
          />
          <PrivateLandlordRoute
            exact
            path="/tenant-registration"
            component={TenantRegistration}
          />
          <PrivateLandlordRoute
            exact
            path="/add-new-property"
            component={NewProperty}
          />
          <PrivateLandlordRoute
            exact
            path="/my-properties"
            component={Properties}
          />
          <PrivateLandlordRoute
            exact
            path="/tenants-list"
            component={Tenants}
          />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
