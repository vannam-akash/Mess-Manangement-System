import React from "react";
import { useNavigate, redirect } from "react-router-dom";
import { delAuth } from "auth";
import { Form, Button } from "reactstrap";

function LogoutButton() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    delAuth();
    redirect("/");
  }
  return (
    <>
      <Form>
        <Button
          className="btn-1 btn-neutral ml-1"
          type="submit"
          onClick={handleSubmit}
        >
          SIGN OUT
        </Button>
      </Form>
    </>
  );
}

export default LogoutButton;
