// Layout

import Layout from "../layouts/Layout";

// Admin Pages

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
        path: "/",
        component: Home,
        exact: true,
      },

      {
        component: Error404,
      },
    ],
  },
];

export default routes;
