import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <SidebarMenu /> */}

        <Switch>
          {/* <Route path="/eventos">
            <EventScreen />
          </Route> */}

          <Route path="/">
            <DashboardRoutes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
