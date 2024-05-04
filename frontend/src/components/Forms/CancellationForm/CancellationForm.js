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
import { Form } from "react-router-dom";
import Datepicker from "components/Inputs/DatePicker";
import { checkStudAuthLoader } from "auth";

const CancellationForm = () => {
  return (
    <>
      <div className={`${styles.title} text-center mb-4`}>
        <small>Cancel Meal</small>
      </div>

      <Form method="POST">
        {/* Roll Number of Student */}
        <FormGroup>
          <Datepicker />
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

export async function cancelActions({ request: req }) {
  checkStudAuthLoader();
  console.log("cancel form");
  const formData = await req.formData();
  const cancelData = Object.fromEntries(formData.entries());
  console.log(cancelData);
  return null;
}
