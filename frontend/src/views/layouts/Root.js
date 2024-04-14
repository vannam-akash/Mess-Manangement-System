import React from "react";
import MainNavbar from "components/Navbars/MainNavbar";
import MainFooter from "components/Footers/MainFooter";

import { Outlet } from "react-router-dom";

function Root() {
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
