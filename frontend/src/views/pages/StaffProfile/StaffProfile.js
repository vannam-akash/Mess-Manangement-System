import React, {  useEffect, useRef } from "react";

// reactstrap components
import { Card, Container } from "reactstrap";

// core components
import { fetchStaffDetails } from "api/staff";
import { useLoaderData } from "react-router-dom";
import StaffList from "../../../components/Tables/StaffList/StaffList.js"

function StaffProfile() {
  const mainRef = useRef();
  const staff = useLoaderData();

  useEffect(()=>{
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  });

  return (
    <>
      <main className="profile-page" ref={mainRef}>
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4 mb-5">
                <div className="card-profile-image mb-5">
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/staff/mess-staff.jpg")}
                  />
                </div>
              </div>
              <div id="card-content" className="mb-5">
              <div className="text-center mt-5">
                <h3>
                  {staff.fullName}
                </h3>
                <div className="h6 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  Role - {staff.isManager? "Manager":"Staff"}
                </div>
                <div className="h6 mt-4">
                  <i className="ni business_briefcase-24 mr-2" />
                  Phone Number - {staff.phoneNo}
                </div>
                {/* <div>
                  <i className="ni education_hat mr-2" />
                  Email ID - {student.email}
                </div> */}
                <div>
                  <h4 className="mt-5">Staff List</h4>
                </div>
              </div>
              <StaffList></StaffList>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
}

export default StaffProfile;

export async function staffProfileLoader({request:req, params}) {
  const {id} = params;
  const staff = await fetchStaffDetails(id);
  return staff;
}