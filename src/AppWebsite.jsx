import { Routes, Route, Navigate } from "react-router-dom";

/* WEBSITE PAGES */
import Home from "./pages/WebDesign/HomeWithoutLogin.jsx";
import DashboardWeb from "./pages/WebDesign/HomeWithLogin.jsx";
import AboutUs from "./pages/WebDesign/AboutUs.jsx";
import ContactUs from "./pages/WebDesign/ContactUs.jsx";
import PropertyDetails from "./pages/WebDesign/PropertyDetails.jsx";
import BuyShares from "./pages/WebDesign/BuyShares.jsx";
import SellShares from "./pages/WebDesign/SellShares.jsx";

/* AUTH */
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

export default function AppWebsite() {
  return (
    <Routes>

      {/* WEBSITE ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/buy-shares" element={<BuyShares />} />
      <Route path="/sell-shares" element={<SellShares />} />

      {/* WEBSITE DASHBOARD (LOGIN REQUIRED) */}
      <Route
        path="/with-login"
        element={
          <ProtectedRoute>
            <DashboardWeb />
          </ProtectedRoute>
        }
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
