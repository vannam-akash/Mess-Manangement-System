import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const studentId = process.env.REACT_APP_STUDENTID;

const MainNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate("/login-page");
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
                src={require("assets/img/brand/argon-react-white.png")}
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
                        src={require("assets/img/brand/argon-react.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar_global"
                      onClick={toggleCollapse}
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Examples</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/" tag={Link}>
                      Landing
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      Profile
                    </DropdownItem>
                    <DropdownItem to="/login-page" tag={Link}>
                      Login
                    </DropdownItem>
                    <DropdownItem to="/register-page" tag={Link}>
                      Register
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem className="text-white">
                  <NavLink to="/mess-bill" tag={Link} className="text-white">
                    Mess Bill
                  </NavLink>
                </NavItem>
                <NavItem className="text-white">
                  <NavLink to="/staffProfile-page" tag={Link} className="text-white mr-2">
                    Staff Profile
                  </NavLink>
                </NavItem>
                <NavItem className="text-white">
                  <NavLink to="/canceled-meal" tag={Link} className="text-white">
                    Cancel a Meal
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav
                className="navbar-nav-hover align-items-lg-center ml-lg-auto"
                navbar
              >
                <Button
                  className="btn-1 btn-neutral ml-1"
                  type="button"
                  onClick={handleAuthClick}
                >
                  <i className="fa fa-sign-in" />
                  <span />
                  SIGN IN
                </Button>
                <NavItem>
                  <NavLink
                    to={`/students/${studentId}`}
                    className="text-white ml-4"
                    color="link"
                  >
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default MainNavbar;
