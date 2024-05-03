import { getId } from "auth";
import { getToken } from "auth";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export async function getUnassignedStuds() {
  const token = getToken();
  const { data } = await axios.get(`${url}/staffs/unassignedStudent`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
}
