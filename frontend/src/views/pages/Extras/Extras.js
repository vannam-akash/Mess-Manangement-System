import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Extras.module.css";
import { FormGroup, Input, Button, Container, Row, Col } from "reactstrap";
import { Form } from "react-router-dom";
import { addExtras } from "api/staff";

const Extras = () => {
  // You can use state hooks to manage state if needed (e.g., searchFocused).
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <>
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

        <section className="section pb-0 section-components">
          <Container className={`${styles.formBody} mb-5`}>
            <h3 className="h4 text-success text-white font-weight-bold mb-4">
              Extras Form
            </h3>
            <Form method="POST">
              <div className="rows">
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input
                        placeholder="Roll Number"
                        type="number"
                        name="rollNo"
                      />
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: searchFocused,
                      })}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input
                        placeholder="Dish ordered"
                        type="text"
                        name="dish"
                      />
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: searchFocused,
                      })}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input placeholder="Price" type="number" name="price" />
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: searchFocused,
                      })}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4" sm="6">
                    <FormGroup>
                      <Input
                        placeholder="Quantity ordered"
                        type="number"
                        name="quantity"
                      />
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: searchFocused,
                      })}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="4" sm="6">
                    <Button
                      className="btn-1"
                      color="white"
                      outline
                      type="button"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Extras;

export async function extrasActions({ request: req }) {
  const formData = await req.formData();
  const extrasData = Object.fromEntries(formData.entries());
  console.log(extrasData);
  // const added = await addExtras(extrasData);
  // if(!added) throw new Error("Failed to add extras! Please try again....");
}
