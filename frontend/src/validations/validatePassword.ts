export const validatePassword = (password: string) => {
  if (password) {
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const regexDigit = /[0-9]/;
    const regexSpecialChar = /[!@#$%^&*()\-_=+{}[\]|\\:;"'<>/?]/;

    if (password.length < 8) {
      return false;
    }

    if (!regexLowercase.test(password)) {
      return false;
    }

    if (!regexUppercase.test(password)) {
      return false;
    }

    if (!regexDigit.test(password)) {
      return false;
    }

    if (!regexSpecialChar.test(password)) {
      return false;
    }

    return true;
  }
};
