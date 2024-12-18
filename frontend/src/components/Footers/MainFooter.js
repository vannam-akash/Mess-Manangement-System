/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


function MainFooter() {
  return (
    <>
      <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-heavy mb-2">
                Mess Management Portal.
              </h3>
              <h5 className=" mb-0 font-weight-light">
                Simplify meal management at IIT BHU with ease.
              </h5>
              <h5 className=" mb-0 font-weight-light">IIT BHU <br></br> Varanasi, India</h5>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://twitter.com/"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1 "
                color="facebook"
                href="https://www.facebook.com/"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like us
              </UncontrolledTooltip>
              {/* <Button
                className="btn-icon-only rounded-circle ml-1"
                color="dribbble"
                href="#"
                id="tooltip829810202"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-dribbble" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow us
              </UncontrolledTooltip> */}
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/vannam-akash/ugp_project"
                id="tooltip495507257"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/vannam-akash/ugp_project"
                  target="_blank"
                >
                  UGP Team
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://iitbhu.ac.in/"
                    target="_blank"
                  >
                    IIT BHU, Varanasi
                  </NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default MainFooter;
