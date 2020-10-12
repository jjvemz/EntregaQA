import React, {useState} from 'react'
// import { Image } from 'antd';
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import catcakelogo from "../../assets/logo.png"
import "./Auth.scss"

export default function Auth() {

  const [showLogin, setShowLogin] = useState(false);

  return (

    <div className="auth">
      <img src={catcakelogo} alt="Logo de Catcake"></img>
      <div className="container-form">
        {showLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm setShowLogin={setShowLogin}/>
        )}
      </div>
      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
            </>
          ) : (
            <>
              ¡Entra con tu cuenta!
              <span onClick={() => setShowLogin(!showLogin)}>
                Iniciar sesión
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
