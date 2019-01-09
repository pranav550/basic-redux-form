import "./register.css";
import React from "react";
import { Field } from "redux-form";
import reduxTextField from "../../reduxFormInputs/reduxFormTextField";
function template() {
  const { handleSubmit, invalid } = this.props;
  return (
    <div className="register">
      <h1>register</h1>
      <div>
        <form onSubmit={handleSubmit(this.fnRegister)}>
          <Field
            name="username"
            label="User Name"
            type="text"
            component={reduxTextField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={reduxTextField}
          />
          <Field
            name="email"
            label="Email"
            type="email"
            component={reduxTextField}
          />
          <Field
            name="phone"
            label="Phone NO"
            type="number"
            component={reduxTextField}
          />
          <input type="submit" disabled={invalid} value="register" />
        </form>
      </div>
    </div>
  );
}

export default template;
