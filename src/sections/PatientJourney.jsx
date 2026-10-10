import React from 'react';
import { Calendar, MessageSquare, ClipboardList, HeartPulse, ArrowRight } from 'lucide-react';

export const PatientJourney = () => {
  const steps = [
    {
      step: '01',
      title: 'Book',
      desc: 'Schedule your convenient appointment slot online or via a quick telephone inquiry.',
      icon: Calendar,
      detail: 'Choose your preferred date, time of day, and desired consultation category.',
    },
    {
      step: '02',
      title: 'Consult',
      desc: 'Meet with your practitioner in a tranquil room to review health history and expectations.',
      icon: MessageSquare,
      detail: 'We take the time to listen carefully to your goals and any sensitivities.',
    },
    {
      step: '03',
      title: 'Plan',
      desc: 'Receive digital imaging and a clear, itemized roadmap of recommended treatment options.',
      icon: ClipboardList,
      detail: 'Review timelines, material options, and transparent pricing beforehand.',
    },
    {
      step: '04',
      title: 'Care',
      desc: 'Experience gentle, comfortable treatment carried out with modern dental precision.',
      icon: HeartPulse,
      detail: 'Continuous aftercare support ensures your comfort and smile vitality.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            YOUR PATIENT JOURNEY
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From your very first contact to your ongoing preventive checkups, we make every step simple, reassuring, and completely transparent.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-brand-600/40 dark:text-brand-400/40 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors font-heading">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-2">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-dark-border/60 flex items-center text-xs font-semibold text-brand-600 dark:text-brand-400">
                  <span>Step {item.step} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md transition-colors"
          >
            <span>Start Step 01: Schedule Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
