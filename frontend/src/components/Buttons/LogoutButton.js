import { Form, redirect } from "react-router-dom";
import { delAuth } from "auth";
import { Button } from "reactstrap";
import {toast} from "sonner";


function LogoutButton() {
  return (
    <>
    <Form method="POST" action="/logout">
      <Button className="btn-1 btn-neutral ml-1" type="submit">
        SIGN OUT
      </Button>
      </Form>
    </>
  );
}

export default LogoutButton;

export async function logoutActions() {
  delAuth();
  toast.success("Successfully logged out!");
  return redirect("/");
}
