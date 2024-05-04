import React, { useState } from "react";
import classnames from "classnames";
import styles from "./Cancellation.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  FormGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Form } from "react-router-dom";
import { addExtras } from "api/staff";
import ExtrasForm from "components/ExtrasForm/ExtrasForm";
import CancellationForm from "components/CancellationForm/CancellationForm";

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
          <Container className={`${styles.container} pt-lg-7`}>
                <Card className={`${styles.card} bg-secondary shadow border-0`}>
                  {/* Cancellation Form from component */}
                  <CardBody className={`${styles.cardBody} px-lg-5 py-lg-5`}>
                    <CancellationForm />
                  </CardBody>
                </Card>
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