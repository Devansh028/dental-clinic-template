import React from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const About = () => {
  const highlights = [
    { title: 'Patient-Centered Care', desc: 'Treatment experiences tailored to your comfort and individual needs.' },
    { title: 'Modern Equipment', desc: 'Contemporary digital scanning, low-dose imaging and diagnostic tech.' },
    { title: 'Personalized Treatment Plans', desc: 'No one-size-fits-all approach; recommendations designed for you.' },
    { title: 'Comfortable Environment', desc: 'A serene clinic space crafted to reduce stress and dental hesitation.' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-border aspect-[4/3] bg-slate-100 dark:bg-dark-surface">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Dentist having a gentle consultation with patient"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset Secondary Image Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-border hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
                  alt="Happy smiling patient"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Oral Health First</p>
                    <p className="text-sm font-bold text-navy-900 dark:text-white">Preventive Dentistry</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider">
              About {clinicConfig.name}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
              DENTISTRY DESIGNED AROUND YOU.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              At {clinicConfig.name}, we believe dental visits should be transparent, reassuring, and completely free of intimidation. Our approach unites modern clinical technology with genuine empathy, ensuring each patient feels heard, informed, and respected at every stage of care.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you are scheduling a six-month preventive checkup, exploring cosmetic enhancements, or seeking long-term restorative solutions, our clinical team focuses on gentle technique, transparent discussions, and lasting oral health foundations.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/80">
                  <div className="flex items-center gap-2 font-semibold text-navy-900 dark:text-slate-100 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#dentists"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-navy-950 font-semibold text-sm hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>Meet Our Clinic Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 font-semibold text-sm transition-colors"
              >
                <span>View Treatment Options</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
