import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import StudentLoginForm from "components/Forms/StudentLoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const mainRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  function handleStaffClick() {
    navigate("/staffs/login");
  }
  
  return (
    <>
      <main ref={mainRef}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-primary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-center mb-3">
                      <small>Sign in as</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <Button
                        className={"btn-neutral"}
                        color={"default"}
                        onClick={handleStaffClick}
                      >
                        <span className="btn-inner--text">Mess Staff</span>
                      </Button>
                      <Button
                        className={"bnt-1"}
                        color={"primary"}
                        disabled
                      >
                        <span className="btn-inner--text">Student</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <StudentLoginForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Login;
