import React from "react";
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

const Datepicker = () => {
  return (
    <>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-calendar-grid-58" />
            </InputGroupText>
          </InputGroupAddon>
          <ReactDatetime
            inputProps={{
              placeholder: "Date of Cancel",
            }}
            className={"nothing"}
            timeFormat={false}
          />
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default Datepicker;
