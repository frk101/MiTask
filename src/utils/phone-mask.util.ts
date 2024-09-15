export const handlePhoneNumberChange = (
  text: string,
  setPhoneNumber: (value: string) => void,
) => {
  // Sadece sayıları al
  const digits = text.replace(/\D/g, '');

  let maskedValue = '';
  //   let index = 0;

  if (digits.length === 0) {
    setPhoneNumber('');
    return;
  }

  if (digits.length <= 3) {
    maskedValue = `(${digits}`;
  } else if (digits.length <= 6) {
    maskedValue = `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}`;
  } else if (digits.length <= 8) {
    maskedValue = `(${digits.substring(0, 3)}) ${digits.substring(
      3,
      6,
    )}-${digits.substring(6, 8)}`;
  } else {
    maskedValue = `(${digits.substring(0, 3)}) ${digits.substring(
      3,
      6,
    )}-${digits.substring(6, 8)}-${digits.substring(8, 10)}`;
  }

  setPhoneNumber(maskedValue);
};
export const cleanPhoneNumber = (maskedPhoneNumber: string) => {
  // Tüm gereksiz karakterleri kaldır (sadece sayılar kalsın)
  const cleanedNumber = maskedPhoneNumber.replace(/\D/g, '');
  return `+90${cleanedNumber}`;
};
