"use client";
import { useRouter } from "next/navigation";
import getLoginStudentData from "../../shared/hooks/getLoginStudentData";
import { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import { Form, Formik } from "formik";
import TextField from "../../shared/textfield/TextField";
import Button from "../../shared/button/Button";
import Link from "next/link";
import LoginValues from "../../validation/initial-values/LoginValues";
import LoginValidation from "../../validation/LoginValidation";
import { useQuery } from "@tanstack/react-query";

function Login() {
  const router = useRouter();
  const [emailArray, setEmailArray] = useState([]);
  const [passwordArray, setPasswordArray] = useState([]);

  const { data: getStudentData } = useQuery(
    ["getStudentData"],
    getLoginStudentData
  );

  useEffect(() => {
    if (getStudentData) {
      const email = getStudentData.map((item) => item.email);
      const password = getStudentData.map((item) => item.password);
      setEmailArray(email);
      setPasswordArray(password);
    }
  }, [getStudentData]);

  const handleSubmit = (values, { resetForm }) => {
    if (
      emailArray.includes(values.email) &&
      passwordArray.includes(values.password)
    ) {
      setCookie("isLogin", true);
      router.push("/");
      resetForm();
    } else {
      alert("Please Enter Valid Email And Password");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <div className="max-w-[448px] w-full card flex flex-col gap-6">
        <h1 className="heading-md mb-5 ">Log In your Account</h1>

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
        <Link className="link" href={"/auth/signup"}>
          Create New Account ?
        </Link>
      </div>
    </div>
  );
}

export default Login;
