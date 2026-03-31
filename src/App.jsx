import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteWideJsonLd from './components/seo/SiteWideJsonLd';
import { NavBar } from './components/NavBar';
import Home from './pages/home';
import Faq from './pages/Faq';
import Contact from './pages/contact';
import About from './pages/about';
import Careers from './pages/careers';
import CareerDetails from './pages/careers/CareerDetails';
import Investments from './pages/investments';
import Projects from './pages/projects';
import ProjectDetails from './pages/projects/ProjectDetails';
import Listings from './pages/shop/Listings';
import ListDetails from './pages/shop/ListDetails';
import Learn from './pages/posts/Learn';
import IndustryNews from './pages/posts/IndustryNews';
import UserSignupPage from './pages/auth/UserSignupPage';
import UserLoginPage from './pages/auth/UserLoginPage';
import { Footer } from './components/Footer';
import ProductUpdates from './pages/ProductUpdates';
import InvestmentUpdates from './pages/posts/InvestmentUpdates';
import PostSingle from './pages/posts/PostSingle';
import NotFound from './pages/404';
import Gallery from './pages/gallery';
import GalleryDetails from './pages/gallery/GalleryDetails';
import Services from './pages/services';
import TermsAndConditions from './pages/terms';
// import { useSelector } from 'react-redux';
import AdminSignin from './pages/admin/AdminSignin';
import PrivacyPolicy from './pages/privacy-policy';
import Visa from './pages/visa';
import VisaOpportunities from './pages/posts/VisaOpportunities';
import MarketerSigninPage from './pages/auth/MarketerSigninPage';
import VerifyEmailPage from './pages/auth/VerifyEmailPage';
import MarketerSignupPage from './pages/auth/MarketerSignupPage';
import MarketerForgotPassword from './pages/auth/MarketerForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import UserForgotPasswordPage from './pages/auth/UserForgotPasswordPage';

function App() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <SiteWideJsonLd />
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<UserSignupPage />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/marketer-signup" element={<MarketerSignupPage />} />
            <Route path="/marketer-login" element={<MarketerSigninPage />} />
            <Route path="/verify-account" element={<VerifyEmailPage />} />
            <Route path="/marketer-forgot-password" element={<MarketerForgotPassword />} />
            <Route path="/forgot-password" element={<UserForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/visa-processing" element={<Visa />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career-details/:careerID" element={<CareerDetails />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details/:projectID" element={<ProjectDetails />} />
            <Route path="/shop" element={<Listings />} />
            <Route path="/list-details/:listingID" element={<ListDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/event-gallery/:eventID" element={<GalleryDetails />} />

            <Route path="/learn" element={<Learn />} />
            <Route path="/visa-opportunities" element={<VisaOpportunities />} />
            <Route path="/post-details/:postUrl" element={<PostSingle />} />
            <Route path="/industry-news" element={<IndustryNews />} />
            <Route path="/product-updates" element={<ProductUpdates />} />
            <Route path="/investment-updates" element={<InvestmentUpdates />} />

            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/gtmpm-admin" element={<AdminSignin />} />

            {/* {isLoggedIn && <Route
              path="/welcome" element={<Welcome />}
            />} */}

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
