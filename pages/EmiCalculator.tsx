import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateEMI } from '../lib/calculations';

const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [rate, setRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(20);
  const [result, setResult] = useState({ emi: 0, totalInterest: 0, totalPayment: 0 });

  useEffect(() => {
    setResult(calculateEMI(loanAmount, rate, tenure));
  }, [loanAmount, rate, tenure]);

  const handleAmountChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setLoanAmount(numericValue);
    }
  };

  const form = (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount (Principal ₹)</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
          <input 
            type="text" 
            inputMode="numeric"
            value={loanAmount.toLocaleString('en-IN')} 
            onChange={(e) => handleAmountChange(e.target.value)}
            className="w-full pl-8 pr-4 py-4 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-bold text-xl"
          />
        </div>
        <input 
          type="range" 
          min="100000" 
          max="50000000" 
          step="100000"
          value={loanAmount} 
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="w-full mt-4 accent-emerald-600"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (% p.a)</label>
          <input 
            type="number" 
            step="0.1"
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full p-4 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Tenure (Years)</label>
          <input 
            type="number" 
            value={tenure} 
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full p-4 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-lg"
          />
        </div>
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Monthly Installment (EMI)</p>
        <p className="text-5xl font-extrabold text-slate-900">₹ {result.emi.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-emerald-200">
        <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
           <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Interest</p>
           <p className="text-sm font-bold text-slate-800">₹ {result.totalInterest.toLocaleString('en-IN')}</p>
        </div>
        <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
           <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Total Payable</p>
           <p className="text-sm font-bold text-slate-800">₹ {result.totalPayment.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );

  const seoContent = (
    <div className="space-y-6">
      <h2>Free Online EMI Calculator India (Home, Car & Personal Loans)</h2>
      <p>
        Planning to take a loan? Our <strong>EMI Calculator</strong> is a specialized financial tool designed for Indian borrowers to help them calculate their Equated Monthly Installment (EMI) quickly and accurately. Whether you're looking for an <strong>SBI Home Loan EMI</strong>, a car loan from HDFC, or a personal loan, this tool provides a clear breakdown of your monthly outgo.
      </p>

      <h3>How to Calculate EMI?</h3>
      <p>
        The EMI calculation depends on three primary variables:
      </p>
      <ul>
        <li><strong>Principal Loan Amount:</strong> The actual amount you wish to borrow from the bank.</li>
        <li><strong>Annual Interest Rate:</strong> The percentage charged by the lender (e.g., 8.5% for Home Loans).</li>
        <li><strong>Loan Tenure:</strong> The time period (in years or months) over which you will repay the loan.</li>
      </ul>

      <h3>Benefits of using an Online EMI Calculator</h3>
      <p>
        Calculating EMI manually using a formula can be prone to errors. Using an automated tool offers:
      </p>
      <ol>
        <li><strong>Instant Results:</strong> No complex math needed.</li>
        <li><strong>Financial Planning:</strong> Know exactly how much of your monthly income will go towards loan repayment.</li>
        <li><strong>Comparative Analysis:</strong> Easily compare different interest rates and tenures to find the most affordable option.</li>
      </ol>

      <h3>EMI Formula Used</h3>
      <p className="bg-slate-50 p-4 rounded-lg font-mono text-xs">
        EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
      </p>
      <p className="text-sm text-slate-500">
        Where P = Principal, R = Monthly Interest Rate, N = Number of Monthly Installments.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "Can I use this for SBI Home Loan calculations?",
      answer: "Yes, this calculator works for all major Indian banks including SBI, HDFC, ICICI, and Axis Bank for Home, Car, and Personal loans."
    },
    {
      question: "How can I reduce my monthly EMI?",
      answer: "You can reduce your EMI by choosing a longer loan tenure, making a higher down payment, or opting for a loan with a lower interest rate."
    },
    {
      question: "What is the difference between Flat and Reducing balance rates?",
      answer: "A flat rate calculates interest on the original principal throughout the tenure. A reducing rate (which most Indian banks use) calculates interest on the outstanding principal after each repayment."
    },
    {
      question: "Is pre-payment fee included?",
      answer: "No, this calculator only provides the standard EMI. Banks may charge 2-4% for pre-payments on fixed-rate loans."
    }
  ];

  return (
    <CalculatorLayout
      title="EMI Calculator Online India"
      description="The most accurate tool to calculate monthly EMIs for Home, Car, or Personal loans based on current Indian bank interest rates."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
};

export default EmiCalculator;