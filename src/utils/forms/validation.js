/* eslint-disable jest/no-export */
/* eslint-disable jest/valid-title */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */

export const validatePassword = (password) => {
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

export const validateEmail = (email) => {
  return isEmailValid(email) ? undefined : 'This email is not valid';
};

export const validateRegistrationInputs = (
  firstname,
  lastname,
  email,
  password,
  repeatPassword
) => {
  return {
    firstname: firstname.length === 0 ? 'Firstname is empty' : undefined,
    lastname: lastname.length === 0 ? 'Lastname is empty' : undefined,
    email: validateEmail(email),
    password: validatePassword(password),
    repeatPassword: validateRepeatPassword(password, repeatPassword),
  };
};

export const validateLoginInputs = (email, password) => {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  };
};
