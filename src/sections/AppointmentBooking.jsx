import React, { useState, useEffect } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { treatments } from '../data/treatments';
import { dentists } from '../data/dentists';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Stethoscope
} from 'lucide-react';

export const AppointmentBooking = ({ initialTreatmentId = '', initialDoctorName = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: initialTreatmentId || 'general-dentistry',
    doctor: initialDoctorName || '',
    preferredDate: '',
    preferredTime: 'Morning',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update initial treatment or doctor if props change
  useEffect(() => {
    if (initialTreatmentId) {
      setFormData(prev => ({ ...prev, treatment: initialTreatmentId }));
    }
  }, [initialTreatmentId]);

  useEffect(() => {
    if (initialDoctorName) {
      setFormData(prev => ({ ...prev, doctor: initialDoctorName }));
    }
  }, [initialDoctorName]);

  // Today's date in YYYY-MM-DD format for date input min attribute
  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or consultation type';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred appointment date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceId = 'DENT-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedData({
        ...formData,
        referenceId,
        submittedAt: new Date().toLocaleDateString(),
      });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatment: 'general-dentistry',
      doctor: '',
      preferredDate: '',
      preferredTime: 'Morning',
      message: '',
    });
  };

  return (
    <section id="booking" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            Convenient Scheduling
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            BOOK YOUR DENTAL APPOINTMENT
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Reserve your consultation slot in just a few clicks. Our friendly reception team will confirm your time and guide you through any pre-visit questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Why Book With Us / Reassurance */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200/80 dark:border-dark-border space-y-6">
              <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                What to Expect at Your Visit
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-navy-900 dark:text-white block">Dedicated Consultation Time</strong>
                    Unrushed clinical evaluation to listen carefully to your goals and oral health history.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-navy-900 dark:text-white block">Digital Imaging & Diagnostics</strong>
                    Comfortable optical scans and low-radiation digital imaging when clinically appropriate.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-navy-900 dark:text-white block">Transparent Treatment Plans</strong>
                    Itemized recommendations and treatment phases with no unexpected surprises.
                  </div>
                </div>
              </div>

              {/* Clinic Contact Pill */}
              <div className="pt-4 border-t border-slate-200 dark:border-dark-border text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                <p><strong>Phone:</strong> {clinicConfig.contact.phone}</p>
                <p><strong>Hours:</strong> {clinicConfig.contact.hours}</p>
                <p className="text-brand-600 dark:text-brand-400 font-medium">{clinicConfig.contact.emergencyNote}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form or Success State */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-xl">
              
              {submittedData ? (
                /* Success State */
                <div className="text-center py-6 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-white">
                      Appointment Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-navy-900 dark:text-white">{submittedData.fullName}</span>. Your demo booking request has been submitted successfully.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200/80 dark:border-dark-border text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-200 dark:border-dark-border/60 pb-2">
                      <span className="text-slate-500 dark:text-slate-400">Reference ID:</span>
                      <span className="font-mono font-bold text-brand-600 dark:text-brand-400">{submittedData.referenceId}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 dark:border-dark-border/60 pb-2">
                      <span className="text-slate-500 dark:text-slate-400">Requested Date:</span>
                      <span className="font-semibold text-navy-900 dark:text-white">{submittedData.preferredDate} ({submittedData.preferredTime})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 dark:border-dark-border/60 pb-2">
                      <span className="text-slate-500 dark:text-slate-400">Treatment:</span>
                      <span className="font-semibold text-navy-900 dark:text-white capitalize">
                        {treatments.find(t => t.id === submittedData.treatment)?.name || submittedData.treatment}
                      </span>
                    </div>
                    {submittedData.doctor && (
                      <div className="flex justify-between border-b border-slate-200 dark:border-dark-border/60 pb-2">
                        <span className="text-slate-500 dark:text-slate-400">Practitioner:</span>
                        <span className="font-semibold text-navy-900 dark:text-white">{submittedData.doctor}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Contact:</span>
                      <span className="text-navy-900 dark:text-white">{submittedData.phone} • {submittedData.email}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
                    Note: In a production deployment, this form will connect directly to your clinic's EHR, CRM, or email booking notification endpoint.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-border text-navy-900 dark:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                /* The Booking Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-slate-200 dark:border-dark-border focus:ring-brand-500 focus:border-brand-500'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-200 dark:border-dark-border focus:ring-brand-500'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-200 dark:border-dark-border focus:ring-brand-500'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Treatment Selection & Doctor Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="treatment" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Select Treatment *
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                      >
                        <option value="general-dentistry">General Dentistry & Checkup</option>
                        <option value="teeth-cleaning">Teeth Cleaning & Hygiene</option>
                        <option value="cosmetic-dentistry">Cosmetic Dentistry / Makeover</option>
                        <option value="teeth-whitening">Teeth Whitening</option>
                        <option value="dental-implants">Dental Implants</option>
                        <option value="orthodontics">Orthodontics & Clear Aligners</option>
                        <option value="root-canal">Root Canal Treatment</option>
                        <option value="pediatric-dentistry">Pediatric Dentistry</option>
                        <option value="wisdom-teeth">Wisdom Tooth Care</option>
                        <option value="emergency-care">Emergency Consultation</option>
                        <option value="other">Other Dental Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="doctor" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Preferred Practitioner (Optional)
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                      >
                        <option value="">No preference (First available)</option>
                        {dentists.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} — {doc.specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          min={today}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.preferredDate
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-200 dark:border-dark-border focus:ring-brand-500'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Preferred Time of Day *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, preferredTime: slot }))}
                            className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                              formData.preferredTime === slot
                                ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                                : 'bg-slate-50 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border-slate-200 dark:border-dark-border hover:bg-slate-100'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message / Symptoms Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Notes or Dental Concerns (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any sensitivities, preferences, or symptoms to help us prepare for your visit..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-semibold text-base shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Request Appointment</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Reassurance */}
                  <p className="text-center text-xs text-slate-400 dark:text-slate-500 pt-1">
                    🔒 Your contact details are kept strictly confidential and used solely to confirm clinic scheduling.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
