import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              ₹
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">Real Cost <span className="text-emerald-600">India</span></span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-emerald-600 transition-colors">All Calculators</Link>
            <Link to="/salary-after-tax-india" className="hover:text-emerald-600 transition-colors">Salary</Link>
            <Link to="/emi-calculator" className="hover:text-emerald-600 transition-colors">EMI</Link>
          </nav>
        </div>
      </header>

      {/* Top Ad */}
      {/* 
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto px-4 py-4">
           <AdPlaceholder className="h-[90px] w-full max-w-[728px] mx-auto" label="Top Banner Ad (728x90)" />
        </div>
      </div>
      */}

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1100px] mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
             <div>
                <h3 className="text-white font-bold mb-4">Real Cost Calculator India</h3>
                <p className="text-sm leading-relaxed">
                  Simplifying financial decisions for Indians. Accurate, fast, and free tools to calculate EMIs, Taxes, Investments, and more.
                </p>
             </div>
             <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                   <li><Link to="/emi-calculator" className="hover:text-white">EMI Calculator</Link></li>
                   <li><Link to="/sip-calculator" className="hover:text-white">SIP Calculator</Link></li>
                   <li><Link to="/gst-calculator" className="hover:text-white">GST Calculator</Link></li>
                </ul>
             </div>
             <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                   <li><span className="cursor-pointer hover:text-white">Privacy Policy</span></li>
                   <li><span className="cursor-pointer hover:text-white">Terms of Use</span></li>
                   <li><span className="cursor-pointer hover:text-white">Disclaimer</span></li>
                </ul>
             </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p className="mb-2">Disclaimer: These calculators are for informational purposes only. Please consult a financial advisor for professional advice.</p>
            <p>&copy; {new Date().getFullYear()} Real Cost Calculator India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;