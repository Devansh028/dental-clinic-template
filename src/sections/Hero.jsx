import React from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, CheckCircle, Clock, Star, Heart } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200/30 dark:bg-brand-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-dark-surface border border-teal-200/70 dark:border-dark-border text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-500 animate-pulse" />
              <span>{clinicConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 dark:text-white leading-[1.12]">
              YOUR SMILE <br className="hidden sm:inline" />
              DESERVES <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-500 to-cyan-600 dark:from-brand-400 dark:via-teal-300 dark:to-cyan-400">
                EXCEPTIONAL CARE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {clinicConfig.subtagline}
            </p>

            {/* Trust Points Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                Experienced Care
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                Modern Technology
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                Personalized Treatment
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-brand-500"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </a>

              <a
                href="#treatments"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-dark-surface text-navy-900 dark:text-white border border-slate-200 dark:border-dark-border font-semibold text-base shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              </a>
            </div>

            {/* Quick Demo Reassurance */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
              <span>Welcoming new patients • Calm, fear-free environment • No referral necessary</span>
            </div>
          </div>

          {/* Right Column: Visual Composition with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic/Smile Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-border aspect-[4/5] bg-slate-100 dark:bg-dark-surface">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Dental Clinic Examination Suite"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/10" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card border border-white/30 dark:border-white/10 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-brand-300">Modern Facility</p>
                      <p className="text-sm font-bold text-white">Advanced Dental Examination Suites</p>
                    </div>
                    <span className="p-2 rounded-full bg-brand-500/80 text-white">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute top-6 -right-4 sm:-right-6 z-20 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Patient Comfort</p>
                  <p className="text-sm font-bold text-navy-900 dark:text-white">Gentle & Stress-Free</p>
                </div>
              </div>

              {/* Floating Badge 2: Mid-Left (completely clears the bottom facility card) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 z-20 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Flexible Scheduling</p>
                  <p className="text-sm font-bold text-navy-900 dark:text-white">Morning & Evening Slots</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
