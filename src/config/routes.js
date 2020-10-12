// Layout

import Layout from "../layouts/Layout";

// Admin Pages
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import RegisterForm from '../components/RegisterForm/RegisterForm';

// Pages
import Home from "../pages/Home";

// Other
import Error404 from "../pages/Error404";

//sistema de rutas
const routes = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/home",
        component: Home,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/registro",
        component: Signup,
        exact: true,
      },
      {
        path: "/signup",
        component: RegisterForm,
        exact: true,
      },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
