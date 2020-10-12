// Layout
import Layout from "../layouts/Layout";

// Admin Pages

// Pages
import Home from "../pages/Home";
import Auth from '../pages/Auth/Auth';
// import RegisterForm from '../components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';

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
        path: "/auth",
        component: Auth,
        exact: true,
      },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
