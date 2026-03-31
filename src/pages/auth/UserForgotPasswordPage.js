import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
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
        console.log('Message: ', response.message);
        errorNotification(response.message);
      }
      if (response.success) {
        console.log('Message: ', response.message);
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
      <TopHead pageTitle="Forgot password " />
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
              Start earning incredible commissions as a marketer on Global Triumph
              <span>Request for a new password</span>
            </p>
          </Col>
          <Col sm={12} lg={6} className="signin-right">
            <CustomFormik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <div className="signup-bx">
                <label htmlFor="email">Email Address</label>
                <AppInput name="email" placeholder="Enter your email" />

                <div className="br" />
                <SubmitButton title="Send Password Reset Link" />

                <p className="option">
                  Are you a Marketer/Consultant?{' '}
                  <Link to="/marketer-forgot-password">Use this link instead</Link>
                </p>
              </div>
            </CustomFormik>
          </Col>
        </Row>
      </section>
      <FooterContact />
    </>
  );
};

export default UserForgotPasswordPage;
