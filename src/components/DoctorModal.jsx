import React, { useEffect, useRef } from 'react';
import { X, Calendar, CheckCircle, Award, Stethoscope, ArrowRight, ShieldCheck } from 'lucide-react';

export const DoctorModal = ({ doctor, isOpen, onClose, onSelectDoctorForBooking }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !doctor) return null;

  const handleBookWithDoctor = () => {
    onSelectDoctorForBooking(doctor.name);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doctor-name"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-slide-up"
      >
        {/* Top Profile Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-teal-50/40 dark:from-dark-surface dark:to-teal-950/20 border-b border-slate-200 dark:border-dark-border">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close specialist profile"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-dark-border dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors focus:ring-2 focus:ring-brand-400"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-dark-border shrink-0">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[10px] font-semibold bg-brand-600 text-white rounded">
                Demo
              </span>
            </div>

            <div className="text-center sm:text-left space-y-1.5">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300">
                {doctor.specialty}
              </span>
              <h3 id="modal-doctor-name" className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white">
                {doctor.name}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {doctor.title}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 bg-white dark:bg-dark-card px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-dark-border">
                  <Award className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  {doctor.experiencePlaceholder}
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-dark-card px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-dark-border">
                  <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  {doctor.schedule}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quote */}
          {doctor.quote && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface border-l-4 border-brand-500 italic text-sm text-slate-700 dark:text-slate-300">
              "{doctor.quote}"
            </div>
          )}

          {/* Biography */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-2">
              Practitioner Background
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
              {doctor.fullBio}
            </p>
          </div>

          {/* Credentials placeholder */}
          <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-navy-900 dark:text-slate-200">Qualifications: </span>
            {doctor.qualificationPlaceholder} (Fictional demonstration profile)
          </div>

          {/* Primary Areas of Focus */}
          {doctor.services && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-3">
                Key Areas of Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {doctor.services.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleBookWithDoctor}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-brand-500/20 transition-all focus:ring-2 focus:ring-brand-500"
          >
            <span>Book with {doctor.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
