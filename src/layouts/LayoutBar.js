import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/MenuTop/MenuTop";
import MenuSider from "../components/MenuSider/MenuSider";
import userAuth from "../hooks/useAuth";
import "./LayoutBar.scss";

export default function LayoutBar(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;
  const { auth } = userAuth();
  const { role } = auth; //revisa que sea vendedor o gerente

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        {role === "vendedor" ? (
          <Footer className="layout-admin__footer">CatCake</Footer>
        ) : (
          <Footer className="layout-admin__footer"> Gerente de CatCake</Footer>
        )}
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
