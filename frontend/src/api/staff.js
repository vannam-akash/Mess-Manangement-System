import { getToken } from "auth";
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
    const res = await axios.post(`${url}/staffs/assign-students`, reqData, {
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
  const { data } = await axios.get(`${url}/staffs/unassigned-students`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
}