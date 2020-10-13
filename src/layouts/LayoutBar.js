import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import MenuTop from '../components/MenuTop/MenuTop'
import MenuSider from '../components/MenuSider/MenuSider'

import "./LayoutBar.scss";

export default function LayoutBar(props) {

  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
        <Header>
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">CatCake</Footer>
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
