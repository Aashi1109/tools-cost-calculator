import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateSalaryTax } from '../lib/calculations';

const SalaryCalculator: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    setResult(calculateSalaryTax(annualIncome));
  }, [annualIncome]);

  const handleIncomeChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setAnnualIncome(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">Annual CTC Income (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={annualIncome.toLocaleString('en-IN')} 
          onChange={(e) => handleIncomeChange(e.target.value)}
          className="w-full p-4 bg-white text-slate-900 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-bold text-xl"
        />
        <input 
          type="range" 
          min="300000" 
          max="10000000" 
          step="50000"
          value={annualIncome} 
          onChange={(e) => setAnnualIncome(Number(e.target.value))}
          className="w-full mt-4 accent-emerald-600"
        />
        <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase mt-1">
          <span>3L</span>
          <span>50L</span>
          <span>1Cr</span>
        </div>
      </div>
      
      <div className="p-4 bg-emerald-50 text-emerald-800 text-sm rounded-xl border border-emerald-100 flex gap-3 items-center">
        <span className="text-xl">📊</span>
        <p>Calculated for <strong>Assessment Year 2025-26</strong> (FY 2024-25) using the latest Union Budget provisions.</p>
      </div>
    </div>
  );

  const resultCard = result ? (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Monthly In-Hand Salary</p>
        <p className="text-5xl font-extrabold text-slate-900">₹ {result.monthlyInHand.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="space-y-4 pt-6 border-t border-emerald-200">
        <div className="flex justify-between items-center">
           <span className="text-sm font-medium text-slate-600">Income Tax (Annual)</span>
           <span className="text-lg font-bold text-red-600">₹ {result.annualTax.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between items-center">
           <span className="text-sm font-medium text-slate-600">Effective Tax Rate</span>
           <span className="px-2 py-1 bg-slate-100 rounded text-sm font-bold text-slate-900">{result.effectiveRate}%</span>
        </div>
         <div className="flex justify-between items-center">
           <span className="text-sm font-medium text-slate-600">Taxable Income</span>
           <span className="text-sm font-bold text-slate-900">₹ {result.taxableIncome.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <p className="text-[10px] text-center text-slate-400 italic">Note: Monthly in-hand excludes EPF/Professional Tax deductions which vary by company.</p>
    </div>
  ) : null;

  const seoContent = (
    <div className="space-y-6">
      <h2>In-Hand Salary Calculator India (FY 2024-25)</h2>
      <p>
        Are you trying to figure out how much salary you will actually take home? Our <strong>Salary After Tax Calculator</strong> is updated for the <strong>Union Budget 2024</strong> changes. 
        In India, your CTC (Cost to Company) is not what you see in your bank account. Deductions like Income Tax, Professional Tax, and EPF significantly impact your net pay.
      </p>

      <h3>New Tax Regime Highlights for AY 2025-26</h3>
      <p>
        The Government of India has made the <strong>New Tax Regime</strong> the default option. It features zero tax for income up to ₹7 Lakhs (thanks to Section 87A rebate) and an increased <strong>Standard Deduction of ₹50,000</strong> for salaried employees.
      </p>

      <h3>How to use the Income Tax Calculator?</h3>
      <ol>
        <li>Enter your <strong>Gross Annual Income</strong> (CTC minus variable components like bonus).</li>
        <li>Our tool automatically applies the ₹50,000 Standard Deduction.</li>
        <li>The tool calculates tax based on the 2024-25 slabs.</li>
        <li>View your monthly in-hand salary estimate instantly.</li>
      </ol>

      <h3>Why is my Take-Home Salary lower than expected?</h3>
      <p>
        Several factors reduce your net pay in the Indian payroll system:
      </p>
      <ul>
        <li><strong>Income Tax (TDS):</strong> Deducted monthly by your employer based on your projected annual income.</li>
        <li><strong>Employee Provident Fund (EPF):</strong> Usually 12% of your Basic + DA.</li>
        <li><strong>Professional Tax (PT):</strong> A small state-level tax (usually ₹200-₹2,500 per year).</li>
        <li><strong>Gratuity:</strong> A portion of your CTC that you only receive after 5 years of service.</li>
      </ul>
    </div>
  );

  const faqs = [
    {
      question: "Is income up to ₹7 Lakhs completely tax-free?",
      answer: "Yes, under the New Tax Regime (FY 2024-25), if your total income after standard deduction is below ₹7,00,000, you get a full rebate under Section 87A, resulting in zero tax."
    },
    {
      question: "What is the standard deduction for 2024-25?",
      answer: "For the Financial Year 2024-25, the standard deduction for salaried individuals and pensioners remains at ₹50,000 under both Old and New regimes."
    },
    {
      question: "Which regime is better: Old or New?",
      answer: "The New Regime offers lower tax rates but no deductions (like 80C, HRA). The Old Regime is better if you have high investments in ELSS, Home Loan Interest, and HRA. Our calculator focuses on the New Regime as it's the current default."
    },
    {
      question: "Does this include Professional Tax?",
      answer: "No, this calculator focuses on Central Income Tax. Professional tax varies by state (Maharashtra, Karnataka, etc.) and is usually a negligible amount (~₹200/month)."
    }
  ];

  return (
    <CalculatorLayout
      title="In-Hand Salary Calculator India"
      description="Calculate your monthly take-home salary after Income Tax deductions for FY 2024-25 (New Regime)."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
};

export default SalaryCalculator;