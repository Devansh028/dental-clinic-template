import React, { useState } from 'react';
import { treatments, treatmentCategories } from '../data/treatments';
import { 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Sun, 
  Layers, 
  Activity, 
  HeartPulse, 
  Heart, 
  AlertCircle, 
  Zap, 
  ArrowRight, 
  Clock, 
  Tag 
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Sparkles,
  Smile,
  Sun,
  Layers,
  Activity,
  HeartPulse,
  Heart,
  AlertCircle,
  Zap,
};

export const Treatments = ({ onSelectTreatment, onSelectForBooking }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTreatments = activeCategory === 'all'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 md:py-28 bg-slate-50/60 dark:bg-dark-surface/40 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            Comprehensive Oral Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            OUR DENTAL TREATMENTS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From preventive hygiene visits to smile enhancements and urgent dental consultations, discover treatments designed around your health and peace of mind.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 px-1">
          {treatmentCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-dark-border hover:bg-slate-100 dark:hover:bg-dark-surface'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => {
            const IconComponent = iconMap[treatment.icon] || ShieldCheck;

            return (
              <div
                key={treatment.id}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-500/40 dark:hover:border-brand-400/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Card Top: Image + Tag */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-white/95 dark:bg-dark-card/95 text-navy-900 dark:text-white backdrop-blur-sm shadow-sm">
                      {treatment.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-600/90 text-white flex items-center justify-center shadow-md backdrop-blur-sm">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {treatment.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {treatment.shortDescription}
                  </p>

                  {/* Details Pill */}
                  <div className="pt-3 border-t border-slate-100 dark:border-dark-border/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                      {treatment.duration.split('(')[0]}
                    </span>
                    <span className="font-medium text-navy-900 dark:text-slate-200">
                      {treatment.pricePlaceholder.split('(')[0]}
                    </span>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectTreatment(treatment)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-navy-900 dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors"
                    >
                      Learn More
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectForBooking(treatment.id)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-colors text-center inline-flex items-center justify-center gap-1"
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Need a personalized clinical opinion? Book an initial evaluation to discuss tailored options and exact treatment estimates.
        </div>

      </div>
    </section>
  );
};
