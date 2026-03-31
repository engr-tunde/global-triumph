import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FooterContact from '../../components/FooterContact';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';
import { userSignupValues } from '../../utils/initialValues';
import { validateUserSignup } from '../../utils/validateValues';
import AppInput from '../../components/general/form/AppInput';

export const oldSignup = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const history = useNavigate();
  const initialValues = userSignupValues();
  const validationSchema = validateUserSignup();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = (values) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/signup`, {
        fName: values.fName,
        lName: values.lName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      })
      .then((res) => {
        if (res.status === 200) {
          successNotification('Successfully signed up! You can now login');
          setTimeout(() => history('/login'), 3000);
        } else if (res.data.message === 'User already exists') {
          errorNotification('This email has already been used');
        } else if (res.data.message === 'Unable to sign up') {
          errorNotification('Registration cannot be completed at this time');
        }
      })
      .catch((err) => {
        console.log(err);
        errorNotification();
      });
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
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
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

                  <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                  >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="signup-bx">
                          <label htmlFor="fName">First Name</label>
                          <AppInput name="fName" placeholder="Enter your first name" />
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
                            placeholder="Enter your first name"
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

                          <label htmlFor="tel">Phone Number</label>
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

                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            error={!!touched.password && !!errors.password}
                            helpertext={touched.password && errors.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Set account password"
                          />
                          <ErrorMessage name="password" component="span" className="error" />

                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Confirm account password"
                          />
                          <ErrorMessage name="confirmPassword" component="span" className="error" />

                          <div className="br" />
                          <button type="submit">Sign Up</button>

                          <div className="signup-option">
                            <span>
                              Already have an account? <Link to="/login">Sign in</Link>
                            </span>
                            <Link to="#">Forgot password?</Link>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </section>
      <FooterContact />
    </>
  );
};

export default oldSignup;
