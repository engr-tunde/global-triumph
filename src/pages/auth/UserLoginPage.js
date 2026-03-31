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
import { userLoginValues } from '../../utils/initialValues';
import { validateUserLogin } from '../../utils/validateValues';
import CustomFormik from '../../utils/CustomFormik';
import AppInput from '../../components/general/form/AppInput';
import SubmitButton from '../../components/general/form/SubmitButton';
import useFetchWithCred from '../../hooks/useFetcheWithCredentials';
axios.defaults.withCredentials = true;

export const UserLoginPage = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const initialValues = userLoginValues();
  const validationSchema = validateUserLogin();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const { data } = useFetchWithCred(`${process.env.REACT_APP_API_URL}/users/dashboard`);

  useEffect(() => {
    if (data) {
      if (data.type === 'user') {
        window.location.replace(`${process.env.REACT_APP_USER_DASHBOARD_URL}`);
      } else if (data.type === 'marketer') {
        window.location.replace(`${process.env.REACT_APP_MARKETER_DASHBOARD_URL}`);
      }
    }
  }, [data]);

  const handleSubmit = async (values, formikActions) => {
    console.log('login attempt started');
    // dispatch(loginStart());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          email: values.email,
          password: values.password,
        },
        { withCredentials: true }
      );
      // formikActions.setSubmitting(false);
      const response = res.data;
      console.log('response: ', response);
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
          // dispatch(loginSuccess(response?.user));
          successNotification(response.message);
          setTimeout(
            () => window.location.replace(`${process.env.REACT_APP_USER_DASHBOARD_URL}`),
            1500
          );
        }
      }
    } catch (error) {
      // dispatch(loginFailure(error.message));
      errorNotification(error.message);
    }
  };

  return (
    <>
      <TopHead pageTitle="Sign in " />
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
            <CustomFormik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <div className="signup-bx">
                <label htmlFor="email">Email Address</label>
                <AppInput name="email" placeholder="Enter your email" />

                <label htmlFor="password">Password</label>
                <AppInput name="password" type="password" placeholder="Enter account password" />

                <div className="br" />
                <SubmitButton title="Sign In" />

                <div className="signup-option">
                  <span>
                    Don't have an account? <Link to="/signup">Register</Link>
                  </span>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
                <p className="option">
                  Marketer? <Link to="/marketer-login">Login to your Marketer account</Link>
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

export default UserLoginPage;
