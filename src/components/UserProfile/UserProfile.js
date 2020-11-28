import React from "react";
import userAuth from "../../hooks/useAuth";
import { Card } from "antd";

export default function UserProfile() {
  const { auth } = userAuth();
  const { name, lastname, rut, email, role } = auth;
  console.log(auth);
  return (
    <Card title="Perfil" style={{ width: 300 }}>
      <p>
        Nombre: {name} {lastname}
      </p>
      <p>Rut: {rut}</p>
      <p>Correo electronico: {email}</p>
      <p>cargo: {role}</p>
    </Card>
  );
}
