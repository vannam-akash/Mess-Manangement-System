import React, { useRef, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import StaffLoginForm from "components/Forms/StaffLoginForm/StaffLoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const mainRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

  function handleStudentClick() {
    navigate("/students/login");
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
                      <Button className={"btn-1"} color={"primary"} disabled>
                        <span className="btn-inner--text">Mess Staff</span>
                      </Button>
                      <Button
                        className="btn-1 btn-neutral ml-1"
                        color="default"
                        type="button"
                        onClick={handleStudentClick}
                      >
                        Student
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <StaffLoginForm />
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


