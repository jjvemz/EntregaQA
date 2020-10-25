// Layout
import LayoutBar from "../layouts/LayoutBar";

// Pages

import Factura from "../components/Factura/Factura";

import UserProfile from "../components/UserProfile/UserProfile";
import Sellers from "../components/Sellers/Sellers";
import Expenses from "../components/Expenses/Expenses";
// import RegisterForm from '../components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';

// Other
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    component: LayoutBar,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/factura",
        component: Factura,
        exact: true,
      },
      {
        path: "/perfil",
        component: UserProfile,
        exact: true,
      },

      { path: "/gastos", component: Expenses, exact: true },

      {
        component: Error404,
      },
    ],
  },
];

//sistema de rutas del gerente
const managerRoutes = [
  {
    path: "/",
    component: LayoutBar,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/factura",
        component: Factura,
        exact: true,
      },
      {
        path: "/perfil",
        component: UserProfile,
        exact: true,
      },

      { path: "/gastos", component: Expenses, exact: true },
      { path: "/vendedores", component: Sellers, exact: true },

      {
        component: Error404,
      },
    ],
  },
];

export { routes, managerRoutes };

/*
sistema de rutas
 const routes = [
       {
         path: "/factura",
         component: Factura,
         exact: true,
       },
       {
         component: Error404,
       },
 ]; */
