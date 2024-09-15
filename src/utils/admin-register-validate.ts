interface ValidationErrors {
  email: string;
  password: string;
  fullName: string;

  [key: string]: string | undefined;
}

interface ValidationParams {
  email: string;
  password: string;
  fullName: string;
}

export const adminInputvalidate = (
  params: ValidationParams,
  fieldsToValidate: (keyof ValidationParams)[],
): ValidationErrors => {
  let validationErrors: ValidationErrors = {
    email: '',
    password: '',
    fullName: '',
  };

  if (fieldsToValidate.includes('fullName')) {
    const fullName = params.fullName || '';
    if (!fullName.trim()) {
      validationErrors.fullName = '*Bu alan boş bırakılamaz';
    } else if (fullName.length < 6 || fullName.length > 20) {
      validationErrors.fullName = '*Kullanıcı adı en az 6 karakter olmalıdır';
    }
  }

  if (fieldsToValidate.includes('email')) {
    const email = params.email || '';
    if (!email.trim()) {
      validationErrors.email = '*Bu alan boş bırakılamaz';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = '*Email geçerli değil';
    }
  }

  if (fieldsToValidate.includes('password')) {
    const password = params.password || '';
    if (!password.trim()) {
      validationErrors.password = '*Bu alan boş bırakılamaz';
    } else if (password.length < 8 || password.length > 20) {
      validationErrors.password = '*Parola en az 8 karakter olmalıdır';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
        password,
      )
    ) {
      validationErrors.password =
        '*Parolanızda büyük harf, sayı ve özel karakter bulunmalıdır';
    }
  }

  return validationErrors;
};
