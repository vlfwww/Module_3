function validate(username, password) {
  const preparedUserName = username.trim();
  const preparedPassword = password.trim();

  if (preparedUserName.length > 12) {
    throw ERRORS.usernameTooLong(preparedUserName);
  }

  if (preparedUserName.length < 1) {
    throw ERRORS.usernameTooShort(preparedUserName);
  }

  const illegalUserChars = /[(){}[\]|;:'"/?.,<>~=\-+*&^%$@!]/;
  if (illegalUserChars.test(preparedUserName)) {
    throw ERRORS.usernameInvalidCharacters(preparedUserName);
  }

  if (preparedPassword.length > 24) {
    throw ERRORS.passwordTooLong(preparedPassword);
  }

  if (preparedPassword.length < 8) {
    throw ERRORS.passwordTooShort(preparedPassword);
  }

  if (/[^a-zA-Z0-9;:?.,<>~*^%$ @!_]/.test(preparedPassword)) {
    throw ERRORS.passwordInvalidCharacters(preparedPassword);
  }

  if (!/[A-Z]/.test(preparedPassword)) {
    throw ERRORS.passwordNoCapital(preparedPassword);
  }

  if (!/[0-9]/.test(preparedPassword)) {
    throw ERRORS.passwordNoNumber(preparedPassword);
  }

  if (preparedPassword.includes(preparedUserName)) {
    throw ERRORS.passwordContainsUsername(preparedPassword);
  }

  return true;
}