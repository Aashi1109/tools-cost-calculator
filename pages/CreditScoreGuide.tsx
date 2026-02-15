import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateCreditHealth } from '../lib/calculations';

const CreditScoreGuide: React.FC = () => {
  const [payments, setPayments] = useState<number>(100);
  const [utilization, setUtilization] = useState<number>(25);
  const [age, setAge] = useState<number>(5);
  const [inquiries, setInquiries] = useState<number>(0);
  const [result, setResult] = useState({ score: 750, label: 'Excellent', color: 'text-emerald-600' });

  useEffect(() => {
    setResult(calculateCreditHealth(payments, utilization, age, inquiries));
  }, [payments, utilization, age, inquiries]);

  const form = (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2 flex justify-between">
          <span>On-time Payment History</span>
          <span className="font-bold text-emerald-600">{payments}%</span>
        </label>
        <input 
          type="range" 
          min="50" 
          max="100" 
          value={payments} 
          onChange={(e) => setPayments(Number(e.target.value))}
          className="w-full accent-emerald-600"
        />
        <p className="text-xs text-slate-500 mt-1">This accounts for 35% of your total score.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2 flex justify-between">
          <span>Credit Utilization (Used vs Limit)</span>
          <span className={`font-bold ${utilization > 50 ? 'text-red-500' : 'text-emerald-600'}`}>{utilization}%</span>
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={utilization} 
          onChange={(e) => setUtilization(Number(e.target.value))}
          className="w-full accent-emerald-600"
        />
        <p className="text-xs text-slate-500 mt-1">Keep this below 30% for a high score.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Credit Age (Years)</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Recent Inquiries (6mo)</label>
          <input 
            type="number" 
            value={inquiries} 
            onChange={(e) => setInquiries(Number(e.target.value))}
            className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Estimated Credit Health</p>
        <p className={`text-5xl font-extrabold ${result.color}`}>{result.score}</p>
        <p className={`text-xl font-semibold mt-2 ${result.color}`}>{result.label}</p>
      </div>
      
      <div className="pt-6 border-t border-emerald-200">
        <h4 className="text-sm font-bold text-slate-800 mb-4">How to get your real CIBIL score:</h4>
        <div className="space-y-3">
          <a href="https://www.cibil.com/freecreditscore/" target="_blank" rel="noopener" className="block w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition">Official CIBIL (Free 1x/Year)</a>
          <a href="https://www.onescore.app/" target="_blank" rel="noopener" className="block w-full py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">OneScore App (Free Monthly)</a>
        </div>
      </div>
    </div>
  );

  const seoContent = (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold">Why your CIBIL Score matters?</h3>
        <p>
          In India, your CIBIL score is a 3-digit number (300-900) that summarizes your credit history. 
          A score of <strong>750 or above</strong> is generally considered excellent and helps you get lower interest rates on Home and Car loans.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold">What impacts your score?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Payment History (35%):</strong> Most critical factor. Even one late payment can drop your score.</li>
          <li><strong>Credit Utilization (30%):</strong> How much of your limit you use. High utilization suggests credit hunger.</li>
          <li><strong>Credit Age (15%):</strong> Older accounts are better as they show a long track record.</li>
          <li><strong>Credit Mix & Inquiries (20%):</strong> Hard inquiries (applying for many cards/loans) temporary lower your score.</li>
        </ul>
      </section>
    </div>
  );

  const faqs = [
    {
      question: "Does checking my own score reduce it?",
      answer: "No. Checking your own score is a 'Soft Inquiry' and has zero impact on your CIBIL score."
    },
    {
      question: "How can I improve my score quickly?",
      answer: "Pay your dues on time, keep your credit card utilization below 30%, and avoid applying for too many credit cards in a short period."
    },
    {
      question: "What is a good CIBIL score for a Home Loan?",
      answer: "Most banks in India prefer a score of 750+. Scores above 800 may even qualify you for special interest rate discounts."
    }
  ];

  return (
    <CalculatorLayout
      title="Free CIBIL Score Guide"
      description="Estimate your credit health and learn where to get your official report for free."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
};

export default CreditScoreGuide;