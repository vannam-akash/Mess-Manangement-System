const url = process.env.REACT_APP_API_URL;

export async function fetchStudentDetails(studentId) {
  try {
    const getStudURL = url+"students/"+studentId;
    const response = await fetch(getStudURL);

    if (!response.ok) {
      throw new Error("Failed to fetch student details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

