export const removeNotNumbers = (str: string) => {
  return str?.replace(/[^\d]/g, "");
};
