import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default () => useContext(AuthContext); //hook que permite acceder desde cualquier parte de la aplicacion el valor de nuestro contexto