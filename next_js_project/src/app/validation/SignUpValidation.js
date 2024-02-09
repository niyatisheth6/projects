import { object, ref, string } from "yup";

const SignUpValidation = object({
  firstname: string().min(3).max(20).required("*Enter First Name"),
  email: string().email().required("*Enter Email"),
  password: string().min(3).required("*Enter Password"),
  cpassword: string()
    .oneOf([ref("password")], "Password must same")
    .required("*Enter Confirm Password"),
});

export default SignUpValidation;
