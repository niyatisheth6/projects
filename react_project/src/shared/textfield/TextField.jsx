import { ErrorMessage, Field, useField } from "formik";
import React from "react";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={field.name}>
        {label}
      </label>
      <Field
        className={`form-control ${meta.touched && meta.error && "invalid"}`}
        autoComplete="off"
        {...field}
        type={props.type}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
