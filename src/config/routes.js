// Layout
import LayoutBar from "../layouts/LayoutBar";
import LayoutManager from "../layouts/LayoutManager";

// manager Pages
import ManagerHome from "../pages/Manager";
// Pages

import Factura from "../components/Factura/Factura";
import UserProfile from "../components/UserProfile/UserProfile";
import Sellers from "../components/Sellers/Sellers";
import Expenses from "../components/Expenses/Expenses";
// import RegisterForm from '../components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';

// Other
import Error404 from "../pages/Error404";

//sistema de rutas
// const routes = [
//       {
//         path: "/factura",
//         component: Factura,
//         exact: true,
//       },
//       {
//         component: Error404,
//       },
// ];

const routes = [
  {
    path: "/gerente",
    component: LayoutManager,
    exact: false,
    routes: [
      {
        path: "/gerente",
        component: ManagerHome,
        exact: true,
      },

      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBar,
    exact: false,
    routes: [
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
      {
        path: "/vendedores",
        component: Sellers,
        exact: true,
      },
      { path: "/gastos", component: Expenses, exact: true },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
