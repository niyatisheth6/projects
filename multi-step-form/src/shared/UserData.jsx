import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { Form, Formik } from "formik";
import { initialvalue } from "../initialization/initialvalue";
import { validationSchema } from "../validation/validation";
import { useNavigate } from "react-router-dom";
import usePostData from "../hooks/usePostData";
import usePutData from "../hooks/usePutData";

function UserData() {
  const [state, setState] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    setState(state + 1);
  };
  const handlePrev = () => {
    setState(state - 1);
  };
  const { mutate } = usePostData();
  const { mutate: putMutate } = usePutData();
  console.log({ putMutate });

  return (
    <div className="container mx-auto px-3 block h-auto">
      <h1 className="text-3xl font-bold underline text-center my-4">
        Registration Form
      </h1>
      <div className="max-w-[50%] mx-auto">
        <ul className="list-unstyled multi-steps">
          <li className={`${state === 1 && "is-active"}`}>First Step</li>
          <li className={`${state === 2 && "is-active"}`}>Second Step</li>
          <li className={`${state === 3 && "is-active"}`}>Third Step</li>
        </ul>
      </div>
      <div className="card my-10">
        <Formik
          initialValues={initialvalue}
          validationSchema={validationSchema}
          // validateOnBlur
          onSubmit={(value) => {
            console.log(value);
            mutate(value);
          }}
        >
          <Form>
            {state === 1 && <FirstStep next={handleNext} />}
            {state === 2 && <SecondStep next={handleNext} prev={handlePrev} />}
            {state === 3 && <ThirdStep prev={handlePrev} />}
          </Form>
        </Formik>
      </div>
      <div className="w-full justify-center flex">
        <button
          className="btn-secondary"
          onClick={() => navigate("/form-data")}
        >
          Show User Data
        </button>
      </div>
    </div>
  );
}

export default UserData;
