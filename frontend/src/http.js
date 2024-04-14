const url = process.env.REACT_APP_API_URL;

export async function fetchStudentDetails(studentId) {
  try {
    const getStudURL = url+"students/"+studentId;
    const res = await fetch(getStudURL);

    if (!res.ok) {
      throw new Error("Failed to fetch student details");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
