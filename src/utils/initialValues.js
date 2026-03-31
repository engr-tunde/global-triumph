export const userLoginValues = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return initialValues;
};

export const marketerLoginValues = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return initialValues;
};

export const userSignupValues = () => {
  const initialValues = {
    email: '',
    fName: '',
    lName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  return initialValues;
};

export const marketerSignupValues = () => {
  const initialValues = {
    email: '',
    fName: '',
    lName: '',
    phone: '',
    gender: '',
    occupation: '',
    password: '',
    confirmPassword: '',
  };
  return initialValues;
};

export const verifyEmailValues = () => {
  const initialValues = { email: '' };
  return initialValues;
};

export const resetPasswordValues = () => {
  const initialValues = { password: '', confirmPassword: '' };
  return initialValues;
};
