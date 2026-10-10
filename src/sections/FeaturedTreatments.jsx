import React from 'react';
import { treatments } from '../data/treatments';
import { ArrowRight, Sparkles, Check, Clock, Tag } from 'lucide-react';

export const FeaturedTreatments = ({ onSelectTreatment, onSelectForBooking }) => {
  // Grab the 3 featured treatments: cosmetic-dentistry, dental-implants, teeth-whitening
  const featured = treatments.filter((t) => t.featured).slice(0, 3);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-brand-700 dark:text-brand-300">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Care Focus
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
              POPULAR CLINICAL CONSULTATIONS
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Highlighting key treatment paths frequently sought by patients looking to restore, align, or brighten their smiles.
            </p>
          </div>

          <a
            href="#treatments"
            className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-700 dark:hover:text-brand-300 text-sm group shrink-0"
          >
            <span>Explore All Treatments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image with Tag */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-white/95 dark:bg-navy-900/90 text-navy-900 dark:text-white shadow-sm backdrop-blur-md">
                  {item.featuredHighlight || item.tag}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {item.shortDescription}
                </p>

                {/* Duration & Price Indicators */}
                <div className="pt-2 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    {item.duration.split('(')[0]}
                  </span>
                  <span className="font-semibold text-navy-900 dark:text-slate-200">
                    {item.pricePlaceholder.split('(')[0]}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectTreatment(item)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-navy-900 dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors"
                  >
                    Learn More
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectForBooking(item.id)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-colors text-center"
                  >
                    Book Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
