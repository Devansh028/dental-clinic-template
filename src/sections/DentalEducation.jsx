import React, { useState } from 'react';
import { dentalTips } from '../data/dentalTips';
import { BookOpen, Clock, CheckCircle2, ChevronRight, X, AlertCircle } from 'lucide-react';

export const DentalEducation = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            <BookOpen className="w-3.5 h-3.5" />
            Patient Knowledge Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            DENTAL CARE TIPS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Helpful oral health guides designed to empower you with good everyday habits, preventive awareness, and treatment clarity.
          </p>
        </div>

        {/* 4 Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {dentalTips.map((tip) => (
            <div
              key={tip.id}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image & Category Tag */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/95 dark:bg-navy-900/90 text-navy-900 dark:text-white shadow-sm">
                  {tip.category}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-300" />
                    {tip.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-navy-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {tip.summary}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTip(tip)}
                    className="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-dark-border text-navy-900 dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors flex items-center justify-between group-hover:border-brand-500/50"
                  >
                    <span>Read Quick Guide</span>
                    <ChevronRight className="w-4 h-4 text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Informational Disclaimer */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-10">
          General educational information only. Not a substitute for personalized clinical diagnosis or medical guidance.
        </p>

      </div>

      {/* Educational Guide Modal */}
      {selectedTip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedTip(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] space-y-5 animate-slide-up"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300">
                {selectedTip.category} • {selectedTip.readTime}
              </span>
              <button
                type="button"
                onClick={() => setSelectedTip(null)}
                aria-label="Close guide modal"
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-dark-surface text-slate-500 dark:text-slate-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 dark:text-white">
              {selectedTip.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedTip.summary}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400">
                Key Educational Takeaways
              </h4>
              <ul className="space-y-2.5">
                {selectedTip.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Have a specific concern? Book a clinical consultation with our dental team for an individualized assessment.</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTip(null)}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
