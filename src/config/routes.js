// Layout
import Layout from "../layouts/Layout";

// Admin Pages

// Pages
import Factura from '../components/Factura/Factura'
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
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/factura",
        component: Factura,
        exact: true,
      },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
