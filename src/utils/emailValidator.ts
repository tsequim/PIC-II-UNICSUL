export const validateEmail = (email: string) => {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true; // Valid email
  } else {
    return false; // Invalid email
  }
};
