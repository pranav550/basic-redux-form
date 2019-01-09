import React from "react";
const reduxTextField = ({
  type,
  name,
  label,
  input,
  meta: { touched, error }
}) => {
  return (
    <div>
      <b>{label} :</b>
      <input {...input} name={name} type={type} />
      <div>{touched && error && <span className="error">{error}</span>}</div>
    </div>
  );
};

export default reduxTextField;
