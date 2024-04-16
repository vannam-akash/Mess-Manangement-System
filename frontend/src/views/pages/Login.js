import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import StudentLoginForm from "components/Forms/StudentLoginForm";
import StaffLoginForm from "components/Forms/StaffLoginForm";


const Login = () => {
  const mainRef = useRef();
  const [loginType, setLoginType] = useState("staff"); // Default to Manager login

  const handleLoginType = (type) => {
    setLoginType(type);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);

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
                        className={
                          loginType === "staff" ? "btn-1" : "btn-neutral"
                        }
                        color={loginType === "staff" ? "primary" : "default"}
                        href="#pablo"
                        onClick={() => handleLoginType("staff")}
                      >
                        <span className="btn-inner--text">Mess Staff</span>
                      </Button>
                      <Button
                        color={loginType === "student" ? "primary" : "default"}
                        className={
                          loginType === "student" ? "bnt-1" : "btn-neutral"
                        }
                        href="#pablo"
                        onClick={() => handleLoginType("student")}
                      >
                        <span className="btn-inner--text">Student</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    {loginType === "student"? <StudentLoginForm/>: <StaffLoginForm/>}
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