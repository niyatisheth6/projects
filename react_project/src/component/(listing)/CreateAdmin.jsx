import React from "react";
import Header from "../../shared/header/Header";
import TextField from "../../shared/textfield/TextField";
import { Field, Form, Formik } from "formik";
import AdminValues from "../../validations/initial-values/AdminValues";
import AdminValidation from "../../validations/validation/AdminValidation";

import { postAdminApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function CreateAdmin() {
  const navigate = useNavigate();
  const { mutate: postMutation } = useMutation((value) => postAdminApi(value), {
    onSuccess: () => {
      console.log("done");
      navigate("/table-data");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div>
      <Header />
      <div className="container">
        <div className="max-w-[800px] mx-auto my-7">
          <h1 className="heading mb-5">Create Admin</h1>
          <Formik
            initialValues={AdminValues}
            validationSchema={AdminValidation}
            onSubmit={(value, { resetForm }) => {
              postMutation(value);
              resetForm();
            }}
          >
            <Form className="form-data">
              <div className="flex justify-between gap-2">
                <TextField label="Name" type="text" name="name" />
                <TextField label="Email" type="text" name="email" />
              </div>
              <div className="flex justify-between gap-2">
                <TextField label="Phone Number" type="tel" name="phone" />
                <TextField label="Age" type="number" name="age" />
              </div>
              <div className="flex justify-between gap-2">
                <TextField label="Address" type="text" name="address" />
                <TextField label="Pincode" type="text" name="pincode" />
              </div>
              <div className="flex justify-between gap-2">
                <TextField label="State" type="text" name="state" />
                <TextField label="Country" type="text" name="country" />
              </div>
              <div className="flex justify-between gap-2">
                <TextField label="Year" type="text" name="year" />
                <TextField label="Hobby" type="text" name="hobby" />
              </div>
              <label className="form-label">Select Gender :</label>
              <div className="form-group flex-row gap-5">
                <div className="flex gap-3">
                  <label htmlFor="male" className="form-label">
                    Male
                  </label>
                  <Field type="radio" id="male" name="gender" value="male" />
                </div>
                <div className="flex gap-3">
                  <label htmlFor="female" className="form-label">
                    Female
                  </label>
                  <Field
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                </div>
                <div className="flex gap-3">
                  <label htmlFor="other" className="form-label">
                    Others
                  </label>
                  <Field type="radio" id="other" name="gender" value="other" />
                </div>
              </div>

              <button className="btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
