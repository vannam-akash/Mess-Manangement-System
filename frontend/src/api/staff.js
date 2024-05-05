import { getMessId, getToken } from "auth";
import axios from "axios";
import { json } from "react-router-dom";
const url = process.env.REACT_APP_API_URL;

export async function assignStudent(staffId, studId) {
  const token = getToken();
  const reqData = {
    messId: getMessId(),
    studentId: studId,
  };
  const res = await axios
    .post(`${url}/messes/assign-student`, reqData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error) => {
      console.log(error);
      throw json({title: "Failed to assign student to mess.", msg: error.response.data.error},{status: 403});
    });
    console.log(res);
    return true;
}

export async function fetchStaffDetails(staffId) {
  try {
    const getStudURL = `${url}/staffs/${staffId}`;
    const { data: staff } = await axios.get(getStudURL, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    return staff;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUnassignedStuds() {
  const token = getToken();
  const { data } = await axios.get(`${url}/messes/unassigned-students`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
}

export async function getEnrolledStuds() {
  const messId = getMessId();
  const { data: studs } = await axios
    .get(`${url}/messes/${messId}/students`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.error);
        throw json(
          {
            title: "Failed loading students assigned to mess.",
            msg: error.response.data.error,
          },
          { status: 400 }
        );
      }
    });
  return studs;
}

export async function addExtras(extrasData) {
  try {
    const { data } = await axios.post(`${url}/extras/create`, extrasData, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    if (!data.error) {
      console.log(data.message);
      return true;
    }
    // else throw new Error(data.error)
  } catch (error) {
    console.log(error);
    return false;
  }
}
