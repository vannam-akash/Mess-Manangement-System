import React from "react";
import { UncontrolledAlert } from "reactstrap";

function SuccesAlert({ msg }) {
  return (
    <>
      <UncontrolledAlert color="success" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>
        <span className="alert-inner--text ml-1">{msg}</span>
      </UncontrolledAlert>
    </>
  );
}

export default SuccesAlert;
