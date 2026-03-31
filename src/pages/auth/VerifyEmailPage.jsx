import { useLocation, useNavigate } from 'react-router-dom';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import TopHead from '../../components/general/TopHead';
import AppInputOTP from '../../components/general/form/AppInputOTP';
import AuthLayout from '../../components/auth/AuthLayout';

axios.defaults.withCredentials = true;

export const VerifyEmailPage = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const onChange = (value) => setOtp(value);
  const history = useNavigate();
  const location = useLocation();
  const userID = location.state.userID;
  const type = location.state.type;
  const [url, setUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [resendOTPUrl, setResendOTPUrl] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    if (type === 'marketer') {
      setUrl(`${process.env.REACT_APP_API_URL}/marketers/verify-email`);
      setResendOTPUrl(`${process.env.REACT_APP_API_URL}/marketers/resend-verification-otp`);
      setNextUrl('/marketer-login');
    } else {
      setUrl(`${process.env.REACT_APP_API_URL}/users/verify-email`);
      setResendOTPUrl(`${process.env.REACT_APP_API_URL}/users/resend-verification-otp`);
      setNextUrl('/login');
    }
  }, [type]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 0) {
      setError('OTP is missing');
    } else if (otp.length < 4) {
      setError('Incomplete token');
    } else {
      setError('');

      const res = await axios.post(url, {
        otp,
        userID,
      });
      const response = res.data;
      if (!response.success) {
        errorNotification(response.message);
      }
      if (response.success) {
        successNotification(response.message);
        setTimeout(() => history(nextUrl), 3000);
      }
    }
  };

  const resendOTP = async () => {
    const res = await axios.post(resendOTPUrl, { userID });
    const response = res.data;
    if (!response.success) {
      errorNotification(response.message);
    }
    if (response.success) {
      successNotification(response.message);
    }
  };

  const variant = type === 'marketer' ? 'marketer' : 'investor';

  return (
    <>
      <TopHead pageTitle="Verify your account" />
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
        variant={variant}
        eyebrow="Almost there"
        heroTitle="Confirm your email"
        heroSubtitle="Enter the one-time code we sent to your inbox. It helps us keep your account secure."
        formTitle="Verify your email"
        formSubtitle="Type the 4-digit code from your email."
      >
        <form onSubmit={handleSubmit}>
          <div className="signup-bx">
            <label htmlFor="otp">One-time code</label>
            <AppInputOTP name="otp" value={otp} valueLength={4} onChange={onChange} />
            <span className="error">{error}</span>

            <div className="br" />
            <button type="submit">Verify account</button>

            <p className="option">
              Didn&apos;t receive a code?{' '}
              <button type="button" className="auth-resend" onClick={resendOTP}>
                Resend code
              </button>
            </p>
          </div>
        </form>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default VerifyEmailPage;
