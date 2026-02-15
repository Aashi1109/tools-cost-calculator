import React from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../components/AdPlaceholder';

const calculators = [
  {
    path: '/emi-calculator',
    title: 'EMI Calculator',
    desc: 'Calculate monthly EMIs for Home, Car, or Personal loans.',
    icon: '🏠'
  },
  {
    path: '/salary-after-tax-india',
    title: 'Salary After Tax',
    desc: 'New Regime 2024-25. Find your monthly in-hand salary.',
    icon: '💰'
  },
  {
    path: '/free-cibil-score-guide',
    title: 'Free CIBIL Score',
    desc: 'Check where to get it for free and estimate your health.',
    icon: '🛡️'
  },
  {
    path: '/sip-calculator',
    title: 'SIP Calculator',
    desc: 'Estimate returns on your monthly mutual fund investments.',
    icon: '📈'
  },
  {
    path: '/gst-calculator',
    title: 'GST Calculator',
    desc: 'Calculate GST inclusive and exclusive amounts instantly.',
    icon: '🧾'
  },
  {
    path: '/credit-card-interest-calculator',
    title: 'Credit Card Interest',
    desc: 'Find out the real cost of paying only minimum due.',
    icon: '💳'
  },
  {
    path: '/freelance-hourly-rate-calculator',
    title: 'Freelance Rate',
    desc: 'Determine your hourly rate based on income goals.',
    icon: '💻'
  },
  {
    path: '/upi-transaction-fee-calculator',
    title: 'UPI Fees',
    desc: 'Check fees for commercial or high-value UPI transactions.',
    icon: '📱'
  }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Real Cost Calculator <span className="text-emerald-600">India</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Financial clarity for everyone. No hidden formulas, no complex jargon. Just accurate numbers for your Indian financial life.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link 
            key={calc.path} 
            to={calc.path}
            className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all duration-200 flex flex-col"
          >
            <div className="w-12 h-12 bg-emerald-50 text-2xl flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
              {calc.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{calc.title}</h3>
            <p className="text-slate-500 mb-4 flex-grow">{calc.desc}</p>
            <div className="text-emerald-600 font-semibold text-sm flex items-center">
              Calculate Now <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* <AdPlaceholder className="h-[120px]" label="Inline Homepage Ad" /> */}

      {/* Minimal SEO */}
      <div className="prose prose-slate max-w-none text-center mx-auto">
        <h2 className="text-2xl font-bold">Why use Real Cost Calculator India?</h2>
        <p>
          Managing finances in India can be complex with changing tax regimes, intricate loan structures, and varied investment options like SIPs. 
          Real Cost Calculator brings you a suite of essential tools designed specifically for the Indian context. 
          Whether you are planning to buy a home, understanding your new salary structure under the 2024-25 regime, or freelancing, 
          we provide the transparency you need to make smart money decisions.
        </p>
      </div>
    </div>
  );
};

export default Home;