import React, { useEffect, useRef } from 'react';
import { X, Clock, Tag, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const TreatmentModal = ({ treatment, isOpen, onClose, onSelectTreatmentForBooking }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
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

  if (!isOpen || !treatment) return null;

  const handleBookClick = () => {
    onSelectTreatmentForBooking(treatment.id);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-slide-up"
      >
        {/* Header Image & Close */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img 
            src={treatment.image} 
            alt={treatment.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close treatment details"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors focus:ring-2 focus:ring-brand-400"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase rounded-full bg-brand-500/90 text-white backdrop-blur-sm">
              {treatment.tag || 'Dental Care'}
            </span>
            <h3 id="modal-treatment-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {treatment.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border text-sm">
            <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
              <span><strong>Duration:</strong> {treatment.duration}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
              <Tag className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
              <span><strong>Starting at:</strong> {treatment.pricePlaceholder}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-2">
              Treatment Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Ideal For */}
          {treatment.idealFor && (
            <div className="p-3.5 rounded-lg bg-teal-50/70 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/50 text-xs sm:text-sm text-teal-900 dark:text-teal-200">
              <span className="font-semibold">Recommended for: </span>
              {treatment.idealFor}
            </div>
          )}

          {/* What the Treatment Involves */}
          {treatment.whatItInvolves && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-3">
                What This Treatment Involves
              </h4>
              <ul className="space-y-2.5">
                {treatment.whatItInvolves.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Typical Consultation Flow */}
          {treatment.consultationFlow && (
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 mb-3">
                Typical Consultation Flow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.consultationFlow.map((flow, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border/80">
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400">{flow.step}</span>
                    <h5 className="font-medium text-navy-900 dark:text-slate-100 text-sm mt-0.5">{flow.title}</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">{flow.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-amber-800 dark:text-amber-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              Demo informational content only. Specific clinical diagnosis, suitability, and procedural steps are determined during an in-person clinical examination.
            </p>
          </div>
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
            onClick={handleBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-brand-500/20 transition-all focus:ring-2 focus:ring-brand-500"
          >
            <span>Book Appointment for {treatment.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
