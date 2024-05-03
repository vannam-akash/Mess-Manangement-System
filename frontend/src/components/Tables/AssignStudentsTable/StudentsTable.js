import React, { useState } from "react";
import styles from "./StudentsTable.module.css";

import { Table, Button, UncontrolledAlert } from "reactstrap";

const StudentsTable = ({ studs }) => {
  const [flashMessageVisible, setflashMessageVisible] = useState(false);

  const handleAssignClick = () => {
    setflashMessageVisible(true);

    setTimeout(() => {
      setflashMessageVisible(false);
    }, 5000);
  };
  return (
    <>
      <div className={styles.flashMsg}>
        {flashMessageVisible && (
          <UncontrolledAlert color="success" fade={false}>
            <span className="alert-inner--icon">
              <i className="ni ni-like-2" />
            </span>
            <span className="alert-inner--text ml-1">
              <strong>Success!</strong> Roll No. <strong>21135003</strong>{" "}
              assigned to mess!
            </span>
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
            {studs?.map((row, index) => (
              <tr className="" key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.fullName}</td>
                <td>{row.rollNo}</td>
                <td>
                  <Button
                    className={styles.btn}
                    color="primary"
                    type="button"
                    onClick={handleAssignClick}
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
