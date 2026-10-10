import React from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { AlertCircle, Phone, Calendar, Clock, ArrowRight } from 'lucide-react';

export const EmergencyCTA = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Info */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-wider border border-red-500/30">
              <AlertCircle className="w-3.5 h-3.5 text-red-400" />
              <span>Urgent Dental Care Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              NEED URGENT DENTAL CARE?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experiencing severe tooth discomfort, a broken restoration, or sudden oral trauma? Contact the clinic to discuss your dental concern and available appointment options during working hours.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-400" />
                Same-day triage based on daily clinic availability
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '') || '#'}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {clinicConfig.contact.phone}</span>
            </a>

            <a
              href="#booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Urgent Slot</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
