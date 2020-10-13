import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import { FileTextOutlined, RiseOutlined  } from '@ant-design/icons';
import './MenuSider.scss'

export default function MenuSider(props) {

  const { menuCollapsed } = props;
  const { Sider } = Layout;
  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1" style={{marginTop: 10}}>
          <Link to="/factura">
          <FileTextOutlined />
            <span className="nav-text">Facturas</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/gastos">
          <RiseOutlined />
            <span className="nav-text">Gastos</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
