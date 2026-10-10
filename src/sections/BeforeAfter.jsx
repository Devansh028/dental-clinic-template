import React, { useState } from 'react';
import { beforeAfterCases } from '../data/beforeAfter';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles, Info, ShieldAlert } from 'lucide-react';

export const BeforeAfter = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const currentCase = beforeAfterCases[selectedCaseIndex] || beforeAfterCases[0];

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-dark-surface/50 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio (Demo)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            SMILE TRANSFORMATIONS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore demonstration case simulations displaying the visual possibilities of aesthetic alignment, whitening, and restorative bonding.
          </p>
        </div>

        {/* Case Selector Tabs if multiple */}
        {beforeAfterCases.length > 1 && (
          <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2">
            {beforeAfterCases.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCaseIndex(idx)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCaseIndex === idx
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                Simulation {idx + 1}: {c.title.split('&')[0]}
              </button>
            ))}
          </div>
        )}

        {/* Transformation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Slider */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              title={currentCase.title}
            />
          </div>

          {/* Right: Case Details */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-900/40">
              {currentCase.tag}
            </div>

            <h3 className="text-2xl font-bold text-navy-900 dark:text-white">
              {currentCase.title}
            </h3>

            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
              Category: {currentCase.category}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentCase.description}
            </p>

            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-300">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <p>
                <strong>Template Medical Compliance:</strong> {currentCase.notes}
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 underline underline-offset-4"
              >
                Discuss smile enhancement options with our team →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
