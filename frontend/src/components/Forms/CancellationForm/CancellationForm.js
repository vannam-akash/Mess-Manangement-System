import React from "react";
import { FormGroup, Input, Button, Label, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import styles from "./CancellationForm.module.css";
import { Form } from "react-router-dom";
import Datepicker from "components/Inputs/DatePicker";

const CancellationForm = () => {
  return (
    <>
      <div className={`${styles.title} text-center mb-4`}>
        <small>Cancel Meal</small>
      </div>

      <Form method="POST">

        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-phone" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Date to Cancel"
              type="date"
              name="date"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <div className="mt-4 mb-2">
            <small className="text-uppercase font-weight-bold">
              Type of Meal
            </small>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio1"
              name="mealType"
              type="radio"
              value="Breakfast"
            />
            <Label className="custom-control-label" htmlFor="customRadio1">
              <span>Breakfast</span>
            </Label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio2"
              name="mealType"
              type="radio"
              value="Lunch"
            />
            <Label className="custom-control-label" htmlFor="customRadio2">
              <span>Lunch</span>
            </Label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <Input
              className="custom-control-input"
              id="customRadio3"
              name="mealType"
              type="radio"
              value="Dinner"
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
