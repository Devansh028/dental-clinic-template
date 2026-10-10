import React from 'react';
import { technologies } from '../data/technology';
import { Radio, Scan, Cpu, CheckCircle2, Palette, Sparkles, Check } from 'lucide-react';

const iconMap = {
  Radio,
  Scan,
  Cpu,
  CheckCircle2,
  Palette,
};

export const Technology = () => {
  return (
    <section id="technology" className="py-20 md:py-28 bg-slate-50/70 dark:bg-dark-surface/50 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            <Sparkles className="w-3.5 h-3.5" />
            Clinical Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            MODERN DENTISTRY, MODERN TECHNOLOGY.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Discover the diagnostic and treatment technologies supported by this template, designed to maximize precision, reduce appointment times, and elevate comfort.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Cpu;

            return (
              <div
                key={tech.id}
                className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-500/50 dark:hover:border-brand-400/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Tech Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-brand-600 text-white shadow-sm">
                    {tech.tag}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold leading-snug">
                      {tech.name}
                    </h3>
                  </div>
                </div>

                {/* Tech Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-dark-border/80 flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{tech.benefit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reusable Template Note */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-10">
          * Fictional demo clinic features. All equipment descriptions can be customized in src/data/technology.js to reflect the specific assets of your client clinic.
        </p>

      </div>
    </section>
  );
};
