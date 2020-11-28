import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import userAuth from "../../hooks/useAuth";
import {
  UserOutlined,
  FileTextOutlined,
  RiseOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const { auth } = userAuth();
  const { role } = auth; //revisa que sea vendedor o gerente

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" style={{ marginTop: 10 }}>
          <Link to="/perfil">
            <UserOutlined />
            <span className="nav-text">Mi Perfil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ marginTop: 10 }}>
          <Link to="/factura">
            <FileTextOutlined />
            <span className="nav-text">Facturas</span>
          </Link>
        </Menu.Item>
        {role === "vendedor" ? (
          <></>
        ) : (
          <>
            <Menu.Item key="3">
              <Link to="/gastos">
                <RiseOutlined />
                <span className="nav-text">Gastos</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/vendedores">
                <UserAddOutlined />
                <span className="nav-text">Vendedores</span>
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Sider>
  );
}
