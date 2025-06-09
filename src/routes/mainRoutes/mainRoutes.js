import React from "react";

export const userRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    component: React.lazy(() => import("../../views/user/Dashboard/Dashboard")),
  }
]

