import { createBrowserRouter } from "react-router-dom";
import { LandingPage, FeaturesDemoPage } from "../apps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/demo",
    element: <FeaturesDemoPage />,
  },
]);
