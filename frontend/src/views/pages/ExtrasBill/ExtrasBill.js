import styles from "./ExtrasBill.module.css";
import { useEffect, useRef } from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,  
  Row,
  Col,
  Card,
  Form,
  Button,
  Label,
} from "reactstrap";
import classnames from "classnames";
import MainFooter from "components/Footers/MainFooter";
import { redirect, useLoaderData } from "react-router-dom";
import StudentsTable from "components/Tables/EnrolledStudentsTable/StudentsTable";
import ExtrasTable from "components/Tables/ExtrasTable/ExtrasTable";

const ExtrasBill = () => {
  const mainRef = useRef();
  const student = useLoaderData();
  console.log(student);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
  }, []);
  return (
    <>
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
        <main ref={mainRef}>
          <section className="section section-shaped section-lg">
            <div className={styles.title}>Extras Bill</div>
            <div className={styles.studentList}>
              <ExtrasTable/>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default ExtrasBill;
