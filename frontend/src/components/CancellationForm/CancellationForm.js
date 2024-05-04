import React from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Label,
} from "reactstrap";
import styles from "./CancellationForm.module.css";
import { Form, redirect } from "react-router-dom";

const CancellationForm = () => {
  return (
    <>
      <div className={`${styles.title} text-center mb-4`}>
        <small>Cancel a meal</small>
      </div>

      <Form method="POST">
        {/* Roll Number of Student */}
        <FormGroup>
          <Input className={styles.date} placeholder="Enter date" type="date" />
        </FormGroup>
        <FormGroup>
          <div className="mb-3">
            <small className="text-uppercase font-weight-bold">
              Type of Meal
            </small>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio1"
              name="custom-radio-1"
              type="radio"
            />
            <Label className="custom-control-label" htmlFor="customRadio1">
              <span>Breakfast</span>
            </Label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio2"
              name="custom-radio-1"
              type="radio"
            />
            <Label className="custom-control-label" htmlFor="customRadio2">
              <span>Lunch</span>
            </Label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio3"
              name="custom-radio-1"
              type="radio"
            />
            <Label className="custom-control-label" htmlFor="customRadio3">
              <span>Dinner</span>
            </Label>
          </div>
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

export default CancellationForm;
