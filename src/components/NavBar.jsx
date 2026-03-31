import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'react-bootstrap-icons';
import logo from '../assets/img/logo.png';
import apple from '../assets/img/apple-icon.png';
import play from '../assets/img/play-icon.png';
import axios from 'axios';
import useFetchWithCred from '../hooks/useFetcheWithCredentials';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

const pathActive = (pathname, prefix) => {
  if (prefix === '/') return pathname === '/';
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
};

export const NavBar = () => {
  const history = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [scrolled, setScrolled] = useState(false);
  let message;
  const successNotification = (msg) => toast.success(msg);
  const errorNotification = (msg) => toast.error(msg);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggoutUrl, setLoggoutUrl] = useState('');
  const [dashboardUrl, setDashboardUrl] = useState('');

  const { data: userData } = useFetchWithCred(`${process.env.REACT_APP_API_URL}/users/dashboard`);
  const { data: marketerData } = useFetchWithCred(
    `${process.env.REACT_APP_API_URL}/marketers/dashboard`
  );
  const { data: adminData } = useFetchWithCred(`${process.env.REACT_APP_API_URL}/team/dashboard`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
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
    setIsLoggedIn(Boolean(userData || marketerData || adminData));
  }, [userData, marketerData, adminData]);

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

  const resourcesOpen =
    pathActive(pathname, '/faq') ||
    pathActive(pathname, '/learn') ||
    pathActive(pathname, '/industry-news');

  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      fixed="top"
      className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : 'site-navbar--top'}`}
    >
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

      <Container fluid className="site-navbar__inner">
        <Navbar.Brand as={Link} to="/" className="site-navbar__brand">
          <img src={logo} alt="Global Triumph — Home" width={120} height={48} />
        </Navbar.Brand>

        <Navbar.Toggle
          className="site-navbar__toggler"
          aria-controls="site-navbar-collapse"
          aria-label="Open menu"
        />

        <Navbar.Collapse id="site-navbar-collapse" className="site-navbar__collapse">
          <Nav className="site-navbar__nav">
            <Nav.Link
              as={Link}
              to="/"
              eventKey="1"
              className={`site-nav-link ${pathActive(pathname, '/') ? 'site-nav-link--active' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              eventKey="2"
              className={`site-nav-link ${pathActive(pathname, '/about') ? 'site-nav-link--active' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              eventKey="3"
              className={`site-nav-link ${
                pathActive(pathname, '/projects') || pathname.startsWith('/project-details')
                  ? 'site-nav-link--active'
                  : ''
              }`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/investments"
              eventKey="4"
              className={`site-nav-link ${pathActive(pathname, '/investments') ? 'site-nav-link--active' : ''}`}
            >
              Investments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              eventKey="5"
              className={`site-nav-link ${
                pathActive(pathname, '/shop') || pathname.startsWith('/list-details')
                  ? 'site-nav-link--active'
                  : ''
              }`}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              eventKey="6"
              className={`site-nav-link ${pathActive(pathname, '/contact') ? 'site-nav-link--active' : ''}`}
            >
              Contact
            </Nav.Link>

            <NavDropdown
              title={
                <span className="site-navbar__dropdown-label">
                  Resources
                  <ChevronDown className="site-navbar__dropdown-caret" aria-hidden />
                </span>
              }
              id="site-nav-resources"
              className={`site-navbar__dropdown ${resourcesOpen ? 'site-navbar__dropdown--current' : ''}`}
              align="end"
            >
              <NavDropdown.Item as={Link} to="/faq" eventKey="7">
                FAQs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/learn" eventKey="8">
                Learn
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/industry-news" eventKey="9">
                Real Estate News
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="site-navbar__aside">
            <div className="site-navbar__stores">
              <a
                className="site-navbar__store-btn"
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store"
              >
                <img src={apple} alt="" width={20} height={20} />
              </a>
              <a
                className="site-navbar__store-btn"
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play"
              >
                <img src={play} alt="" width={20} height={20} />
              </a>
            </div>

            <div className="site-navbar__actions">
              {!isLoggedIn && (
                <Link to="/login" className="site-nav-pill site-nav-pill--primary">
                  Sign in
                </Link>
              )}
              {isLoggedIn && (
                <>
                  {dashboardUrl && (
                    <a
                      href={dashboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-nav-pill site-nav-pill--primary"
                    >
                      Dashboard
                    </a>
                  )}
                  <button type="button" className="site-nav-pill site-nav-pill--ghost" onClick={handleLogout}>
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
