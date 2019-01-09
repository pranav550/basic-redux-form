import React from "react";
import template from "./register.jsx";
import { reduxForm } from "redux-form";
import regValidations from "../../valiations/regValiation";
class register extends React.Component {
  render() {
    return template.call(this);
  }
  fnRegister(data) {
    console.log(data);
  }
}

register = reduxForm({
  form: "regForm",
  validate: regValidations
})(register);

export default register;
