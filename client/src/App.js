import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import TenantDashboard from "./pages/TenantDash";
import LandlordDashboard from "./pages/LandlordDash";
import LandlordRegistration from "./pages/LRegForm";
import TenantRegistration from "./pages/TRegForm";
import TenantPasswordReset from "./pages/TPasswordReset";
import NewProperty from "./pages/NewProperty";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import TiskTasks from "./pages/TiskTasks";
import MyRequests from "./pages/MyRequests";
import NewRequest from "./pages/NewRequest";
import About from "./pages/About";

// import Secure from "./pages/Secure";
// import { PrivateRoute } from "./pages/PrivateRoute";
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
          <Route exact path="/tenant-dashboard" component={TenantDashboard} />
          <Route
            exact
            path="/landlord-dashboard"
            component={LandlordDashboard}
          />
          <Route
            exact
            path="/landlord-registration"
            component={LandlordRegistration}
          />
          <Route
            exact
            path="/tenant-registration"
            component={TenantRegistration}
          />
          <Route
            exact
            path="/tenant-password-reset"
            component={TenantPasswordReset}
          />
          <Route exact path="/add-new-property" component={NewProperty} />
          <Route exact path="/my-properties" component={Properties} />
          <Route exact path="/tenants-list" component={Tenants} />
          <Route exact path="/tisktasks" component={TiskTasks} />
          <Route exact path="/my-requests" component={MyRequests} />
          <Route exact path="/new-request" component={NewRequest} />
          <Route exact path="/about-tisktask" component={About} />
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
          {/* <PrivateLandlordRoute
            exact
            path="/tenant-registration"
            component={TenantRegistration}
          /> */}
          <Route
            exact
            path="/tenant-registration"
            component={TenantRegistration}
          />
          {/* <PrivateLandlordRoute
            exact
            path="/add-new-property"
            component={NewProperty}
          /> */}
          <Route exact path="/add-new-property" component={NewProperty} />
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
