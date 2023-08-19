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
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/singlepackage/:id",
        element: <SinglePackage></SinglePackage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5005/packages/${params.id}`),
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
        loader: () => fetch("http://localhost:5005/reviews"),
      },
      {
        path: "/checkout/:id",
        element: <CheckOuts></CheckOuts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5005/packages/${params.id}`),
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
