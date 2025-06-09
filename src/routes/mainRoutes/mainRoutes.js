import React from "react";

export const userRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: React.lazy(() => import("../../views/user/Home/Home")),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    component: React.lazy(() => import("../../views/user/Dashboard/Dashboard")),
  },
];
