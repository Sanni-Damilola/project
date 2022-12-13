import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../About/About";
import All from "../Homepage/All";
import Service from "../OurService/Service";
import Signin from "../SignIn/Signin";
import Signup from "../SignUp/Signup";

const Allroutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <All />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
        path : "/service",
        element: <Service />
    }
  ]);

  return element;
};

export default Allroutes;
