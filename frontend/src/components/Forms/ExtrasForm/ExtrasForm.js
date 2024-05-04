import React, { useEffect, useState } from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
} from "reactstrap";
import styles from "./ExtrasForm.module.css";
import { Form, redirect, useActionData } from "react-router-dom";
import { checkStaffAuthLoader } from "auth";
import { addExtras } from "api/staff";

const ExtrasForm = () => {
  const data = useActionData();
  if(data) console.log(data);
  
  return (
    <>
      <div className={`${styles.title} text-center mb-4`}>
        <small>Details of Order:</small>
      </div>

      <Form method="POST">
        {/* Roll Number of Student */}
        <FormGroup className={styles.FormGroup}>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-address-card" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Roll Number"
              type="number"
              name="rollNo"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>

        {/* Dish Name ordered as Extra */}
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-phone" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Dish Name"
              type="text"
              name="dish"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>

        {/* Quantity ordered */}
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-address-card" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Quantity"
              type="number"
              name="quantity"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>

        {/* Price of ordered dish */}
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-address-card" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Price"
              type="number"
              name="price"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>

        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ExtrasForm;

export async function extrasAction({ request: req }) {
  checkStaffAuthLoader();
  const formData = await req.formData();
  const extrasData = Object.fromEntries(formData.entries());
  const added = await addExtras(extrasData);
  if(added) {
    return {
      success: true,
      message: "Successfully added extras."
    }
  }
  return {
    success: false,
    message: "Failed to add extras..."
  };
}
