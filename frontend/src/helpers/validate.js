const signupValidate = (value) => {
  let error = [];
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.name.trim()) {
    error.push({
      error: true,
      message: "You should enter valid Name",
      success: false,
    });
  } else
    error.push({
      error: false,
      message: "",
      success: true,
    });
  if (!value.email) {
    error.push({
      error: true,
      message: "Enter Valid Email",
      success: false,
    });
  } else if (!value.email.match(regex)) {
    error.push({
      error: true,
      message: "This is Not Valid Email",
      success: false,
    });
  } else {
    error.push({
      error: false,
      message: "",
      success: true,
    });
  }
  if (!value.password) {
    error.push({
      error: true,
      message: "Enter Valid Password",
      success: false,
    });
  } else {
    error.push({
      error: false,
      message: "",
      success: true,
    });
  }
  return error;
};

const loginValidate = (value) => {
  let error = [];
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.email) {
    error.push({
      error: true,
      message: "Enter Valid Email",
      success: false,
    });
  } else if (!value.email.match(regex)) {
    error.push({
      error: true,
      message: "This is Not Valid Email",
      success: false,
    });
  } else {
    error.push({
      error: false,
      message: "",
      success: true,
    });
  }
  if (!value.password) {
    error.push({
      error: true,
      message: "Enter Valid Password",
      success: false,
    });
  } else {
    error.push({
      error: false,
      message: "",
      success: true,
    });
  }
  return error;
};

export { signupValidate, loginValidate };
