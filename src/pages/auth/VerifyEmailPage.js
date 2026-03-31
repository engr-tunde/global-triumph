import { Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FooterContact from '../../components/FooterContact';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import TopHead from '../../components/general/TopHead';
import AppInputOTP from '../../components/general/form/AppInputOTP';

axios.defaults.withCredentials = true;

export const VerifyEmailPage = (userId, vals) => {
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
      console.log('OTP: ', otp);

      const res = await axios.post(url, {
        otp,
        userID,
      });
      const response = res.data;
      if (!response.success) {
        console.log('Message: ', response.message);
        errorNotification(response.message);
      }
      if (response.success) {
        console.log('Message: ', response.message);
        successNotification(response.message);
        setTimeout(() => history(nextUrl), 3000);
      }
    }
  };

  const resendOTP = async () => {
    const res = await axios.post(resendOTPUrl, { userID });
    const response = res.data;
    if (!response.success) {
      console.log('Message: ', response.message);
      errorNotification(response.message);
    }
    if (response.success) {
      console.log('Message: ', response.message);
      successNotification(response.message);
    }
  };

  return (
    <>
      <TopHead pageTitle="Verify Your Account" />
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
      <section className="signup-screen">
        <Row>
          <Col sm={12} lg={6} className="signup-left">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInLeft' : ''}>
                  <img src={registerImage} alt="Global Triumph Market Plus Multiconcept" />
                </div>
              )}
            </TrackVisibility>
            <p>
              Begin your journey as a smart Real Estate Investor
              <span>Sign in to your account</span>
            </p>
          </Col>
          <Col sm={12} lg={6} className="signin-right">
            <form onSubmit={handleSubmit}>
              <div className="signup-bx">
                <label htmlFor="email">Enter OTP</label>
                <AppInputOTP name="otp" value={otp} valueLength={4} onChange={onChange} />
                <span className="error">{error}</span>

                <div className="br" />
                <button type="submit">Verify Account</button>

                <p className="option">
                  Didn't receive an OTP?{' '}
                  <span style={{ color: '#bbd51a', fontWeight: 'bold' }} onClick={resendOTP}>
                    Resend OTP
                  </span>
                </p>
              </div>
            </form>
          </Col>
        </Row>
      </section>
      <FooterContact />
    </>
  );
};

export default VerifyEmailPage;
