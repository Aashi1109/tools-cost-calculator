import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateSIP } from '../lib/calculations';

const SipCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);
  const [result, setResult] = useState({ investedAmount: 0, estimatedReturns: 0, maturityValue: 0 });

  useEffect(() => {
    setResult(calculateSIP(monthlyInvestment, returnRate, years));
  }, [monthlyInvestment, returnRate, years]);

  const handleAmountChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setMonthlyInvestment(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={monthlyInvestment.toLocaleString('en-IN')} 
          onChange={(e) => handleAmountChange(e.target.value)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
        <input 
          type="range" 
          min="500" 
          max="100000" 
          step="500"
          value={monthlyInvestment} 
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          className="w-full mt-2 accent-emerald-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return Rate (% p.a)</label>
        <input 
          type="number" 
          value={returnRate} 
          onChange={(e) => setReturnRate(Number(e.target.value))}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Time Period (Years)</label>
        <input 
          type="number" 
          value={years} 
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
        />
        <input 
          type="range" 
          min="1" 
          max="30" 
          value={years} 
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full mt-2 accent-emerald-600"
        />
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Maturity Value</p>
        <p className="text-4xl font-bold text-emerald-600">₹ {result.maturityValue.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="space-y-3 pt-4 border-t border-emerald-200">
        <div className="flex justify-between text-sm">
           <span className="text-slate-600">Invested Amount</span>
           <span className="font-semibold text-slate-900">₹ {result.investedAmount.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between text-sm">
           <span className="text-slate-600">Est. Returns</span>
           <span className="font-semibold text-emerald-600">+ ₹ {result.estimatedReturns.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );

  const seoContent = (
    <div>
      <h3>Power of Compounding with SIP</h3>
      <p>
        A Systematic Investment Plan (SIP) allows you to invest small amounts periodically in mutual funds. 
        It is one of the most effective ways to build wealth over the long term due to the power of compounding.
      </p>
      <p>
        This <strong>SIP Calculator</strong> helps investors estimate the potential returns on their mutual fund investments. 
        Adjust the expected rate of return based on whether you are investing in Equity (12-15%), Debt (7-9%), or Hybrid funds.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "Can I change my SIP amount later?",
      answer: "Yes, most fund houses allow you to increase or decrease your SIP amount (Step-up SIP)."
    },
    {
      question: "Are SIP returns guaranteed?",
      answer: "No, mutual fund investments are subject to market risks. The returns shown here are estimates based on your input."
    },
    {
      question: "Is SIP better than lump sum?",
      answer: "SIP helps average out the cost of buying (Rupee Cost Averaging) and is generally less risky for new investors compared to lump sum."
    }
  ];

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Estimate the future value of your Systematic Investment Plan."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
};

export default SipCalculator;