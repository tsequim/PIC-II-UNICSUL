import { validateEmail } from "./emailValidator";

export const validateFields = (
  fieldsError: boolean,
  fieldValue: any,
  fieldType: string
) => {
  if (fieldType == "email") {
    return (
      (fieldsError && !Boolean(fieldValue)) ||
      (Boolean(fieldValue) && !validateEmail(fieldValue))
    );
  } else {
    return fieldsError && !Boolean(fieldValue);
  }
};
