import { Link, useLocation, useNavigate } from 'react-router-dom';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import TopHead from '../../components/general/TopHead';
import { userLoginValues } from '../../utils/initialValues';
import { validateResetPassword } from '../../utils/validateValues';
import CustomFormik from '../../utils/CustomFormik';
import AppInput from '../../components/general/form/AppInput';
import SubmitButton from '../../components/general/form/SubmitButton';
import AuthLayout from '../../components/auth/AuthLayout';

axios.defaults.withCredentials = true;

export const ResetPasswordPage = () => {
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const userID = queryParams.get('userID');
  const type = queryParams.get('type');
  const [url, setUrl] = useState('');
  const [successUrl, setSuccessUrl] = useState('');
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (type === 'marketer') {
      setUrl(`${process.env.REACT_APP_API_URL}/marketers/reset-password`);
      setSuccessUrl('/marketer-login');
    } else if (type === 'user') {
      setUrl(`${process.env.REACT_APP_API_URL}/users/reset-password`);
      setSuccessUrl('/login');
    }
  }, [type]);

  const initialValues = userLoginValues();
  const validationSchema = validateResetPassword();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (values, formikActions) => {
    try {
      const res = await axios.post(url, { password: values.password, token, userID });
      formikActions.setSubmitting(false);
      const response = res.data;
      if (!response.success) {
        errorNotification(response.message);
      }
      if (response.success) {
        successNotification(response.message);
        setTimeout(() => history(successUrl), 2500);
      }
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const isMarketer = type === 'marketer';

  return (
    <>
      <TopHead pageTitle="Set new password" />
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
        eyebrow="Password reset"
        heroTitle="Choose a strong new password"
        heroSubtitle="Use a unique password you do not reuse on other sites. You will sign in with it on the next step."
        formTitle="Create new password"
        formSubtitle="Enter and confirm your new password below."
      >
        <CustomFormik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <div className="signup-bx">
            <label htmlFor="password">New password</label>
            <AppInput
              name="password"
              type="password"
              placeholder="Enter your new password"
              autoComplete="new-password"
            />

            <label htmlFor="confirmPassword">Confirm new password</label>
            <AppInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              autoComplete="new-password"
            />

            <div className="br" />
            <SubmitButton title="Update password" />

            {isMarketer ? (
              <p className="option">
                Resetting an investor account?{' '}
                <Link to="/forgot-password">Use the investor recovery flow</Link>
              </p>
            ) : (
              <p className="option">
                Resetting a marketer account?{' '}
                <Link to="/marketer-forgot-password">Use the marketer recovery flow</Link>
              </p>
            )}
          </div>
        </CustomFormik>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default ResetPasswordPage;
