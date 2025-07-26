import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FireBaseProvider } from "./context/FireBaseContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboad from "./components/Dashboad.jsx";
import { LandingPage } from "./components/LandingPage.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FireBaseProvider>
        <App />
      </FireBaseProvider>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboad />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
