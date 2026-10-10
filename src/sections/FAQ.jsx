import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQ = () => {
  const [openId, setOpenId] = useState(1); // First open by default

  const toggleItem = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50/70 dark:bg-dark-surface/50 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Find clear answers to everyday questions about booking, treatments, safety protocols, and what to expect during your visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-navy-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-2xl transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-dark-surface flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-dark-border/60 animate-fade-in"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-navy-900 dark:text-white text-base">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Our patient care team is available to assist with treatment inquiries.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-dark-surface text-navy-900 dark:text-white font-semibold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Reception</span>
          </a>
        </div>

      </div>
    </section>
  );
};
