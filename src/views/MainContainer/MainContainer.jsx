import React from "react";
import { Route, Routes } from "react-router-dom";
import { userRoutes } from "@/routes";
import Layout from "../layout/Layout";

function MainContainer() {
  return (
    <Layout>
      <Routes>
        {userRoutes.map((route) =>
          route.component ? (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ) : (
            route.redirectRoute && (
              <Route
                key={route.name}
                path={route.path}
                element={<Navigate to={route.redirectRoute} />}
              />
            )
          )
        )}
        
      </Routes>
    </Layout>
  );
}

export default MainContainer;
