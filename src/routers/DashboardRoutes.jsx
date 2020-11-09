import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CreateFieldForm } from "../components/CreateFieldForm";
import { CreateEvent } from "../components/events/CreateEvent";
import { EditEvent } from "../components/events/EditEvent";
import { EventScreen } from "../components/events/EventScreen";

import { OneField } from "../components/field/OneField";
import { FieldsScreen } from "../components/FieldsScreen";
import { SidebarMenu } from "../components/SidebarMenu";

export const DashboardRoutes = () => {
  return (
    <>
      <SidebarMenu>
        <>
          <Switch>
            <Route exact path="/fields" component={FieldsScreen} />
            <Route exact path="/events" component={EditEvent} />
            <Route exact path="/field/:fieldId" component={OneField} />
            <Route exact path="/field/event/:eventId" component={EventScreen} />
            <Route
              exact
              path="/field/event/eventEdit/:eventId"
              component={EditEvent}
            />

            <Route exact path="/create_field" component={CreateFieldForm} />
            <Route
              exact
              path="/create_event/:fieldId"
              component={CreateEvent}
            />

            <Redirect to="/" />
          </Switch>
        </>
      </SidebarMenu>
    </>
  );
};
