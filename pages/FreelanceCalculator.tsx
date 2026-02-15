import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateHourlyRate } from '../lib/calculations';

const FreelanceCalculator: React.FC = () => {
  const [desiredIncome, setDesiredIncome] = useState<number>(1200000);
  const [expenses, setExpenses] = useState<number>(200000);
  const [taxRate, setTaxRate] = useState<number>(10);
  const [hours, setHours] = useState<number>(1000);
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    setRate(calculateHourlyRate(desiredIncome, expenses, taxRate, hours));
  }, [desiredIncome, expenses, taxRate, hours]);

  const handleFormatChange = (val: string, setter: (n: number) => void) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setter(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Desired Annual Income (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={desiredIncome.toLocaleString('en-IN')} 
          onChange={(e) => handleFormatChange(e.target.value, setDesiredIncome)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Annual Business Expenses (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={expenses.toLocaleString('en-IN')} 
          onChange={(e) => handleFormatChange(e.target.value, setExpenses)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-2">Est. Tax Rate (%)</label>
           <input 
             type="number" 
             value={taxRate} 
             onChange={(e) => setTaxRate(Number(e.target.value))}
             className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
           />
        </div>
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-2">Billable Hours/Year</label>
           <input 
             type="number" 
             value={hours} 
             onChange={(e) => setHours(Number(e.target.value))}
             className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
           />
           <p className="text-xs text-slate-500 mt-1">~20 hrs/week * 50 weeks = 1000</p>
        </div>
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Suggested Hourly Rate</p>
        <p className="text-4xl font-bold text-emerald-600">₹ {rate.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="pt-4 border-t border-emerald-200 text-sm text-slate-600">
        <p>Charging this rate allows you to cover your expenses and taxes while hitting your net income goal.</p>
      </div>
    </div>
  );

  const seoContent = (
    <div>
      <h3>How much should you charge?</h3>
      <p>
        One of the hardest parts of freelancing is setting the right price. Many freelancers undervalue their work by forgetting to account for 
        taxes, software costs, hardware upgrades, and non-billable hours (marketing, admin work).
      </p>
      <p>
        This <strong>Freelance Hourly Rate Calculator</strong> works backward from your desired "take-home" pay. It adds your business expenses and 
        accounts for taxes (like TDS or GST) to give you a minimum viable hourly rate.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "How do I estimate billable hours?",
      answer: "A standard full-time job is ~2000 hours/year. As a freelancer, you spend time on sales/admin, so 1000-1200 billable hours is a safe estimate."
    },
    {
      question: "Should I charge hourly or fixed price?",
      answer: "It depends. Hourly is good for undefined scopes. Fixed price is better if you are efficient and can deliver value quickly."
    },
    {
      question: "Does this include GST?",
      answer: "No. If your turnover exceeds ₹20 Lakhs, you must charge 18% GST over and above this calculated rate."
    }
  ];

  return (
    <CalculatorLayout
      title="Freelance Rate Calculator"
      description="Determine your ideal hourly rate based on your income goals."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
};

export default FreelanceCalculator;