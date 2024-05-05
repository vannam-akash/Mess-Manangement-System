import React from "react";
import { UncontrolledAlert } from "reactstrap";

function DangerAlert({msg}) {
  return (
    <>
      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-support-16" />
        </span>
        <span className="alert-inner--text ml-1">{msg}</span>
      </UncontrolledAlert>
    </>
  );
}

export default DangerAlert;
