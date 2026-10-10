import React from 'react';
import { 
  HeartHandshake, 
  Cpu, 
  Smile, 
  MessageSquareCheck, 
  ClipboardCheck, 
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: HeartHandshake,
      title: 'Patient-Centered Care',
      description: 'Treatment experiences thoughtfully designed around individual preferences, comfort levels, and clinical needs.',
      badge: 'Attentive',
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'Contemporary dental imaging and 3D optical scanning supporting clear visualization and informed treatment planning.',
      badge: 'Modern Tech',
    },
    {
      icon: Smile,
      title: 'Comfortable Experience',
      description: 'A serene clinic setting, gentle clinical methods, and attentive chairside care to ease dental hesitation.',
      badge: 'Stress-Free',
    },
    {
      icon: MessageSquareCheck,
      title: 'Transparent Communication',
      description: 'Thorough, jargon-free explanations of options, steps, and pricing before any procedure begins.',
      badge: 'No Surprises',
    },
    {
      icon: ClipboardCheck,
      title: 'Personalized Plans',
      description: 'Tailored recommendations reflecting your unique oral anatomy, goals, and schedule without unnecessary pressure.',
      badge: 'Custom Care',
    },
    {
      icon: ShieldCheck,
      title: 'Preventive Focus',
      description: 'Guidance and proactive hygiene strategies focused on preserving your natural teeth and long-term vitality.',
      badge: 'Longevity',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-dark-surface/50 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            Why Choose Our Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            EXCELLENCE IN EVERY DETAIL.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We hold ourselves to elevated standards in cleanliness, clinical clarity, and patient comfort. Here is how we design your visit around you.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-500/50 dark:hover:border-brand-400/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-dark-surface px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 opacity-90">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sub-note */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-10 max-w-xl mx-auto">
          Notice: Informational overview of template standards. Individual treatment needs and outcomes depend on in-person professional dental evaluation.
        </p>

      </div>
    </section>
  );
};
