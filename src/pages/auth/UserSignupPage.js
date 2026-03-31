import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
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
    console.log('referredBy', referredBy);
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
      console.log('Message: ', response.message);
      errorNotification(response.message);
    }
    if (response.success) {
      console.log('Message: ', response.message);
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
              <span>Create an account today</span>
            </p>
          </Col>
          <Col sm={12} lg={6} className="signup-right">
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
                <AppInput name="password" type="password" placeholder="Set account password" />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <AppInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm account password"
                />

                <div className="br" />
                <SubmitButton title="Sign Up" />

                <div className="signup-option">
                  <span>
                    Already have an account? <Link to="/login">Sign in</Link>
                  </span>
                  <Link to="#">Forgot password?</Link>
                </div>
                <p className="option">
                  Want to start earning?{' '}
                  <Link to="/marketer-signup">Create a Marketer account</Link>
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

export default UserSignupPage;
