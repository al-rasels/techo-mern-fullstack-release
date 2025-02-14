import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category";
import ProductByKeyword from "./pages/product-by-keyword";
import ProductDetails from "./pages/product-details";
import AboutPage from "./pages/about-page";
import RefundPage from "./pages/refund-page";
import PrivacyPage from "./pages/privacy-page";
import TermsPage from "./pages/terms-page";
import HowToBuyPage from "./pages/how-to-buy-page";
import ContactPage from "./pages/contact-page";
import ComplainPage from "./pages/complain-page";
import LoginPage from "./pages/login-page";
import OTPPage from "./pages/otp-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/by-brand/:id" exact element={<ProductByBrand />} />
        <Route path="/by-category/:id" exact element={<ProductByCategory />} />
        <Route
          path="/by-keyword/:keyword"
          exact
          element={<ProductByKeyword />}
        />
        <Route path="/details/:id" exact element={<ProductDetails />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/refund" exact element={<RefundPage />} />
        <Route path="/privacy" exact element={<PrivacyPage />} />
        <Route path="/terms" exact element={<TermsPage />} />
        <Route path="/how-to-buy" exact element={<HowToBuyPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/complain" exact element={<ComplainPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/otp" exact element={<OTPPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
