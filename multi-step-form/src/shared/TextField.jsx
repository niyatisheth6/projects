import { ErrorMessage, Field, useField } from "formik";
import React from "react";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <Field
        className={`form-control ${meta.touched && meta.error && "invalid"}`}
        autoComplete="off"
        {...field}
      />
      <ErrorMessage component="span" name={field.name} className="error" />
    </div>
  );
}

export default TextField;
