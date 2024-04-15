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
import styles from "./Login.module.css";

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
                    <div className="text-center mb-4">
                      <small>
                        {loginType === "staff" ? "Mess Staff" : "Student"}{" "}
                        credentials
                      </small>
                    </div>
                    <Form role="form">
                      {loginType === "staff" && (
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-phone" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              className={styles.input}
                              placeholder="Phone Number"
                              inputMode="numeric"
                            />
                          </InputGroup>
                        </FormGroup>
                      )}
                      {loginType === "student" && (
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fa fa-address-card" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Roll Number"
                              type="number"
                              className={styles.input}
                            />
                          </InputGroup>
                        </FormGroup>
                      )}
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                          Sign in
                        </Button>
                      </div>
                    </Form>
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
