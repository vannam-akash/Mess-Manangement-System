import styles from "./AssignStudents.module.css";
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
import StudentsTable from "components/Tables/AssignStudentsTable/StudentsTable";
import { redirect, useLoaderData } from "react-router-dom";

const AssignStudents = () => {
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
            <div class={styles.search}>
              <FormGroup
              // className={classnames({
              //   focused: this.state.searchFocused,
              // })}
              >
                <InputGroup className={`${styles.searchBar} mb-4`}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Search"
                    type="text"
                    // onFocus={(e) => this.setState({ searchFocused: true })}
                    // onBlur={(e) => this.setState({ searchFocused: false })}
                  />
                </InputGroup>
              </FormGroup>
            </div>
            <div className={styles.studentList}>
              <StudentsTable />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default AssignStudents;
