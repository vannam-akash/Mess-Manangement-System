import { getId, getToken } from "auth";
import axios from "axios";
import { json } from "react-router-dom";

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

export async function cancelMeal(cancelData) {
  const studentId = getId();
  const { data } = await axios
    .post(`${url}/bills/${studentId}/cancel`, cancelData, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .catch((error) => {
      if (error.response) {
        throw json({title: "Failed to cancel meal..", msg: error.response.data.error}, {status: 400});
      }
    });
  console.log(data);
  return data;
}
