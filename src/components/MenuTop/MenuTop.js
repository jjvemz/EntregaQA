import React from "react";
import { logout } from "../../api/auth";
import CatcakeLogo from "../../assets/layoutLogo.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  PoweroffOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/"}>
          <img
            className="menu-top__left-logo"
            src={CatcakeLogo}
            alt="CatCake Logo"
          />
        </Link>

        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <div style={{ fontSize: "20px" }}>
            {menuCollapsed ? <MenuOutlined /> : <MenuUnfoldOutlined />}
          </div>
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
          <div style={{ fontSize: "20px" }}>
            <PoweroffOutlined />
          </div>
        </Button>
      </div>
    </div>
  );
}
