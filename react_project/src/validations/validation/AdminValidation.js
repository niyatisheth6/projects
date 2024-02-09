import { number, object, string } from "yup";

const AdminValidation = object({
  name: string().min(3).max(30).required("*Enter First Name"),
  email: string().email().required("*Enter Email"),
  phone: string()
    .matches(/^\d+$/, "Invalid phone number")
    .min(10)
    .max(10)
    .required("*Enter Phone"),
  age: number("*Only Enter Number").min(1).max(100).required("*Enter Age"),
  address: string().required("Enter Address"),
  pincode: number().max(999999).required("Enter Pincode"),
  state: string().required("*Enter State"),
  country: string().required("*Enter Country"),
  gender: string().required("*Select gender"),
  year: string().required("*Enter Country"),
  hobby: string().required("*Select gender"),
});

export default AdminValidation;
