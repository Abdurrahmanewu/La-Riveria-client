import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Packages from "../Components/Packges/Packages";
import SignUp from "../Access/SignUp/SignUp";
import Login from "../Access/Login/Login";
import SinglePackage from "../Components/SinglePackage/SinglePackage";
import MyReviews from "../Components/MyReviews/MyReviews";
import CheckOuts from "../Components/CheckOut/CheckOuts";
import Orders from "../Components/Orders/Orders";
import Blog from "../Components/Blog/Blog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packges",
        element: <Packages></Packages>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singlepackage/:id",
        element: <SinglePackage></SinglePackage>,
        loader: ({ params }) =>
          fetch(`https://la-riveria-server.vercel.app/packages/${params.id}`),
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOuts></CheckOuts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://la-riveria-server.vercel.app/packages/${params.id}`),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default router;
