import { Link, useNavigate } from 'react-router-dom';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';
import { verifyEmailValues } from '../../utils/initialValues';
import { validateVerifyEmail } from '../../utils/validateValues';
import CustomFormik from '../../utils/CustomFormik';
import AppInput from '../../components/general/form/AppInput';
import SubmitButton from '../../components/general/form/SubmitButton';
import AuthLayout from '../../components/auth/AuthLayout';

axios.defaults.withCredentials = true;

export const UserForgotPasswordPage = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const initialValues = verifyEmailValues();
  const validationSchema = validateVerifyEmail();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values, formikActions) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/forgot-password`,
        { email: values.email },
        { withCredentials: true }
      );
      formikActions.setSubmitting(false);
      const response = res.data;
      if (!response.success) {
        errorNotification(response.message);
      }
      if (response.success) {
        if (response.message === 'Unverified email') {
          errorNotification('You are yet to verify your email');
          setTimeout(async () => {
            const otpRes = await axios.post(
              `${process.env.REACT_APP_API_URL}/users/resend-verification-otp`,
              { userID: response.userID }
            );
            const otpResponse = otpRes.data;
            if (!otpResponse.success) {
              errorNotification(otpResponse.message);
            } else if (otpResponse.success) {
              successNotification(otpResponse.message);
              setTimeout(
                () =>
                  history('/verify-account', {
                    state: { userID: response.userID, type: 'user' },
                  }),
                2000
              );
            }
          }, 2000);
        } else {
          successNotification(response.message);
        }
      }
    } catch (error) {
      errorNotification(error.message);
    }
  };

  return (
    <>
      <TopHead pageTitle="Forgot password" />
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
        variant="security"
        eyebrow="Account recovery"
        heroTitle="Reset your investor password"
        heroSubtitle="We will email you a secure link to choose a new password. The link expires after a short time."
        formTitle="Forgot password"
        formSubtitle="Enter the email address associated with your investor account."
      >
        <CustomFormik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <div className="signup-bx">
            <label htmlFor="email">Email Address</label>
            <AppInput name="email" placeholder="Enter your email" />

            <div className="br" />
            <SubmitButton title="Send reset link" />

            <p className="option">
              Marketer or consultant?{' '}
              <Link to="/marketer-forgot-password">Use the marketer reset flow</Link>
            </p>
          </div>
        </CustomFormik>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default UserForgotPasswordPage;
