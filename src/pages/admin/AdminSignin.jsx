import FooterContact from '../../components/FooterContact';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import TopHead from '../../components/general/TopHead';
import AuthLayout from '../../components/auth/AuthLayout';
import PasswordInput from '../../components/general/form/PasswordInput';

axios.defaults.withCredentials = true;

export const AdminSignin = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('Email is required'),
    password: yup
      .string()
      .required('Account Password is required')
      .min(8, 'Password must not be less than 8 characters'),
  });

  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);

  const handleSubmit = (values) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/team/login`,
        {
          email: values.email,
          password: values.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        const message = res.data.message;
        if (res.status === 200) {
          successNotification(message);
          setTimeout(
            () => window.location.replace(`${process.env.REACT_APP_ADMIN_DASHBOARD_URL}`),
            1500
          );
        } else {
          errorNotification(message);
        }
      })
      .catch((err) => {
        errorNotification(err);
      });
  };

  return (
    <>
      <TopHead pageTitle="Admin sign in" />
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
        eyebrow="Internal"
        heroTitle="Team dashboard access"
        heroSubtitle="Sign in with your authorized Global Triumph credentials. Sessions are monitored and encrypted."
        formTitle="Admin sign in"
        formSubtitle="For authorized personnel only."
      >
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="signup-bx">
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

                <label htmlFor="password">Password</label>
                <PasswordInput
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="span" className="error" />

                <div className="br" />
                <button type="submit">Sign in</button>
              </div>
            </form>
          )}
        </Formik>
      </AuthLayout>
      <FooterContact />
    </>
  );
};

export default AdminSignin;
