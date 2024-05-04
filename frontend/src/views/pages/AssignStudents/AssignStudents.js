import styles from "./AssignStudents.module.css";
import { useEffect, useRef } from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import StudentsTable from "components/Tables/AssignStudentsTable/StudentsTable";
import { redirect, useLoaderData } from "react-router-dom";
import { getUnassignedStuds } from "../../../api/staff";
import { getUserType } from "auth";
import { toast } from "react-toastify";

const AssignStudents = () => {
  const mainRef = useRef();
  const students = useLoaderData();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainRef.current.scrollTop = 0;
    toast.info("Assign students to their respective messes here.")
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
            <div className={styles.search}>
              <FormGroup>
                <InputGroup className={`${styles.searchBar} mb-4`}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Search"
                    type="text"
                    className={styles.placeholder}
                  />
                </InputGroup>
              </FormGroup>
            </div>
            <div className={styles.studentList}>
              <StudentsTable studs={students} />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default AssignStudents;

export const assignStudLoader = async () => {
  const user = getUserType();
  if(!user || user !== "staff") return redirect("/staff/login");
  
  const studs = getUnassignedStuds();
  return studs;
}