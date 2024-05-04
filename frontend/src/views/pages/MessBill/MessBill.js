import styles from "./MessBill.module.css";
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
import MessTable from "components/Tables/MessTable/MessTable";
import { toast } from "react-toastify";

const MessBill = () => {
  const mainRef = useRef();
  const student = useLoaderData();
  console.log(student);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
    toast.info("This is your mess diets bill.")
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
            <div className={styles.title}>Your Mess Bill</div>
            <div className={styles.details}>

            <div className={styles.name}>Name : Aditya Das</div>
            <div className={styles.roll}>Roll No : 21135003</div>
            <div className={styles.hostel}>Hostel : Morvi Hostel</div>
            </div>
            <div className={styles.studentList}>
             <MessTable/>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default MessBill;
