import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Packages from "../Components/Packges/Packages";
import SignUp from "../Access/SignUp/SignUp";
import Login from "../Access/Login/Login";

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
    ],
  },
]);

export default router;
