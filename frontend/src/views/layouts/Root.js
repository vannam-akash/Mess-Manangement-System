import React, { useEffect } from "react";
import MainNavbar from "components/Navbars/MainNavbar";
import MainFooter from "components/Footers/MainFooter";

import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

function Root() {
  useEffect(() => {
    toast.info("Welcome to the Mess Management System of IIT (BHU) Varansi!")
  })
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <MainFooter/>
    </>
  );
}

export default Root;
