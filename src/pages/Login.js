import React, {useState} from 'react';
// import { Button } from 'antd';

export default function Login() {

  const [state , setState] = useState({
    email : "",
    password : "",
  })

  function handleChange (event) {
    const {id , value} = event.target
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`${state.email} - ${state.password}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-left">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group text-left">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
        />
        </div>
        <div className="form-check">
        </div>
        <button
            type="submit"
            className="btn btn-primary"
        >Iniciar sesión</button>
      </form>

    </div>
  )
}
