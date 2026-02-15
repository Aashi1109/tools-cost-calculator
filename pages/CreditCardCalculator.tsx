import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateCreditCardInterest } from '../lib/calculations';

export default function CreditCardCalculator() {
  const [outstanding, setOutstanding] = useState<number>(50000);
  const [monthlyRate, setMonthlyRate] = useState<number>(3.5);
  const [months, setMonths] = useState<number>(6);
  const [result, setResult] = useState({ totalInterest: 0, finalPayable: 0 });

  useEffect(() => {
    setResult(calculateCreditCardInterest(outstanding, monthlyRate, months));
  }, [outstanding, monthlyRate, months]);

  const handleAmountChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setOutstanding(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Outstanding Amount (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={outstanding.toLocaleString('en-IN')} 
          onChange={(e) => handleAmountChange(e.target.value)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Interest Rate (%)</label>
        <input 
          type="number" 
          step="0.1"
          value={monthlyRate} 
          onChange={(e) => setMonthlyRate(Number(e.target.value))}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
        />
        <p className="text-xs text-slate-500 mt-1">Typical rates are 3% - 4% per month.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Months Unpaid</label>
        <input 
          type="number" 
          value={months} 
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
        />
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Total Payment Required</p>
        <p className="text-4xl font-bold text-emerald-600">₹ {result.finalPayable.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="pt-4 border-t border-emerald-200">
        <p className="text-xs text-slate-500">Interest Cost Alone</p>
        <p className="text-2xl font-bold text-red-500">₹ {result.totalInterest.toLocaleString('en-IN')}</p>
        <p className="text-xs text-slate-400 mt-2">That's extra money lost!</p>
      </div>
    </div>
  );

  const seoContent = (
    <div>
      <h3>The Trap of Credit Card Interest</h3>
      <p>
        Credit cards have some of the highest interest rates in the financial market, often ranging from 36% to 48% annually (3-4% monthly). 
        The "Minimum Amount Due" is a trap that keeps you in debt while interest compounds on the balance.
      </p>
      <p>
        Use this <strong>Credit Card Interest Calculator</strong> to see how quickly debt snowballs if you don't clear your dues. 
        It assumes monthly compounding, which is standard for most Indian credit card issuers.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "How is credit card interest calculated?",
      answer: "It is calculated on the average daily balance and compounded monthly. Even a small balance can grow rapidly due to high rates."
    },
    {
      question: "What is the interest-free period?",
      answer: "It's a grace period (usually 45-50 days) where no interest is charged, provided you pay the previous bill in full."
    },
    {
      question: "Does paying minimum due stop interest?",
      answer: "No. Paying minimum due only avoids late fees. Interest is still charged on the remaining unpaid balance."
    }
  ];

  return (
    <CalculatorLayout
      title="Credit Card Interest Calculator"
      description="See the real cost of carrying a balance on your credit card."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
}