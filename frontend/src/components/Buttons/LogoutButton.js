import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { delAuth } from "auth";
import { Button } from "reactstrap";
import { UserTypeContext } from "components/UserTypeContext/UserTypeProvider";

function LogoutButton() {
  const { setUserType } = useContext(UserTypeContext);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    delAuth();
    setUserType(null);
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