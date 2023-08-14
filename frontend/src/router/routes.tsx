import React from "react";
import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home-page";
import EditPage from "../pages/edit-page";
import TargetEditPage from "../pages/target-edit-page";
import StrategyPage from "../pages/strategy-page";
import TalkAnalysisPage from "../pages/talk-analysis-page";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/edit",
    element: <EditPage/>,
  },
  {
    path: "/edit/target",
    element: <TargetEditPage/>,
  },
  {
    path: "/strategy",
    element: <StrategyPage/>
  },
  {
    path: "/kakaotalk",
    element: <TalkAnalysisPage/>
  }
]);

export default routes;