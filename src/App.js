import React, {useState} from "react";
import { ToastContainer } from "react-toastify";
import Auth from "./pages/Auth/Auth"
import Navigation from "./config/Navigation"
import "./App.scss";

function App() {

  const [auth, setAuth] = useState(undefined);

  return (
    <>
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
    </>

  );
}

export default App;
