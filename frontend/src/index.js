import React from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/pages/Login.js";
import Register from "views/examples/Register.js";
import StudentProfile, {
  studentProfileLoader,
} from "views/pages/StudentProfile";
import MessBill, { messBillLoader } from "views/pages/MessBill";
import Root from "views/layouts/Root";
import StaffProfile from "views/pages/StaffProfile";
import StudentLogin from "views/pages/StudentLogin";
import StaffLogin from "views/pages/StaffLogin";
import AssignStudents from "views/pages/AssignStudents";
import { studentLoginActions } from "components/Forms/StudentLoginForm";
import { staffLoginActions } from "components/Forms/StaffLoginForm";
import Cancellation from "views/pages/Cancellation";
import { staffProfileLoader } from "views/pages/StaffProfile";
import { checkAuthLoader } from "auth";
import { checkStudAuthLoader } from "auth";
import { checkStaffAuthLoader } from "auth";
import Extras from "views/pages/Extras";
import EnrolledStudents from "views/pages/EnrolledStudents";
import Error from "views/examples/Error";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    loader: checkAuthLoader,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "students",
        loader: checkStudAuthLoader,
        children: [
          {
            path: ":id",
            id: "student-profile",
            element: <StudentProfile />,
            loader: studentProfileLoader,
          },
        ],
      },
      {
        path: "students/login",
        element: <StudentLogin />,
        action: studentLoginActions,
      },
      {
        path: "staffs",
        loader: checkStaffAuthLoader,
        children: [
          {
            path: ":id",
            element: <StaffProfile />,
            loader: staffProfileLoader,
          },
        ],
      },
      {
        path: "staffs/login",
        element: <StaffLogin />,
        action: staffLoginActions,
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
        path: "register-page",
        element: <Register />,
      },
      {
        path: "/cancel-meal",
        element: <Cancellation />,
      },
      {
        path: "/assign-students",
        element: <AssignStudents />,
      },
      {
        path: "/enrolled-students",
        element: <EnrolledStudents />,
      },
      {
        path: "/extra-meal",
        element: <Extras />
      },

      {
        path: "staffProfile-page",
        element: <StaffProfile />,
      },
      {
        path: "/canceled-meal",
        element: <Cancellation />,
      },
      {
        path: "mess-bill",
        element: <MessBill />,
        loader: messBillLoader,
      },
      // {
      //   path: "error",
      //   element: <Error/>,
      // }
    ]
  },
]);

const AuthStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider store={AuthStore}>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
);
