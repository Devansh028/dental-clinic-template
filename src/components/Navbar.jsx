import React, { useState, useEffect } from 'react';
import { clinicConfig } from '../config/clinicConfig';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Menu, X, Calendar, Sparkles, ArrowRight, Phone } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Dentists', href: '#dentists' },
    { name: 'Technology', href: '#technology' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar if enabled */}
      {clinicConfig.announcement?.enabled && (
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 text-white text-xs py-2 px-4 border-b border-navy-700/50 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase border border-brand-500/30">
                {clinicConfig.announcement.badge || 'Notice'}
              </span>
              <span className="text-slate-200">{clinicConfig.announcement.text}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <span>{clinicConfig.contact.phone}</span>
              </span>
              <a 
                href={clinicConfig.announcement.ctaTarget || '#booking'} 
                className="text-brand-400 font-semibold hover:text-brand-300 hover:underline inline-flex items-center gap-1"
              >
                {clinicConfig.announcement.ctaText || 'Book Now'}
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-sm border-b border-slate-200/80 dark:border-dark-border py-3'
            : 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
              aria-label={`${clinicConfig.name} Home`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
                {/* Custom minimalist dental tooth emblem */}
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5C9 4.5 7 6.5 7 9.5C7 11.5 7.5 13.5 8.2 16C9 18.5 8.8 21.5 10 22C11 22.5 11.8 20.5 12 19C12.2 20.5 13 22.5 14 22C15.2 21.5 15 18.5 15.8 16C16.5 13.5 17 11.5 17 9.5C17 6.5 15 4.5 12 4.5Z" />
                  <circle cx="16" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-navy-900 dark:text-white">
                  {clinicConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold -mt-1">
                  Dental Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-teal-50 dark:bg-teal-950/40 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-dark-surface'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Theme Toggle & Book CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors focus:ring-2 focus:ring-brand-500 border border-slate-200/60 dark:border-dark-border"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700 hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Primary CTA (Desktop) */}
              <a
                href="#booking"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-surface border border-slate-200/60 dark:border-dark-border transition-colors focus:ring-2 focus:ring-brand-500"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg animate-slide-up px-4 pt-3 pb-6 shadow-xl">
            <nav className="flex flex-col space-y-1.5 mb-5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-50 dark:bg-teal-950/40 text-brand-600 dark:text-brand-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-surface'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-100 dark:border-dark-border space-y-3">
              <a
                href="#booking"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-center shadow-md transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>

              <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                Call: {clinicConfig.contact.phone}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
