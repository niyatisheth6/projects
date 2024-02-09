"use client";
import { useRouter } from "next/navigation";

import { setCookie } from "cookies-next";
import { Form, Formik } from "formik";
import TextField from "../../shared/textfield/TextField";
import Button from "../../shared/button/Button";
import Link from "next/link";
import SignUpValidation from "../../validation/SignUpValidation";
import postLoginStudentData from "../../shared/hooks/postLoginStudentData";
import SignUpValues from "../../validation/initial-values/SignUpValues";
import { useMutation } from "@tanstack/react-query";

function SignUp() {
  const router = useRouter();
  const { mutate: postMutation } = useMutation(
    (value) => postLoginStudentData(value),
    {
      onSuccess: () => {
        setCookie("isLogin", true);
        router.push("/");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return (
    <div className="container flex justify-center items-center h-[90vh]">
      <div className="max-w-[448px] w-full card flex flex-col gap-6">
        <h1 className="heading-md mb-5">Create account</h1>
        <Formik
          initialValues={SignUpValues}
          validationSchema={SignUpValidation}
          onSubmit={(value) => {
            postMutation(value);
          }}
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
            <Button name="Create Account" type="submit" />
          </Form>
        </Formik>
        <Link className="link text-black" href={"/login"}>
          Already have an account ?{" "}
          <span className="text-[#13007C]">Login</span>
        </Link>
      </div>
    </div>
  );
}
export default SignUp;
