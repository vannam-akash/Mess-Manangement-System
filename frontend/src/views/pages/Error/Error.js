import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";
import React, { useEffect, useRef } from "react";
import styles from "./Error.module.css";
import { Link, useRouteError } from "react-router-dom";
import { Badge, Button, Card, CardBody, UncontrolledAlert } from "reactstrap";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  console.log(error.status);
  console.log(error.data);
  console.log(error.data);

  let title = "An error occurred!";
  let msg = "Something went wrong!";

  if (error.status > 200) {
    title = error.data.title;
    msg = error.data.msg;
  }

  if (error.status === 404) {
    title = "Not found!";
    msg = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavbar />

      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-primary">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Card className="shadow border-0 w-50 mx-auto mt-5 text-center">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
              <i className="ni ni-settings" />
            </div>
            <h2 className="text-danger text-uppercase">
              Oops! An Error Occurred
            </h2>
            <h5 className=" mt-3">{title}</h5>
            <h6 className=" mt-3">{msg}</h6>
            <Button className="mt-4" color="danger" to="/" tag={Link}>
              Go to Home
            </Button>
          </CardBody>
        </Card>
        {/* <section className={styles.sec}>
          <div>
            <h3>{title}</h3>
            <p className={styles.p}>{msg}</p>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </div>
        </section> */}
      </section>
      <MainFooter />
    </>
  );
};
export default Error;
