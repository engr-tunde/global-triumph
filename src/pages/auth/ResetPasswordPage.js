import { Col, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/img/reg-image.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
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
        console.log('Message: ', response.message);
        errorNotification(response.message);
      }
      if (response.success) {
        console.log('Message: ', response.message);
        successNotification(response.message);
        setTimeout(() => history(successUrl), 2500);
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
                <label htmlFor="password">New Password</label>
                <AppInput name="password" placeholder="Enter your new password" />

                <label htmlFor="confirmPassword">New Password</label>
                <AppInput name="confirmPassword" placeholder="Confirm your new password" />

                <div className="br" />
                <SubmitButton title="Update Account Password" />

                <p className="option">
                  Not a Marketer? <Link to="/forgot-password">Use this link instead</Link>
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

export default ResetPasswordPage;
