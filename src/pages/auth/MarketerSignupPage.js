import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
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
    console.log('referredBy', referredBy);
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
      console.log('Message: ', response.message);
      errorNotification(response.message);
    }
    if (response.success) {
      console.log('Message: ', response.message);
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
      <TopHead pageTitle="Sign up as a markter" />
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

                    <label htmlFor="lName">Gender</label>
                    <select
                      name=""
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
                    <p className="option">
                      Want to start earning? <Link to="/login">Create a Marketer account</Link>
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </section>
      <FooterContact />
    </>
  );
};

export default MarketerSignupPage;
