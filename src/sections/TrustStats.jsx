import React from 'react';
import { demoStats, trustHighlights } from '../data/stats';
import { Award, Cpu, HeartHandshake, Smile, Stethoscope, Users, CalendarCheck, Info } from 'lucide-react';

const iconMap = {
  Stethoscope,
  Users,
  CalendarCheck,
  Award,
  Cpu,
  HeartHandshake,
  Smile,
};

export const TrustStats = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 dark:bg-dark-surface/60 border-y border-slate-200/70 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {demoStats.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div 
                key={item.id} 
                className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white font-heading">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Data Disclaimer Note */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 text-center">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>Fictional demonstration metrics. Configurable in src/data/stats.js for your clinic client.</span>
        </div>

      </div>
    </section>
  );
};
