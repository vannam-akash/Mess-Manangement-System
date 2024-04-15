import React from "react";
import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/pages/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import StudentProfile,{ studentProfileLoader} from "views/pages/StudentProfile";
import MessBill,{ messBillLoader } from "views/pages/MessBill";
import Root from "views/layouts/Root";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index: true,
        element: <Index/>
      },
      {
        path: "students",
        children:[
          {
            path: ":id",
            id: "student-profile",
            element: <StudentProfile />,
            loader: studentProfileLoader,
          },
        ]
      },
      {
        path: "login-page",
        element: <Login />,
      },
      {
        path: "landing-page",
        element: <Landing />,
      },
      {
        path: "profile-page",
        element: <Profile />,
      },
      {
        path: "register-page",
        element: <Register />,
      },
      {
        path: "mess-bill",
        element: <MessBill />,
        loader: messBillLoader
      },
    ]
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
