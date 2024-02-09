import React, { useEffect, useState } from "react";
import TextField from "../../../shared/textfield/TextField";
import Button from "../../../shared/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import SignUpValidation from "../../../validations/validation/SignUpValidation";
import SignUpValues from "../../../validations/initial-values/SignUpValues";

function SignUp() {
  const navigate = useNavigate(null);
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   email: "",
  //   password: "",
  //   cpassword: "",
  // });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // useEffect(() => {
  //   if (formSubmitted) {
  //     const oldData = JSON.parse(localStorage.getItem("Create Account"));
  //     if (!oldData || oldData.length === 0) {
  //       localStorage.setItem("Create Account", JSON.stringify([formData]));
  //     } else {
  //       const emails = oldData.map((item) => item.email);

  //       if (!emails.includes(formData.email)) {
  //         localStorage.setItem(
  //           "Create Account",
  //           JSON.stringify([...oldData, formData])
  //         );
  //       } else {
  //         alert("Data is available");
  //       }
  //     }
  //   }
  // }, [formData, formSubmitted, navigate]);

  function handleSubmit(value, { resetForm }) {
    const oldData = JSON.parse(localStorage.getItem("Create Account"));
    if (!oldData || oldData.length === 0) {
      localStorage.setItem("Create Account", JSON.stringify([value]));
    } else {
      const emails = oldData.map((item) => item.email);

      if (!emails.includes(value.email)) {
        localStorage.setItem(
          "Create Account",
          JSON.stringify([...oldData, value])
        );
      } else {
        alert("Data is available");
      }
    }
    resetForm();
    navigate("/");
    localStorage.setItem("isLogin", true);
  }

  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="max-w-[448px] w-full card flex flex-col gap-6">
        <h1 className="heading mb-5">Create account</h1>
        <Formik
          initialValues={SignUpValues}
          validationSchema={SignUpValidation}
          onSubmit={handleSubmit}
        >
          <Form className="form-data">
            <TextField label="First Name" type="text" name="firstname" />
            <TextField label="Email" type="text" name="email" />
            <TextField label="Password" type="password" name="password" />
            <TextField
              label="Confirm Password"
              type="password"
              name="cpassword"
            />
            <Button name="Create Account" />
          </Form>
        </Formik>
        <Link className="link text-black" to={"/login"}>
          Already have an account ?{" "}
          <span className="text-[#13007C]">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
