import React from 'react';
import { dentists } from '../data/dentists';
import { Award, Calendar, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';

export const Dentists = ({ onSelectDoctor, onSelectDoctorForBooking }) => {
  return (
    <section id="dentists" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            Clinical Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            MEET OUR DENTAL SPECIALISTS
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Our collaborative team brings specialized training across restorative, cosmetic, orthodontic, and pediatric dentistry to deliver compassionate care.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {dentists.map((doctor) => (
            <div
              key={doctor.id}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Doctor Photo */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/95 dark:bg-navy-900/90 text-navy-900 dark:text-white shadow-sm">
                  {doctor.badge}
                </span>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-brand-300 font-medium mt-0.5">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {doctor.shortBio}
                </p>

                {/* Experience & Schedule Info */}
                <div className="pt-2 border-t border-slate-100 dark:border-dark-border/80 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{doctor.experiencePlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{doctor.schedule}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectDoctor(doctor)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 dark:border-dark-border text-navy-900 dark:text-white text-xs font-semibold hover:bg-slate-50 dark:hover:bg-dark-surface transition-colors"
                  >
                    View Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectDoctorForBooking(doctor.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition-colors text-center inline-flex items-center justify-center gap-1"
                  >
                    <span>Book with Doctor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Demo Content Notice */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-10">
          * Fictional doctor profiles for demonstration only. Easily configure practitioner names, bios, qualifications and images in src/data/dentists.js.
        </p>

      </div>
    </section>
  );
};
