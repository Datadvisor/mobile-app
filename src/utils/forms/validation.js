const validatePassword = (password) => {
  if (password.length < 8) {
    return 'Password should be at least 8 characters long';
  }

  return undefined;
};

const validateRepeatPassword = (password, repeatPassword) => {
  if (!password) {
    return undefined;
  }

  const invalid = validatePassword(repeatPassword);

  if (invalid) {
    return invalid;
  }

  if (password !== repeatPassword) {
    return 'Passwords are not the same';
  }

  return undefined;
};

export const isEmailValid = (email) =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    email
  );

const validateEmail = (email) => {
  return isEmailValid(email) ? undefined : 'This email is not valid';
};

export const validateRegistrationInputs = (email, password, repeatPassword) => {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
    repeatPassword: validateRepeatPassword(password, repeatPassword),
  };
};
