import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote, MessageSquareHeart, Info } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            Patient Feedback (Demo)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            WHAT OUR DEMO PATIENTS SAY
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Read representative patient feedback modeling the attentive, calming environment we strive to provide at every visit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-dark-border/60 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-dark-border"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-navy-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium">
                    {item.treatment}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 text-center max-w-xl mx-auto">
          <Info className="w-4 h-4 shrink-0" />
          <span>Fictional sample reviews for web agency demonstration purposes. Replace with verified patient feedback upon live launch.</span>
        </div>

      </div>
    </section>
  );
};
