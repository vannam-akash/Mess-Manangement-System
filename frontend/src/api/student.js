import { getId, getToken } from "auth";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export async function fetchStudentDetails() {
  const studentId = getId();
  try {
    const { data: stud } = await axios.get(`${url}/students/${studentId}`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return stud;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getExtras() {
  const studentId = getId();
  try {
    const { data } = await axios.get(`${url}/extras/${studentId}/get/all`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}