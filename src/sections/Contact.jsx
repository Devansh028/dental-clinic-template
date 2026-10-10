import React, { useState } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Map as MapIcon, 
  MessageSquare 
} from 'lucide-react';

export const Contact = () => {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [inquirySent, setInquirySent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!inquiryData.name.trim()) errs.name = 'Name is required';
    if (!inquiryData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!inquiryData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setInquirySent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 dark:bg-dark-surface/50 border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            CONTACT OUR CLINIC
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions about procedures, scheduling, or payment options? Reach out to our front desk team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Optional Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Telephone</h3>
                <p className="text-base font-bold text-navy-900 dark:text-white mt-1">
                  {clinicConfig.contact.phone}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Front Desk & Appointments
                </p>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Email Inquiries</h3>
                <p className="text-base font-bold text-navy-900 dark:text-white mt-1">
                  {clinicConfig.contact.email}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  General & Record Inquiries
                </p>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Practice Location</h3>
                <p className="text-base font-bold text-navy-900 dark:text-white mt-1">
                  {clinicConfig.contact.location}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Configurable in clinicConfig.js
                </p>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">Clinic Hours</h3>
                <p className="text-xs font-semibold text-navy-900 dark:text-white mt-1 leading-normal">
                  {clinicConfig.contact.hours}
                </p>
                <p className="text-[11px] text-brand-600 dark:text-brand-400 mt-1">
                  Flexible consultation times
                </p>
              </div>

            </div>

            {/* Google Map Integration (Conditional based on clinicConfig) */}
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-sm font-bold text-navy-900 dark:text-white">
                <MapIcon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Clinic Directions & Map</span>
              </div>

              {clinicConfig.map?.enabled && clinicConfig.map?.embedUrl ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border">
                  <iframe
                    title="Clinic Location Map"
                    src={clinicConfig.map.embedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-dashed border-slate-300 dark:border-dark-border text-center space-y-2">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    📍 {clinicConfig.contact.location}
                  </p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500">
                    {clinicConfig.map?.placeholderNote || 'Google Maps embed can be enabled in src/config/clinicConfig.js when deploying for your client.'}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: General Message / Question Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                  Send a Quick Inquiry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Have a non-urgent inquiry about dental procedures or policies? Fill out the form below.
              </p>

              {inquirySent ? (
                <div className="py-8 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 dark:text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you, {inquiryData.name}. Our receptionist will respond to your inquiry via {inquiryData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySent(false);
                      setInquiryData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="inqName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="inqName"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="inqEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="inqEmail"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="inqSubject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Topic
                    </label>
                    <input
                      type="text"
                      id="inqSubject"
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      placeholder="e.g. Teeth Whitening consultation question"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="inqMessage" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="inqMessage"
                      rows={3}
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder="How can our clinic help you?"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-navy-950 font-semibold text-sm hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
