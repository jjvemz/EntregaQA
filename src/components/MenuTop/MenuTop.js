import React from 'react';
import { logout } from "../../api/auth";
import CatcakeLogo from "../../assets/layoutLogo.png"
import { Button } from "antd";
import { PoweroffOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import "./MenuTop.scss"

export default function MenuTop(props) {

  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={CatcakeLogo}
          alt="CatCake Logo"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ?  <MenuOutlined /> : <MenuUnfoldOutlined/>}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
        <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
