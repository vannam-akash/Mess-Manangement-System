import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
} from "reactstrap";
import {Form, redirect} from "react-router-dom";


import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {setStudAuth} from "auth";

// import * as yup from 'yup';
// import { validationSchema } from './validationSchema.js';

const url = process.env.REACT_APP_API_URL;

const StudentLoginForm = () => {

  // const [formData, setFormData] = useState({ rollNo: '', password: '' });
  // const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     await validationSchema.validate(formData, { abortEarly: false });
  //     // Validation passed, proceed with form submission
  //     studentLoginActions(formData);
  //   } catch (validationErrors) {
  //     // Validation failed, update errors state
  //     const newErrors = {};
  //     validationErrors.inner.forEach((error) => {
  //       newErrors[error.path] = error.message;
  //     });
  //     setErrors(newErrors);
  //   }
  // };

  // const studentLoginActions = async (formData) => {
  //   const loginUrl = `${url}/auth/login/student`;
  //   try {
  //     const { data } = await axios.post(loginUrl, formData);
  //     setStudAuth(data.token, data._id);
  //     console.log(data);
  //     navigate(`/students/${data._id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="text-center mb-4">
        <small>Student Credentials:</small>
      </div>
      {/* <Form method="POST" onSubmit={handleSubmit}> */}
      <Form method="POST">
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-address-card" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Roll Number"
              type="number"
              name="rollNo"
              className={styles.input}
              // value={formData.rollNo}
              // onChange={handleChange}
            />
          </InputGroup>
          {/* {errors.rollNo && <div className="text-danger">{errors.rollNo}</div>} */}
        </FormGroup>
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </InputGroup>
          {/* {errors.password && <div className="text-danger">{errors.password}</div>} */}
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

export default StudentLoginForm;

export async function studentLoginActions({ request: req }) {
  const formData = await req.formData();
  const loginUrl = `${url}/auth/login/student`;
  const loginData = Object.fromEntries(formData.entries());
  let id = null;
  try {
    const {data} = await axios.post(loginUrl, loginData);
    id = data._id;
    setStudAuth(data.token, data._id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return redirect(`/students/${id}`);
}