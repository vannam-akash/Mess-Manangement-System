import React, { useState } from "react";
import "./StudentsTable.css";

import { Table, Button, UncontrolledAlert } from "reactstrap";

const unassignedStudentsList = [
  { fullName: "Aditya Das", rollNo: "21135003" },
  { fullName: "Naman Khetan", rollNo: "21135086" },
  { fullName: "Aditya Das", rollNo: "21135003" },
  { fullName: "Naman Khetan", rollNo: "21135086" },
  { fullName: "Aditya Das", rollNo: "21135003" },
  { fullName: "Naman Khetan", rollNo: "21135086" },
  { fullName: "Aditya Das", rollNo: "21135003" },
  { fullName: "Naman Khetan", rollNo: "21135086" },
];

const StudentsTable = () => {
  const [flashMessageVisible, setflashMessageVisible] = useState(false);

  const handleAssignClick = () => {
    setflashMessageVisible(true);

    setTimeout(() => {
      setflashMessageVisible(false);
    }, 5000);
  };
  return (
    <>
    <div className="flashMsg">
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
      <div className="TableContainer">
        
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
            {unassignedStudentsList?.map((row, index) => (
              <tr key={index}>
                <td>{`${index + 1}`}</td>
                <td>{row.fullName}</td>
                <td>{row.rollNo}</td>
                <td>
                  <Button
                    className="btn"
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
