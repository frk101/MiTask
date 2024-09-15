export const companyCodeMask = (code: string) => {
  // Remove any non-alphanumeric characters (letters and numbers only)
  let cleanedCode = code.replace(/[^a-zA-Z0-9]/g, '');

  // Limit to 16 characters
  cleanedCode = cleanedCode.slice(0, 16);

  // Add dashes every 4 characters
  const formattedCode = cleanedCode.match(/.{1,4}/g)?.join('-') || '';

  return formattedCode;
};
