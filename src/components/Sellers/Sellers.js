import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import { activateUserApi } from "../../api/user";
import { getAccessTokenApi } from "../../api/auth";
import {
  UserAddOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export default function Sellers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true);

  return (
    <div>
      <div>
        <div>
          <Switch
            defaultChecked
            onChange={() => setViewUsersActives(!viewUsersActives)}
          />
          <span>
            {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
          </span>
        </div>
      </div>
    </div>
  );
}
