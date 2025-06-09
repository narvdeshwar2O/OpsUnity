import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { userRoutes } from "./routes"
import Layout from "./views/layout/Layout"

function App() {
  return (
   <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Child routes will be rendered in Layout's <Outlet /> */}
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
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default App