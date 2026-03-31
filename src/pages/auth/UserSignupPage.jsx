import { Link, useLocation } from 'react-router-dom';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import TopHead from '../../components/general/TopHead';
import { userSignupValues } from '../../utils/initialValues';
import { validateUserSignup } from '../../utils/validateValues';
import AppInput from '../../components/general/form/AppInput';
import CustomFormik from '../../utils/CustomFormik';
import SubmitButton from '../../components/general/form/SubmitButton';
import AuthLayout from '../../components/auth/AuthLayout';

export const UserSignupPage = () => {
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ref = queryParams.get('ref');
  const [referredBy, setReferredBy] = useState('');

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

  const initialValues = userSignupValues();
  const validationSchema = validateUserSignup();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values, formikActions) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
      fName: values.fName,
      lName: values.lName,
      email: values.email,
      phone: values.phone,
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
            state: { userID: response.userID, type: 'user' },
          }),
        3000
      );
    }
  };

  return (
    <>
      <TopHead pageTitle="Sign up" />
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
        variant="investor"
        eyebrow="Join the community"
        heroTitle="Start building your real estate future"
        heroSubtitle="Create an account to explore verified projects and structured investments tailored to you."
        formTitle="Create your account"
        formSubtitle="It only takes a minute. You will verify your email before your first sign-in."
      >
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="signup-bx">
            <label htmlFor="fName">First Name</label>
            <AppInput name="fName" placeholder="Enter your first name" />

            <label htmlFor="lName">Last Name</label>
            <AppInput name="lName" placeholder="Enter your last name" />

            <label htmlFor="email">Email Address</label>
            <AppInput name="email" placeholder="Enter your email" />

            <label htmlFor="phone">Phone Number</label>
            <AppInput name="phone" placeholder="Enter your phone number" />

            <label htmlFor="password">Password</label>
            <AppInput
              name="password"
              type="password"
              placeholder="Set account password"
              autoComplete="new-password"
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <AppInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm account password"
              autoComplete="new-password"
            />

            <div className="br" />
            <SubmitButton title="Sign Up" />

            <div className="signup-option">
              <span>
                Already have an account? <Link to="/login">Sign in</Link>
              </span>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <p className="option">
              Want to earn commissions?{' '}
              <Link to="/marketer-signup">Create a marketer account</Link>
            </p>
          </div>
        </CustomFormik>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default UserSignupPage;
