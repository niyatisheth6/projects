import React from "react";
import TextField from "../../../shared/textfield/TextField";
import Button from "../../../shared/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import LoginValidation from "../../../validations/validation/LoginValidation";
import LoginValues from "../../../validations/initial-values/LoginValues";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    const data = JSON.parse(localStorage.getItem("Create Account"));
    if (data) {
      const emails = data.map((item) => item.email);
      const password = data.map((item) => item.password);
      if (emails.includes(values.email) && password.includes(values.password)) {
        localStorage.setItem("isLogin", true);
        navigate("/");
      } else {
        alert("Please Create Account");
      }
    }
    resetForm();
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="max-w-[448px] w-full card flex flex-col gap-6">
        <h1 className="heading mb-5 text-[]">Log in to your account</h1>

        <Formik
          initialValues={LoginValues}
          validationSchema={LoginValidation}
          onSubmit={handleSubmit}
        >
          <Form className="form-data">
            <TextField label="Email" type="text" name="email" />
            <TextField label="Password" name="password" type="password" />
            <Button name="Log in" type="submit" />
          </Form>
        </Formik>
        <Link className="link" to={"/signup"}>
          Create New Account ?
        </Link>
      </div>
    </div>
  );
}

export default Login;
