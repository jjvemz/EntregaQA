import React from 'react'
import userAuth from "../../hooks/useAuth";

export default function UserProfile() {
  const { auth } = userAuth();
  const {name, lastname, rut, email} = auth
  console.log(auth)
  return (
    <div>
      <div>Nombre: {name} {lastname}</div>
      <div>Rut: {rut}</div>
      <div>Correo electronico: {email}</div>
    </div>
  )
}
