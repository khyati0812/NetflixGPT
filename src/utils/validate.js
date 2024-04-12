export const checkValidData = (email, password) => {
  // Regular expression to validate email format
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  // Regular expression to validate password format
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Check if email is valid
  if (!isEmailValid) return "Email ID is not valid";

  // Check if password is valid
  if (!isPasswordValid) return "Password is not valid";

  // If both email and password are valid, return null
  return null;
};
export const checkValidName = (email, password, name) => {
  const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  // Regular expression to validate password format
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Check if email is valid
  if (!isEmailValid) return "Email ID is not valid";

  // Check if password is valid
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";
  return null;
};
