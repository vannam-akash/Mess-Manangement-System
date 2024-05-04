import React from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
} from "reactstrap";
import styles from "../Login.module.css";
import axios from "axios";
import {setStaffAuth} from "auth";
import { Form, redirect } from "react-router-dom";
const url = process.env.REACT_APP_API_URL;

const StaffLoginForm = () => {
  return (
    <>
      <div className="text-center mb-4">
        <small>
          Mess Credentials:
        </small>
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
              placeholder="Phone Number"
              type="number"
              name="phoneNo"
              className={styles.input}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Password" type="password" name="password" autoComplete="off" />
          </InputGroup>
        </FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Sign in
          </Button>
        </div>
      </Form>
    </>
  );
};

export default StaffLoginForm;

export async function staffLoginActions({ request: req }) {
  const formData = await req.formData();
  const loginData = Object.fromEntries(formData.entries());
  
  const loginUrl = `${url}/auth/login/staff`;
  let id = null;
  try {
    const {data} = await axios.post(loginUrl, loginData);
    id = data._id;
    console.log(data);
    
    setStaffAuth(data.token, data._id, data.messEnrolled);
  } catch (error) {
    console.log(error);
  }
  return redirect(`/staffs/${id}`);
}