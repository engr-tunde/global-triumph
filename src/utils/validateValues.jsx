import * as yup from 'yup';

export const validateUserLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Account Password is required')
      .min(8, 'Password must not be less than 8 characters'),
  });
  return validationSchema;
};

export const validateUserSignup = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationSchema = yup.object().shape({
    fName: yup
      .string()
      .required('This field is required')
      .matches(/^[A-Za-z]*$/, 'Please enter a valid name'),
    lName: yup
      .string()
      .required('This field is required')
      .matches(/^[A-Za-z]*$/, 'Please enter a valid name'),
    email: yup.string().email('invalid email').required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Admin contact is required'),
    password: yup.string().required('Account Password is required').min(8),
    confirmPassword: yup
      .string()
      .required('Confirm Account Password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  return validationSchema;
};

export const validateMarketerSignup = () => {
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationSchema = yup.object().shape({
    fName: yup
      .string()
      .required('This field is required')
      .matches(/^[A-Za-z]*$/, 'Please enter a valid name'),
    lName: yup
      .string()
      .required('This field is required')
      .matches(/^[A-Za-z]*$/, 'Please enter a valid name'),
    email: yup.string().email('invalid email').required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Admin contact is required'),
    gender: yup.string().required('This field is required'),
    occupation: yup.string().required('This field is required'),
    password: yup.string().required('Account Password is required').min(8),
    confirmPassword: yup
      .string()
      .required('Confirm Account Password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  return validationSchema;
};

export const validateVerifyEmail = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('Email is required'),
  });
  return validationSchema;
};

export const validateResetPassword = () => {
  const validationSchema = yup.object().shape({
    password: yup.string().required('Account Password is required').min(8),
    confirmPassword: yup
      .string()
      .required('Confirm Account Password')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  return validationSchema;
};
