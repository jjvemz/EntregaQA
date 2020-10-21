import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, managerRoutes } from "./routes";

import userAuth from "../hooks/useAuth";

export default function Navigation() {
  const { auth } = userAuth();
  const { role } = auth; //revisa que sea vendedor o gerente
  return (
    <Router>
      <Switch>
        {role === "vendedor"
          ? routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          : managerRoutes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
      // render={(props) => {
      //   <route.layout>
      //     <route.component routes={route.routes} {...props} />
      //   </route.layout>
      // }}
    />
  );
}
