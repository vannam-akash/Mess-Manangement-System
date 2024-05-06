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
  const studId = getId();
  const { data } = await axios.get(`${url}/extras/${studId}`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  }).catch((error)=>{
    console.log(error.response.data);
    throw json({title: "Failed to get extras.", msg: error.response.data.error},{status: 500});
  });
  return data;
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
        throw json(
          { title: "Failed to cancel meal..", msg: error.response.data.error },
          { status: 400 }
        );
      }
    });
  console.log(data);
  return data;
}

export async function getMessBill(studId) {
  const { data } = await axios
    .get(`${url}/bills/${studId}/getBill`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log(data);
  return data;
}

export async function getExtrasBill(studId) {
  const { data } = await axios
    .get(`${url}/extras/${studId}`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  console.log(data);
  return data;
}

export async function getStudsBill(studs) {
  const bills = await Promise.all(
    studs.map(async (stud) => {
      const { totalBill } = await getMessBill(stud._id),
        { extrasBill } = await getExtrasBill(stud._id);
      return { totalBill, extrasBill };
    })
  );
  return bills;
}
