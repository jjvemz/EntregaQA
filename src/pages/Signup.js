import React, {useState} from 'react';

export default function Signup() {

  const [state, setState] = useState({
    email : "",
    password : "",
    confirmPassword: "",
  });

  function handleChange (event) {
    const {id , value} = event.target
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(state.password === state.confirmPassword) {
        console.log(`Datos a enviar: email: ${state.email} clave: ${state.password} re_clave: ${state.confirmPassword}`);
    } else {
        console.log('Passwords do not match');
    }
}

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form onSubmit={handleSubmit}>
          <div className="form-group text-left">
          <label htmlFor="email">Correo electronico</label>
          <input type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese email"
                value={state.email}
                onChange={handleChange}
          />

          </div>
          <div className="form-group text-left">
              <label htmlFor="password">Contraseña</label>
              <input type="password"
                  className="form-control"
                  id="password"
                  placeholder="Contraseña"
                  value={state.password}
                  onChange={handleChange}
              />
          </div>
          <div className="form-group text-left">
              <label htmlFor="confirmPassword">Confirme Contraseña</label>
              <input type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirme Contraseña"
                  value={state.confirmPassword}
                  onChange={handleChange}
              />
          </div>
          <button
              type="submit"
              className="btn btn-primary"
          >
              Registrarse
          </button>
      </form>
    </div>
  )
}