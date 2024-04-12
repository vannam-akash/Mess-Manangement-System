import React, { useState } from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const SignInTabs = () => {
  const [activeTab, setActiveTab] = useState("manager");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <h3 className="h4 text-success font-weight-bold mb-4">Sign In</h3>
      <Row className="justify-content-center">
        <Col lg="6">
          {/* Tabs */}
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">Sign In As</small>
          </div>
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="signin-tabs"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={activeTab === "manager"}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: activeTab === "manager",
                  })}
                  onClick={() => toggleTab("manager")}
                  href="#"
                  role="tab"
                >
                  Manager
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={activeTab === "student"}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: activeTab === "student",
                  })}
                  onClick={() => toggleTab("student")}
                  href="#"
                  role="tab"
                >
                  Student
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* Sign-in Form */}
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="manager">
                  <Form>
                    <FormGroup>
                      <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <Button color="primary" block>
                      Sign In as Manager
                    </Button>
                  </Form>
                </TabPane>
                <TabPane tabId="student">
                  <Form>
                    <FormGroup>
                      <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <Button color="primary" block>
                      Sign In as Student
                    </Button>
                  </Form>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SignInTabs;
