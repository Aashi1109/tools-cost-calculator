import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from './AdPlaceholder';
import { FaqItem } from '../types';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  form: React.ReactNode;
  result: React.ReactNode;
  seoContent: React.ReactNode;
  faqs: FaqItem[];
  schemaType?: string;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  title,
  description,
  form,
  result,
  seoContent,
  faqs,
  schemaType = "FinancialProduct"
}) => {
  useEffect(() => {
    // Update Document Title for SEO
    document.title = `${title} India - Real Cost Calculator`;
    
    // Inject Schema.org JSON-LD
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    const productSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": title,
      "description": description,
      "brand": {
        "@type": "Brand",
        "name": "Real Cost Calculator India"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([faqSchema, productSchema]);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [title, description, faqs, schemaType]);

  return (
    <div className="space-y-8">
      {/* Breadcrumbs for SEO */}
      <nav className="text-xs text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{title}</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">{description}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Input Section */}
        <section className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-4">Calculator Inputs</h2>
          {form}
        </section>

        {/* Result Section */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100 p-6 md:p-8 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-emerald-900">Calculation Summary</h2>
            {result}
            {/* 
            <div className="mt-8 pt-6 border-t border-emerald-200">
               <AdPlaceholder className="h-[250px] bg-emerald-100/50 border-emerald-300 text-emerald-600/60" label="Sponsorship" />
            </div>
            */}
          </div>
        </aside>
      </div>

      {/* <AdPlaceholder className="h-[100px]" label="Horizontal Banner" /> */}

      {/* SEO Content */}
      <article className="prose prose-slate prose-emerald max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        {seoContent}
      </article>

      {/* FAQs */}
      <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-8 text-slate-900">Expert Q&A</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-bold text-lg text-slate-800">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Linking / Contextual Recommendations */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-slate-900">Planning your next financial move?</h4>
          <p className="text-sm text-slate-600">Explore our other accurate Indian financial tools.</p>
        </div>
        <Link to="/" className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition shadow-sm">
          View All Calculators
        </Link>
      </div>
      
      {/* <AdPlaceholder className="h-[90px]" label="Footer Ad" /> */}
    </div>
  );
};

export default CalculatorLayout;