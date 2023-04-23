import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home-page";
import MyEditPage from "../pages/my-edit-page";
import TargetEditPage from "../pages/target-edit-page";
import TestPage from "../pages/test-page";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/edit/my",
    element: <MyEditPage />,
  },
  {
    path: "/edit/target",
    element: <TargetEditPage />,
  },
  {
    path: "/test",
    element: <TestPage />
  }
]);

export default routes;