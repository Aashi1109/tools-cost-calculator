export interface CalculatorRoute {
  path: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum TaxRegime {
  New2024 = 'New2024',
}

export interface TaxResult {
  annualTax: number;
  monthlyInHand: number;
  effectiveRate: number;
  breakdown: { label: string; amount: number }[];
}