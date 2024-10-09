import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Blog, Company, Home, Login, Pricing, Product } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
]);
