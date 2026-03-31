import { Link } from 'react-router-dom';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import TopHead from '../../components/general/TopHead';
import { marketerSignupValues } from '../../utils/initialValues';
import { validateMarketerSignup } from '../../utils/validateValues';
import { ErrorMessage, Formik } from 'formik';
import PasswordInput from '../../components/general/form/PasswordInput';
import AuthLayout from '../../components/auth/AuthLayout';

export const MarketerSignupPage = () => {
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ref = queryParams.get('ref');
  const [referredBy, setReferredBy] = useState('');
  const initialValues = marketerSignupValues();
  const validationSchema = validateMarketerSignup();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    if (ref) {
      setReferredBy(ref);
    } else {
      setReferredBy('');
    }
  }, [ref]);

  const handleSubmit = async (values, formikActions) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/marketers/signup`, {
      fName: values.fName,
      lName: values.lName,
      email: values.email,
      phone: values.phone,
      gender: values.gender,
      occupation: values.occupation,
      password: values.password,
      referredBy: referredBy,
    });
    formikActions.setSubmitting(false);
    const response = res.data;
    if (!response.success) {
      errorNotification(response.message);
    }
    if (response.success) {
      successNotification(response.message);
      setTimeout(
        () =>
          history('/verify-account', {
            state: { userID: response.userID, type: 'marketer' },
          }),
        3000
      );
    }
  };

  return (
    <>
      <TopHead pageTitle="Sign up as a marketer" />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AuthLayout
        variant="marketer"
        eyebrow="Partner program"
        heroTitle="Turn your network into recurring income"
        heroSubtitle="Join marketers who promote verified developments and earn structured commissions."
        formTitle="Create your marketer account"
        formSubtitle="Complete the form below. You will verify your email before your first sign-in."
      >
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="signup-bx">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  id="fName"
                  name="fName"
                  value={values.fName}
                  error={!!touched.fName && !!errors.fName}
                  helpertext={touched.fName && errors.fName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your first name"
                />
                <ErrorMessage name="fName" component="span" className="error" />

                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  id="lName"
                  name="lName"
                  value={values.lName}
                  error={!!touched.lName && !!errors.lName}
                  helpertext={touched.lName && errors.lName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your last name"
                />
                <ErrorMessage name="lName" component="span" className="error" />

                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helpertext={touched.email && errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="span" className="error" />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  error={!!touched.phone && !!errors.phone}
                  helpertext={touched.phone && errors.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your phone number"
                />
                <ErrorMessage name="phone" component="span" className="error" />

                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <ErrorMessage name="gender" component="span" className="error" />

                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={values.occupation}
                  error={!!touched.occupation && !!errors.occupation}
                  helpertext={touched.occupation && errors.occupation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="What do you do?"
                />
                <ErrorMessage name="occupation" component="span" className="error" />

                <label htmlFor="password">Password</label>
                <PasswordInput
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Set account password"
                  autoComplete="new-password"
                />
                <ErrorMessage name="password" component="span" className="error" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <PasswordInput
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm account password"
                  autoComplete="new-password"
                />
                <ErrorMessage name="confirmPassword" component="span" className="error" />

                <div className="br" />
                <button type="submit">Sign Up</button>

                <div className="signup-option">
                  <span>
                    Already registered? <Link to="/marketer-login">Sign in</Link>
                  </span>
                  <Link to="/marketer-forgot-password">Forgot password?</Link>
                </div>
                <p className="option">
                  Investing instead? <Link to="/signup">Create an investor account</Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default MarketerSignupPage;
