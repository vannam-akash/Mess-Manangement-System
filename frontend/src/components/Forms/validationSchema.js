import * as yup from 'yup';

// Define validation schema using yup
const validationSchema = yup.object().shape({
  rollNo: yup.number().required('Roll Number is required').positive().integer(),
  password: yup.string().required('Password is required'),
});
