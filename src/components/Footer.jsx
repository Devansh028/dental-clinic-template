import React from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

// Crisp SVG social icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Dentists', href: '#dentists' },
    { name: 'Technology', href: '#technology' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const treatmentLinks = [
    { name: 'General Dentistry', href: '#treatments' },
    { name: 'Cosmetic Dentistry', href: '#treatments' },
    { name: 'Orthodontics', href: '#treatments' },
    { name: 'Dental Implants', href: '#treatments' },
    { name: 'Teeth Whitening', href: '#treatments' },
    { name: 'Pediatric Dentistry', href: '#treatments' },
  ];

  // Social icons: Only display if configured and not empty
  const hasSocial = clinicConfig.social && (
    clinicConfig.social.instagram || 
    clinicConfig.social.facebook || 
    clinicConfig.social.youtube ||
    clinicConfig.social.linkedin ||
    clinicConfig.social.twitter
  );

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5C9 4.5 7 6.5 7 9.5C7 11.5 7.5 13.5 8.2 16C9 18.5 8.8 21.5 10 22C11 22.5 11.8 20.5 12 19C12.2 20.5 13 22.5 14 22C15.2 21.5 15 18.5 15.8 16C16.5 13.5 17 11.5 17 9.5C17 6.5 15 4.5 12 4.5Z" />
                  <circle cx="16" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                  {clinicConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-400 font-semibold -mt-1">
                  Dental Clinic
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-300 font-medium">
              {clinicConfig.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Modern dentistry, personalized treatment, and a comfortable patient experience designed around your smile. Reusable website template for dental clinics.
            </p>

            {/* Social Icons if configured */}
            {hasSocial && (
              <div className="flex items-center gap-3 pt-2">
                {clinicConfig.social.instagram && (
                  <a href={clinicConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                    <InstagramIcon />
                  </a>
                )}
                {clinicConfig.social.facebook && (
                  <a href={clinicConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                    <FacebookIcon />
                  </a>
                )}
                {clinicConfig.social.youtube && (
                  <a href={clinicConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                    <YoutubeIcon />
                  </a>
                )}
                {clinicConfig.social.linkedin && (
                  <a href={clinicConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                    <LinkedinIcon />
                  </a>
                )}
                {clinicConfig.social.twitter && (
                  <a href={clinicConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                    <TwitterIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dental Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {treatmentLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-brand-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Placeholders */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{clinicConfig.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{clinicConfig.contact.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>{clinicConfig.contact.location}</span>
              </p>
              <p className="flex items-start gap-2 pt-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.contact.hours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {clinicConfig.name}. Concept Project.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Reusable Dental Clinic Website Template</span>
            <span>•</span>
            <span>Agency Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
