import React, { useState, useEffect } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import { calculateUpiFee } from '../lib/calculations';

export default function UpiCalculator() {
  const [amount, setAmount] = useState<number>(2500);
  const [feePercent, setFeePercent] = useState<number>(1.1);
  const [result, setResult] = useState({ fee: 0, finalAmount: 0 });

  useEffect(() => {
    setResult(calculateUpiFee(amount, feePercent));
  }, [amount, feePercent]);

  const handleAmountChange = (val: string) => {
    const numericValue = Number(val.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    }
  };

  const form = (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Transaction Amount (₹)</label>
        <input 
          type="text" 
          inputMode="numeric"
          value={amount.toLocaleString('en-IN')} 
          onChange={(e) => handleAmountChange(e.target.value)}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Merchant Fee / Interchange Fee (%)</label>
        <input 
          type="number" 
          step="0.01"
          value={feePercent} 
          onChange={(e) => setFeePercent(Number(e.target.value))}
          className="w-full p-3 bg-white text-slate-900 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
        />
        <p className="text-xs text-slate-500 mt-1">Interchange fees for PPI wallets are roughly 1.1% for > ₹2000.</p>
      </div>
    </div>
  );

  const resultCard = (
    <div className="space-y-6 text-center">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Amount Received</p>
        <p className="text-4xl font-bold text-emerald-600">₹ {result.finalAmount.toLocaleString('en-IN')}</p>
      </div>
      
      <div className="pt-4 border-t border-emerald-200">
        <p className="text-xs text-slate-500">Transaction Fee</p>
        <p className="text-xl font-bold text-red-500">- ₹ {result.fee.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );

  const seoContent = (
    <div>
      <h3>UPI Fees Explained</h3>
      <p>
        While standard P2P (Person to Person) UPI transactions are free, recent NPCI guidelines have introduced interchange fees for 
        PPI (Prepaid Payment Instrument) wallet transactions over ₹2,000. Merchants may also pay MDR (Merchant Discount Rate) for certain transactions.
      </p>
      <p>
        Use this <strong>UPI Fee Calculator</strong> to determine how much money a merchant actually receives after deducting the transaction fees 
        or interchange charges.
      </p>
    </div>
  );

  const faqs = [
    {
      question: "Is UPI chargeable for normal users?",
      answer: "No. Bank-to-bank UPI transactions remain free for personal users."
    },
    {
      question: "Who pays the 1.1% interchange fee?",
      answer: "The merchant pays this fee when a customer pays via a PPI (Wallet) for amounts > ₹2,000. It is not charged to the customer."
    },
    {
      question: "Do merchants pay for all UPI transactions?",
      answer: "Small merchants (P2M) usually have zero MDR, but large aggregators or specific categories may have charges."
    }
  ];

  return (
    <CalculatorLayout
      title="UPI Transaction Fee"
      description="Calculate merchant fees and final settlement amount for UPI transactions."
      form={form}
      result={resultCard}
      seoContent={seoContent}
      faqs={faqs}
    />
  );
}