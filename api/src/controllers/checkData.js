const expressions = {
  expressionStandar: /^[a-zA-Z0-9_-]+$/, // Letras, numeros, guion y guion_bajo
  usernameLong: /^.{4,25}$/, // 4 a 25 digitos.
  passwordLong: /^.{8,16}$/, // 4 a 16 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const validateUsername = (username) => {
  if (!expressions.expressionStandar.test(username)) {
    return false
  }
  if (!expressions.usernameLong.test(username)) {
    return false
  }
  return true
};
const validatePassword = (password) => {
  if (!expressions.passwordLong.test(password)) {
    return false
  }
  return true
};
const validateEmail = (email) => {
  if (!expressions.email.test(email)) {
    return false
  }
  return true
};

module.exports = {
  validateUsername,
  validatePassword,
  validateEmail,
};
