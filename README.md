# Real Cost Calculator – India 🇮🇳

A modern, high-performance financial calculator suite optimized for Indian users. Built with React 19, Tailwind CSS, and TypeScript, this application provides accurate, fast, and easy-to-understand financial insights without the clutter.

## 🚀 Live Demo
The application is designed to be deployed on **Cloudflare Workers** using the new Static Assets feature.

## 🛠️ Key Features

- **Salary After Tax Calculator**: Updated for the **Union Budget 2024 (FY 2024-25)**. Includes standard deduction and Section 87A rebate logic.
- **EMI Calculator**: Comprehensive tool for Home, Car, and Personal loans with total interest and total payable breakdowns.
- **SIP Calculator**: Estimate the power of compounding for mutual fund investments.
- **GST Calculator**: Calculate both GST Inclusive (reverse) and Exclusive (forward) amounts with Indian tax slabs (5%, 12%, 18%, 28%).
- **Credit Card Interest Calculator**: Visualizes the high cost of carrying debt and the "minimum due" trap.
- **UPI Fee Calculator**: Estimates interchange fees for PPI wallet transactions over ₹2,000 based on NPCI guidelines.
- **Freelance Rate Calculator**: Helps freelancers determine their hourly rate based on desired net income, business expenses, and taxes.
- **Credit Score Guide**: A simple estimator for CIBIL health with direct links to official free reports.

## 🏗️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (via ESM imports)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/) (HashRouter for easy static hosting)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) (Static Assets)
- **SEO**: Integrated JSON-LD Schema (FAQ, FinancialProduct), optimized Meta tags, and breadcrumbs.

## 📂 Project Structure

- `/pages`: Contains individual calculator pages (EMI, Salary, etc.)
- `/components`: Reusable UI components like `CalculatorLayout`, `AdPlaceholder`, and `Layout`.
- `/lib`: Pure logic functions for all financial calculations.
- `App.tsx`: Routing configuration.
- `wrangler.toml`: Cloudflare deployment configuration.
- `worker.ts`: Cloudflare Worker entry point for serving assets.

## 💻 Local Development

1. Ensure you have Node.js and `npm` installed.
2. Clone the repository.
3. Use a static file server to serve the root directory (e.g., `npx serve .`).
4. Since it uses `importmap`, no complex build step is required for basic local preview!

## ☁️ Deployment

Deploy to Cloudflare Workers in seconds using Wrangler:

```bash
# Login to Cloudflare
npx wrangler login

# Deploy
npx wrangler deploy
```

## 📈 SEO & Growth Strategy

This app is built with a **Content-First** approach:
- **Rich Snippets**: Every page generates dynamic JSON-LD schema for Google Search.
- **Long-tail Targeting**: Headers and FAQs are optimized for high-volume keywords like "Salary after tax new regime".
- **Internal Linking**: A "Financial Flywheel" structure encourages users to navigate from one tool to another.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Disclaimer: These calculators are for informational purposes only. Please consult a qualified financial advisor for professional advice.*