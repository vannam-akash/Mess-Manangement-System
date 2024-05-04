import React from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
} from "reactstrap";
import styles from "./ExtrasForm.module.css";
import { Form, redirect } from "react-router-dom";

const ExtrasForm = () => {
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
              // value={formData.rollNo}
              // onChange={handleChange}
            />
          </InputGroup>
          {/* {errors.rollNo && <div className="text-danger">{errors.rollNo}</div>} */}
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
              name="dishName"
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
              name="qty"
              className={styles.input}
              // value={formData.rollNo}
              // onChange={handleChange}
            />
          </InputGroup>
          {/* {errors.rollNo && <div className="text-danger">{errors.rollNo}</div>} */}
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
              // value={formData.rollNo}
              // onChange={handleChange}
            />
          </InputGroup>
          {/* {errors.rollNo && <div className="text-danger">{errors.rollNo}</div>} */}
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