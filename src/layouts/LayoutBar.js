import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import MenuTop from '../components/MenuTop/MenuTop'

import "./LayoutBar.scss";

export default function LayoutBar(props) {

  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout className="layout-admin">
        <Header>
          <MenuTop/>
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>

        <Footer>footer</Footer>
      </Layout>
    </Layout>
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
