import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrustStats } from './sections/TrustStats';
import { About } from './sections/About';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { FeaturedTreatments } from './sections/FeaturedTreatments';
import { Treatments } from './sections/Treatments';
import { Dentists } from './sections/Dentists';
import { Technology } from './sections/Technology';
import { PatientJourney } from './sections/PatientJourney';
import { BeforeAfter } from './sections/BeforeAfter';
import { Testimonials } from './sections/Testimonials';
import { EmergencyCTA } from './sections/EmergencyCTA';
import { AppointmentBooking } from './sections/AppointmentBooking';
import { FAQ } from './sections/FAQ';
import { DentalEducation } from './sections/DentalEducation';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TreatmentModal } from './components/TreatmentModal';
import { DoctorModal } from './components/DoctorModal';

export function AppContent() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingTreatmentId, setBookingTreatmentId] = useState('');
  const [bookingDoctorName, setBookingDoctorName] = useState('');

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatmentId) => {
    setBookingTreatmentId(treatmentId);
    scrollToBooking();
  };

  const handleSelectDoctorForBooking = (doctorName) => {
    setBookingDoctorName(doctorName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-navy-900 dark:bg-dark-bg dark:text-slate-100 selection:bg-brand-500 selection:text-white transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <About />
        <WhyChooseUs />
        <FeaturedTreatments 
          onSelectTreatment={setSelectedTreatment}
          onSelectForBooking={handleSelectTreatmentForBooking}
        />
        <Treatments 
          onSelectTreatment={setSelectedTreatment}
          onSelectForBooking={handleSelectTreatmentForBooking}
        />
        <Dentists 
          onSelectDoctor={setSelectedDoctor}
          onSelectDoctorForBooking={handleSelectDoctorForBooking}
        />
        <Technology />
        <PatientJourney />
        <BeforeAfter />
        <Testimonials />
        <EmergencyCTA />
        <AppointmentBooking 
          initialTreatmentId={bookingTreatmentId}
          initialDoctorName={bookingDoctorName}
        />
        <FAQ />
        <DentalEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <FloatingWhatsApp />

      {/* Accessible Modals */}
      <TreatmentModal
        treatment={selectedTreatment}
        isOpen={Boolean(selectedTreatment)}
        onClose={() => setSelectedTreatment(null)}
        onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
      />

      <DoctorModal
        doctor={selectedDoctor}
        isOpen={Boolean(selectedDoctor)}
        onClose={() => setSelectedDoctor(null)}
        onSelectDoctorForBooking={handleSelectDoctorForBooking}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
