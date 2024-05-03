const url = process.env.REACT_APP_API_URL;
import axios from "axios";

export function assignStudent(studId="661e23e3f6d40b8c806ff9f8") {
  const user = getUserType();
  if (!user || user != "staff") {
    return redirect("/staffs/login");
  }
  const id = getId(), token = getToken();
  const reqData = {
    messId: id,
    studentId: studId,
  };
  const res = axios.post(`${url}/staffs/assign/student`, reqData, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
