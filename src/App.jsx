import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Portfolio from './components/Portfolio';
import LightboxModal from './components/LightboxModal';
import ShowreelModal from './components/ShowreelModal';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Packages from './components/Packages';
import CostCalculator from './components/CostCalculator';
import GearArsenal from './components/GearArsenal';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import QuickConnectDock from './components/QuickConnectDock';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreset, setBookingPreset] = useState('');
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    activeIndex: 0,
    items: []
  });

  const [toast, setToast] = useState({
    visible: false,
    title: '',
    message: ''
  });

  const handleOpenBooking = (preset = '') => {
    setBookingPreset(preset);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index, items) => {
    setLightboxState({
      isOpen: true,
      activeIndex: index,
      items: items
    });
  };

  const handleShowToast = (title, message) => {
    setToast({ visible: true, title, message });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 6000);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        <Hero 
          onOpenShowreel={() => setIsShowreelOpen(true)} 
          onOpenBooking={handleOpenBooking} 
        />
        
        <TrustBar />

        <Portfolio 
          onOpenLightbox={handleOpenLightbox} 
          onOpenBooking={handleOpenBooking} 
        />

        <ShowreelModal 
          isOpen={isShowreelOpen} 
          onClose={() => setIsShowreelOpen(false)} 
        />

        <BeforeAfterSlider />

        <Packages 
          onSelectPackage={handleOpenBooking} 
        />

        <CostCalculator 
          onLockQuote={handleOpenBooking} 
        />

        <GearArsenal />

        <Testimonials />

        <FAQ 
          onOpenBooking={handleOpenBooking} 
        />

        <CtaBanner 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Dedicated Direct Reach Section (Instagram, WhatsApp, Phone, Email) */}
        <QuickConnectDock />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Modals & Overlays */}
      <LightboxModal 
        isOpen={lightboxState.isOpen}
        activeIndex={lightboxState.activeIndex}
        items={lightboxState.items}
        onClose={() => setLightboxState(prev => ({ ...prev, isOpen: false }))}
        onNavigate={(newIdx) => setLightboxState(prev => ({ ...prev, activeIndex: newIdx }))}
      />

      <BookingModal 
        key={`${isBookingOpen}-${bookingPreset}`}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        presetPackage={bookingPreset}
        onShowToast={handleShowToast}
      />

      {/* Toast Notification */}
      <div className={`toast-notification ${toast.visible ? 'active' : ''}`}>
        <div className="toast-icon">
          <CheckCircle2 size={20} color="#ffffff" />
        </div>
        <div className="toast-content">
          <div className="toast-title">{toast.title}</div>
          <div className="toast-message">{toast.message}</div>
        </div>
      </div>

      {/* Floating Quick Dock (WhatsApp, Instagram, Phone, Scroll-to-Top) */}
      <FloatingActions />
    </div>
  );
}
