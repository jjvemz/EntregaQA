import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
//import MenuTop from "../components/Web/MenuTop";
//import Footer from "../components/Web/Footer";

import "./Layout.scss";

export default function Layout(props) {

  const { routes } = props;
  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h3>menu</h3>
        </Col>
        <Col lg={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <h3>footer</h3>
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
