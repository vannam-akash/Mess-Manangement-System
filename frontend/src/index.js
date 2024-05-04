import React from "react";
import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Register from "views/examples/Register.js";
import StudentProfile, {
  studentProfileLoader,
} from "views/pages/StudentProfile/StudentProfile";
import MessBill, { messBillLoader } from "views/pages/MessBill/MessBill";
import Root from "views/layouts/Root";
import StaffProfile from "views/pages/StaffProfile/StaffProfile";
import StudentLogin from "views/pages/StudentLogin/StudentLogin";
import StaffLogin from "views/pages/StaffLogin/StaffLogin";
import AssignStudents, {
  assignStudLoader,
} from "views/pages/AssignStudents/AssignStudents";
import { studentLoginActions } from "components/Forms/StudentLoginForm";
import { staffLoginActions } from "components/Forms/StaffLoginForm";
import Cancellation from "views/pages/Cancellation/Cancellation";
import { staffProfileLoader } from "views/pages/StaffProfile/StaffProfile";
import { checkAuthLoader } from "auth";
import { checkStudAuthLoader } from "auth";
import { checkStaffAuthLoader } from "auth";
import Extras from "views/pages/Extras/Extras";
import EnrolledStudents, {
  enrolledStudsLoader,
} from "views/pages/EnrolledStudents/EnrolledStudents";
import Error from "views/pages/Error/Error";
import ExtrasBill from "views/pages/ExtrasBill/ExtrasBill";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    loader: checkAuthLoader,
    errorElement: <Error />,
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
        path: "/cancel-meal",
        element: <Cancellation />,
      },
      {
        path: "/assign-students",
        element: <AssignStudents />,
        loader: assignStudLoader,
      },
      {
        path: "/extra-meal",
        element: <Extras />,
      },
      {
        path: "/enrolled-students",
        element: <EnrolledStudents />,
        loader: enrolledStudsLoader,
      },
      {
        path: "/extra-bill",
        element: <ExtrasBill />,
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
        // loader: messBillLoader,
      },
      {
        path: "landing-page",
        element: <Landing />,
      },
      {
        path: "register-page",
        element: <Register />,
      },
    ],
  },
]);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
