export const lowercaseAndHyphen = (rawString: string) => {
  return rawString.toLowerCase().replace(/[^A-Z0-9]+/ig, '-');
}