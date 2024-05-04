import { getMessId, getToken } from "auth";
import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export async function assignStudent(staffId, studId) {
  try {
    // Get the token and staff details
    const token = getToken();
    if (!token) {
      throw new Error("Failed to retrieve token");
    }

    const staff = await fetchStaffDetails(staffId);
    if (!staff) {
      throw new Error("Please Login as Mess Staff...");
    }

    // Prepare the request data
    const reqData = {
      messId: staff.messEnrolled,
      studentId: studId,
    };

    // Make the POST request
    const res = await axios.post(`${url}/messes/assign-student`, reqData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Check if the request was successful
    if (res.status !== 200) {
      throw new Error(`Failed to assign student to mess!`);
    }

    // Return true if the request succeeded
    return true;
  } catch (error) {
    // Log the error and return false
    console.error("An error occurred:", error.message);
    return false;
  }
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
  const { data: studs } = await axios.get(`${url}/messes/${messId}/students`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return studs;
}

export async function addExtras(extrasData) {
  try {
    const res = await axios.post(`${url}/extras/create`, extrasData, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    });
    if (res.status === 200) {
      window.location.reload();
      return true;
    }
    throw new Error("Failed to add extras to student! Please try again...")
  } catch (error) {
    console.log(error);
    return false;
  }
}
