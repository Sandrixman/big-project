import { RouteProps } from "react-router-dom";
import { lazy } from "react";

const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));
const MainPage = lazy(() => import("pages/MainPage/MainPage"));

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: "/about",
    element: <AboutPage />,
  },
};
