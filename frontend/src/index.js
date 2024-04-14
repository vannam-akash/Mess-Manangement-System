import React from "react";
import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import StudentProfile,{ studentProfileLoader} from "views/examples/StudentProfile";
import MessBill from "views/examples/MessBill";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/landing-page",
    element: <Landing />,
  },
  {
    path: "/student-profile",
    element: <StudentProfile />,
    loader: studentProfileLoader,
  },
  {
    path: "/login-page",
    element: <Login />,
  },
  {
    path: "/profile-page",
    element: <Profile />,
  },
  {
    path: "/register-page",
    element: <Register />,
  },
  {
    path: "/mess-bill",
    element: <MessBill />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
  </QueryClientProvider>
);
