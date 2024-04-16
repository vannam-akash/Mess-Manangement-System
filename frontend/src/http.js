import { getToken } from "auth";
import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export async function fetchStudentDetails(studentId) {
  try {
    const getStudURL = `${url}/students/${studentId}`;
    const {data:stud} = await axios.get(getStudURL,{
      headers:{
        'Authorization': 'Bearer '+ getToken()
      }
    });
    return stud;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchStaffDetails(staffId) {
  try {
    const getStudURL = `${url}/staffs/${staffId}`;
    const {data:staff} = await axios.get(getStudURL,{
      headers:{
        'Authorization': 'Bearer '+ getToken()
      }
    });
    return staff;
  } catch (error) {
    throw new Error(error.message);
  }
}
