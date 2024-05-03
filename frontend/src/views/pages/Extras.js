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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import styles from "./Extras.module.css";
// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

class Extras extends React.Component {
  state = {};
  handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  render() {
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
          {/* <div className={styles.formBody}> */}
          <Container className={`${styles.formBody} mb-5`}>
            {/* Inputs */}
            <h3 className="h4 text-success text-white font-weight-bold mb-4">
              Extras Form
            </h3>
            <div className="rows">
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input placeholder="Student Id" type="number" />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchFocused,
                    })}
                  ></FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input placeholder="Dish ordered" type="text" />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchFocused,
                    })}
                  ></FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input placeholder="Price" type="number" />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchFocused,
                    })}
                  ></FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="4" sm="6">
                  <FormGroup>
                    <Input placeholder="Quantity ordered" type="number" />
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.searchFocused,
                    })}
                  ></FormGroup>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg="4" sm="6">
                  <Button
                    className="btn-1 text-success"
                    // color="success"
                    outline
                    type="submit"
                   
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
          {/* </div> */}
        </section>
        </section>
      </>
    );
  }
}

export default Extras;
