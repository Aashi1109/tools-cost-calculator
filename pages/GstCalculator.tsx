import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateGST } from '../lib/calculations';

export default function GstCalculator() {
  const [amount, setAmount] = useState<number>(1000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [isInclusive, setIsInclusive] = useState<boolean>(false);
  const [result, setResult] = useState({ basePrice: 0, gstAmount: 0, total: 0 });

  useEffect(() => {
    setResult(calculateGST(amount, gstRate, isInclusive));
  }, [amount, gstRate, isInclusive]);

  const handleAmountChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Amount (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={amount.toLocaleString('en-IN')} 
          onChange={(e) => handleAmountChange(e.target.value)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">GST Rate (%)</label>
        <div className="grid grid-cols-5 gap-2 mb-2">
          {[5, 12, 18, 28].map(r => (
             <button 
               key={r}
               type="button"
               onClick={() => setGstRate(r)}
               className={`py-2 rounded-md text-sm font-medium transition ${gstRate === r ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
             >
               {r}%
             </button>
          ))}
          <input 
             type="number"
             value={gstRate}
             onChange={(e) => setGstRate(Number(e.target.value))}
             className="w-full p-2 bg-white text-slate-900 text-center border border-slate-300 rounded-md focus:border-emerald-500 outline-none"
             placeholder="Custom"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Calculation Type</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              checked={!isInclusive} 
              onChange={() => setIsInclusive(false)}
              className="accent-emerald-600 w-5 h-5"
            />
            <span>GST Exclusive (Add GST)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              checked={isInclusive} 
              onChange={() => setIsInclusive(true)}
              className="accent-emerald-600 w-5 h-5"
            />
            <span>GST Inclusive (Remove GST)</span>
          </label>
        </div>
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Total Amount</p>
        <p className="text-4xl font-bold text-emerald-600">₹ {result.total.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="space-y-3 pt-4 border-t border-emerald-200">
        <div className="flex justify-between text-sm">
           <span className="text-slate-600">Base Price</span>
           <span className="font-semibold text-slate-900">₹ {result.basePrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between text-sm">
           <span className="text-slate-600">GST Amount ({gstRate}%)</span>
           <span className="font-semibold text-red-500">₹ {result.gstAmount.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );

  const seoContent = (
    <div>
      <h3>GST Calculator India</h3>
      <p>
        Goods and Services Tax (GST) is a destination-based tax on consumption of goods and services. 
        It is levied at all stages right from manufacture up to final consumption with credit of taxes paid at previous stages available as setoff.
      </p>
      <p>
        <strong>Forward GST:</strong> Adds GST to a base price. Useful for sellers issuing invoices. <br/>
        <strong>Reverse GST:</strong> Calculates base price from a total amount that already includes GST. Useful for buyers to know the actual cost of a product.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "What are the standard GST rates in India?",
      answer: "The primary slabs are 5%, 12%, 18%, and 28%. Gold is taxed at 3%."
    },
    {
      question: "How to calculate GST exclusive amount?",
      answer: "Formula: GST Amount = (Original Cost * GST Rate) / 100."
    },
    {
      question: "How to calculate GST inclusive amount?",
      answer: "Formula: GST Amount = Original Cost - [Original Cost / (1 + GST Rate/100)]."
    }
  ];

  return (
    <CalculatorLayout
      title="GST Calculator"
      description="Calculate GST inclusive and exclusive amounts instantly."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
}