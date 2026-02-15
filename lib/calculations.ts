/**
 * Financial calculation logic for various Indian financial contexts.
 */

// EMI Calculator
export const calculateEMI = (principal: number, annualRate: number, tenureYears: number) => {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfMonths = tenureYears * 12;
  const emi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1)
  );
  const totalPayment = emi * numberOfMonths;
  const totalInterest = totalPayment - principal;

  return { emi, totalInterest, totalPayment };
};

// Credit Card Interest Calculator
export const calculateCreditCardInterest = (outstanding: number, monthlyRate: number, months: number) => {
  const finalPayable = Math.round(outstanding * Math.pow(1 + monthlyRate / 100, months));
  const totalInterest = finalPayable - outstanding;
  return { totalInterest, finalPayable };
};

// SIP Calculator
export const calculateSIP = (monthlyInvestment: number, annualRate: number, years: number) => {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  const maturityValue = Math.round(
    monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate)
  );
  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = maturityValue - investedAmount;

  return { investedAmount, estimatedReturns, maturityValue };
};

// GST Calculator
export const calculateGST = (amount: number, gstRate: number, isInclusive: boolean) => {
  let basePrice, gstAmount, total;
  if (isInclusive) {
    basePrice = amount / (1 + gstRate / 100);
    gstAmount = amount - basePrice;
    total = amount;
  } else {
    basePrice = amount;
    gstAmount = (amount * gstRate) / 100;
    total = amount + gstAmount;
  }
  return {
    basePrice: Math.round(basePrice),
    gstAmount: Math.round(gstAmount),
    total: Math.round(total),
  };
};

// Salary after Tax (New Regime 2024-25)
export const calculateSalaryTax = (annualIncome: number) => {
  const standardDeduction = 50000;
  const taxableIncome = Math.max(0, annualIncome - standardDeduction);
  
  let tax = 0;
  
  if (taxableIncome <= 700000) {
    tax = 0; // Rebate u/s 87A ensures zero tax for income up to 7L after standard deduction
  } else {
    // Slabs FY 2024-25: 
    // 0-3L (0%), 3-7L (5%), 7-10L (10%), 10-12L (15%), 12-15L (20%), 15L+ (30%)
    if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.3;
    if (taxableIncome > 1200000) tax += (Math.min(taxableIncome, 1500000) - 1200000) * 0.2;
    if (taxableIncome > 1000000) tax += (Math.min(taxableIncome, 1200000) - 1000000) * 0.15;
    if (taxableIncome > 700000) tax += (Math.min(taxableIncome, 1000000) - 700000) * 0.1;
    if (taxableIncome > 300000) tax += (Math.min(taxableIncome, 700000) - 300000) * 0.05;
  }

  const annualTax = Math.round(tax);
  const monthlyInHand = Math.round((annualIncome - annualTax) / 12);
  const effectiveRate = Number(((annualTax / annualIncome) * 100).toFixed(2)) || 0;

  return {
    annualTax,
    monthlyInHand,
    effectiveRate,
    taxableIncome
  };
};

// Hourly Rate Calculator
export const calculateHourlyRate = (desiredIncome: number, expenses: number, taxRate: number, hours: number) => {
  const totalNeeded = (desiredIncome + expenses) / (1 - taxRate / 100);
  return Math.round(totalNeeded / hours);
};

// UPI Fee Calculator
export const calculateUpiFee = (amount: number, feePercent: number) => {
  const fee = (amount * feePercent) / 100;
  const finalAmount = amount - fee;
  return {
    fee: Number(fee.toFixed(2)),
    finalAmount: Number(finalAmount.toFixed(2))
  };
};

// Credit Score Health Estimator
export const calculateCreditHealth = (
  onTimePayments: number, // 0 to 100
  utilization: number,    // 0 to 100
  creditAgeYears: number, // 0 to 20
  recentInquiries: number // 0 to 10
) => {
  // Baseline score is 300, max is 900
  let score = 300;

  // 1. Payment History (35% weightage = 210 points)
  score += (onTimePayments / 100) * 210;

  // 2. Credit Utilization (30% weightage = 180 points)
  // Ideal utilization is < 30%. Score drops significantly above 50%
  if (utilization <= 30) {
    score += 180;
  } else if (utilization <= 50) {
    score += 120;
  } else if (utilization <= 75) {
    score += 60;
  }

  // 3. Credit Age (15% weightage = 90 points)
  // Max points for 10+ years
  score += Math.min((creditAgeYears / 10) * 90, 90);

  // 4. Recent Inquiries (10% weightage = 60 points)
  // Deduct for too many inquiries
  const inquiryPenalty = recentInquiries * 15;
  score += Math.max(0, 60 - inquiryPenalty);

  // 5. Credit Mix (Fixed 10% for MVP = 60 points)
  score += 60; 

  const finalScore = Math.round(score);
  
  let label = "Poor";
  let color = "text-red-500";
  if (finalScore >= 750) { label = "Excellent"; color = "text-emerald-600"; }
  else if (finalScore >= 700) { label = "Good"; color = "text-emerald-500"; }
  else if (finalScore >= 650) { label = "Average"; color = "text-orange-500"; }

  return {
    score: finalScore,
    label,
    color
  };
};