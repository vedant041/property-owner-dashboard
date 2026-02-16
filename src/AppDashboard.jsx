import { Routes, Route, Navigate } from "react-router-dom";

import OwnerLayout from "./layout/PropertyOwner/Layout";
import OwnerDashboard from "./pages/PropertyOwner/Dashboard";
import OwnerProperties from "./pages/PropertyOwner/Properties";
import AddProperty from "./pages/PropertyOwner/AddProperty";
import Investors from "./pages/PropertyOwner/Investors";
import InvestorProfile from "./pages/PropertyOwner/InvestorProfile";
import InvestorInvestments from "./pages/PropertyOwner/InvestorInvestments";
import PropertyDetails from "./pages/PropertyOwner/PropertyDetails";

export default function AppDashboard() {
  return (
    <Routes>

      {/* MAIN DASHBOARD ROOT */}
      <Route path="/" element={<OwnerLayout />}>

        <Route index element={<OwnerDashboard />} />

        <Route path="properties" element={<OwnerProperties />} />
        <Route path="add-property" element={<AddProperty />} />

        {/* ⭐ MISSING ROUTE ADDED */}
        <Route path="property-details" element={<PropertyDetails />} />

        <Route path="investors" element={<Investors />} />

        <Route path="investor/:id" element={<InvestorProfile />} />
        <Route
          path="investor/:id/investments"
          element={<InvestorInvestments />}
        />

      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
