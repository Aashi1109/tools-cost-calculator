import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EmiCalculator from "./pages/EmiCalculator";
import CreditCardCalculator from "./pages/CreditCardCalculator";
import SipCalculator from "./pages/SipCalculator";
import GstCalculator from "./pages/GstCalculator";
import SalaryCalculator from "./pages/SalaryCalculator";
import FreelanceCalculator from "./pages/FreelanceCalculator";
import UpiCalculator from "./pages/UpiCalculator";
import CreditScoreGuide from "./pages/CreditScoreGuide";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi-calculator" element={<EmiCalculator />} />
          <Route
            path="/credit-card-interest-calculator"
            element={<CreditCardCalculator />}
          />
          <Route path="/sip-calculator" element={<SipCalculator />} />
          <Route path="/gst-calculator" element={<GstCalculator />} />
          <Route
            path="/salary-after-tax-india"
            element={<SalaryCalculator />}
          />
          <Route
            path="/freelance-hourly-rate-calculator"
            element={<FreelanceCalculator />}
          />
          <Route
            path="/upi-transaction-fee-calculator"
            element={<UpiCalculator />}
          />
          <Route
            path="/free-cibil-score-guide"
            element={<CreditScoreGuide />}
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
