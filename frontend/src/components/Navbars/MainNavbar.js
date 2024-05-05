import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import LogoutButton from "components/Buttons/LogoutButton";
import { getId, getUserType } from "auth";
import styles from "./MainNavbar.module.css";


const MainNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const navigate = useNavigate();
  const id = getId();
  const userType = useRouteLoaderData("root");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleAuthClick = () => {
    navigate("/students/login");
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/logos/logo_gola_only.png")}
                style={{ height: "70px" }}
              />
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbar_global"
              onClick={toggleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/logos/Logo rounded white.png")}
                        style={{ height: "70px" }}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              {userType && (
                <>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center"
                    navbar
                  >
                    {userType === "staff" && (
                      <>
                        <NavItem>
                          <NavLink
                            to="/enrolled-students"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none mr-2" />
                            <span className="nav-link-inner--text">
                              Enrolled Students
                            </span>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            to="/extra-meal"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none mr-2" />
                            <span className="nav-link-inner--text">
                              Extras form
                            </span>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            to="/assign-students"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none mr-2" />
                            <span className="nav-link-inner--text">
                              Assign Students
                            </span>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                    {userType === "stud" && (
                      <>
                        <NavItem>
                          <NavLink
                            to="/cancel-meal"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none" />
                            <span className="nav-link-inner--text">
                              Cancel Meal
                            </span>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            to="/extra-bill"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none" />
                            <span className="nav-link-inner--text">
                              Extras Bill
                            </span>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            to="/mess-bill"
                            tag={Link}
                            className="nav-link"
                          >
                            <i className="fa fa-hand-o-right d-lg-none" />
                            <span className="nav-link-inner--text">
                              Mess Bill
                            </span>
                          </NavLink>
                        </NavItem>
                      </>
                    )}
                  </Nav>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                    navbar
                  >
                    <LogoutButton />
                    <NavItem>
                      <NavLink
                        id="stud"
                        to={`/${
                          userType === "stud" ? "students" : "staffs"
                        }/${id}`}
                        className="ml-4"
                        color="default"
                      >
                        <i
                          className="fa fa-user fa-2x mt-2"
                          aria-hidden="true"
                        ></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </>
              )}
              {!userType && (
                <>
                  <Nav
                    className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                    navbar
                  >
                    <Button
                      className="btn-1 btn-neutral ml-2"
                      type="button"
                      onClick={handleAuthClick}
                    >
                      <i className="fa fa-hand-o-right d-sm-none" />
                      <span />
                      SIGN IN
                    </Button>
                  </Nav>
                </>
              )}
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default MainNavbar;
