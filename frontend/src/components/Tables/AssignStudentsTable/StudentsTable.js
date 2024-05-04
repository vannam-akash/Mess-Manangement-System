import React, { useRef, useState } from "react";
import styles from "./StudentsTable.module.css";

import { Table, Button, UncontrolledAlert } from "reactstrap";
import { assignStudent } from "api/staff";
import { getId } from "auth";

const StudentsTable = ({ studs }) => {
  const [flashMessageVisible, setflashMessageVisible] = useState(false);
  const added = useRef(false);
  const msg = useRef("Nothing");

  const handleAssignClick = async (studId) => {
    const staffId = getId();
    added.current = await assignStudent(staffId, studId);
    console.log(added);
    msg.current = added.current
      ? "Successfully assigned student to mess"
      : "Failed to assign student to mess";
    setflashMessageVisible(true);
    setTimeout(() => {
      setflashMessageVisible(false);
    }, 5000);
  };
  return (
    <>
      <div className={styles.flashMsg}>
        {flashMessageVisible && (
          <UncontrolledAlert
            color={added.current ? "success" : "danger"}
            fade={false}
          >
            <span className="alert-inner--icon">
              <i
                className={`ni ni-${added.current ? "like-2" : "support-16"}`}
              />
            </span>
            <span className="alert-inner--text ml-1">{msg.current}</span>
          </UncontrolledAlert>
        )}
      </div>
      <div className={styles.TableContainer}>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Assign Student</th>
            </tr>
          </thead>
          <tbody>
            {studs?.map((stud, index) => (
              <tr className="" key={index}>
                <td>{`${index + 1}`}</td>
                <td>{stud.fullName}</td>
                <td>{stud.rollNo}</td>
                <td>
                  <Button
                    className={styles.btn}
                    color="primary"
                    type="button"
                    onClick={() => handleAssignClick(stud._id)}
                  >
                    Assign
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default StudentsTable;
