import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <label htmlFor="loginInput">Correo electronico:</label>
        <input id="loginInput" type="text"/>

        <label htmlFor="passwdInput">Contraseña:</label>
        <input id="passwdInput" type="password"/>
      </form>

    </div>
  )
}
