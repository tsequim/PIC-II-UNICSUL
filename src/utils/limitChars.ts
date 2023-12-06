export const limitChars = (string: string, length: number) => {
  if (string) {
    let str = string.substring(0, length);
    if (string?.length > length) str = str.concat("...");
    return str;
  } else return "";
};
