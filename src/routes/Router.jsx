import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../layout/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
