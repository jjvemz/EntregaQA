import React, {useState, useEffect, useMemo } from "react";
import { ToastContainer } from "react-toastify";
import Auth from "./pages/Auth/Auth";
import Navigation from "./config/Navigation";
import { getAccessTokenApi, decodeToken } from "./api/auth";
import AuthContext from "./context/AuthContext";
import "./App.scss";

function App() {

  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getAccessTokenApi()
    if(!token) {
      setAuth(null);
    } else {
      setAuth(decodeToken(token))
    }
  }, [])

  const logout = () => {
    console.log("Cerrar sesion");
  };

  const setUser = (user) => {
    setAuth(user)
  };

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser
    }),
    [auth]
  );

  if (auth === undefined) return null;

  console.log(authData);

  return (
    <>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </>

  );
}

export default App;
