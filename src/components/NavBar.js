import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import apple from '../assets/img/apple-icon.png';
import play from '../assets/img/play-icon.png';
import axios from 'axios';
import useFetchWithCred from '../hooks/useFetcheWithCredentials';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

export const NavBar = () => {
  const history = useNavigate();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  let message;
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggoutUrl, setLoggoutUrl] = useState('');
  const [dashboardUrl, setDashboardUrl] = useState('');

  // const { isLoggedIn, user, loading, error } = useSelector((state) => state.auth);

  const { data: userData } = useFetchWithCred(`${process.env.REACT_APP_API_URL}/users/dashboard`);
  const { data: marketerData } = useFetchWithCred(
    `${process.env.REACT_APP_API_URL}/marketers/dashboard`
  );
  const { data: adminData } = useFetchWithCred(`${process.env.REACT_APP_API_URL}/team/dashboard`);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (userData) {
      setLoggoutUrl(`${process.env.REACT_APP_API_URL}/users/logout`);
      setDashboardUrl(process.env.REACT_APP_USER_DASHBOARD_URL);
    } else if (marketerData) {
      setLoggoutUrl(`${process.env.REACT_APP_API_URL}/marketers/logout`);
      setDashboardUrl(process.env.REACT_APP_MARKETER_DASHBOARD_URL);
    } else if (adminData) {
      setLoggoutUrl(`${process.env.REACT_APP_API_URL}/teams/logout`);
      setDashboardUrl(process.env.REACT_APP_ADMIN_DASHBOARD_URL);
    }
  }, [userData, marketerData, adminData]);

  useEffect(() => {
    if (userData || marketerData || adminData) {
      setIsLoggedIn(true);
    }
  }, [userData, marketerData, adminData]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleLogout = () => {
    axios
      .post(loggoutUrl, null, {
        withCredentials: true,
      })
      .then((res) => {
        message = res.data.message;
        console.log(message);
        if (res.status === 200) {
          successNotification(message);
          window.location.reload();
          setTimeout(() => history('/'), 300);
        } else {
          errorNotification(message);
        }
      })
      .catch((err) => {
        errorNotification(err);
      });
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
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

      <Container className="container ">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="sm-dark">
          <Nav className="me-auto align-items-center">
            <Link
              to="/"
              className={activeLink === 'home' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={activeLink === 'about' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={activeLink === 'services' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('services')}
            >
              Projects
            </Link>
            <Link
              to="/investments"
              className={activeLink === 'projects' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Investments
            </Link>
            <Link
              to="/shop"
              className={activeLink === 'listings' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('listings')}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className={activeLink === 'contact' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Link>
            <NavDropdown
              title="Resources"
              id="basic-nav-dropdown"
              className={activeLink === 'resources' ? 'navbar-link active' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('resources')}
            >
              <NavDropdown.Item>
                <Link
                  to="/faq"
                  className={
                    activeLink === 'resources' ? 'navbar-drop-link active' : 'navbar-drop-link'
                  }
                  onClick={() => onUpdateActiveLink('resources')}
                >
                  FAQs
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/learn"
                  className={
                    activeLink === 'resources' ? 'navbar-drop-link active' : 'navbar-drop-link'
                  }
                  onClick={() => onUpdateActiveLink('resources')}
                >
                  Learn
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/industry-news"
                  className={
                    activeLink === 'resources' ? 'navbar-drop-link active' : 'navbar-drop-link'
                  }
                  onClick={() => onUpdateActiveLink('resources')}
                >
                  Real Estate News
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span className="navbar-text">
            <div className="action-buttons">
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="signup">
                    <span>LOGIN</span>
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Link onClick={handleLogout} to={dashboardUrl} className="dashboard signup">
                    <span>DASHBOARD</span>
                  </Link>
                  <Link onClick={handleLogout} to="/" className="login" target="_blank">
                    <span>LOGOUT</span>
                  </Link>
                </>
              )}
            </div>
            <div className="social-icon">
              <Link to="#">
                <img src={apple} alt=""></img>
              </Link>
              <Link to="#">
                <img src={play} alt=""></img>
              </Link>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
