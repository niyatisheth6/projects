import { object, string } from "yup";

const LoginValidation = object({
  email: string().email().required("*Enter Email"),
  password: string().min(3).required("*Enter Password"),
});

export default LoginValidation;
