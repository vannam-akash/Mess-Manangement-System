import React from "react";
import { useNavigate } from "react-router-dom";
import { delAuth } from "auth";
import { Button } from "reactstrap";

function LogoutButton() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    delAuth();
    window.location.reload();
    navigate("/");
  }
  return (
    <>
      <Button
        className="btn-1 btn-neutral ml-1"
        type="submit"
        onClick={handleSubmit}
      >
        SIGN OUT
      </Button>
    </>
  );
}

export default LogoutButton;