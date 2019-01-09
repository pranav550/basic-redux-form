const regValidations = data => {
  let error = {};
  if (!data.username) {
    error.username = "please enter uid";
  }
  if (!data.password) {
    error.password = "please enter pwd";
  }
  if (!data.email) {
    error.email = "please enter email";
  }
  if (!data.phone) {
    error.phone = "please enter phone";
  }

  return error;
};

export default regValidations;
