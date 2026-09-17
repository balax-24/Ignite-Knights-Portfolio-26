import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SystemLoader } from './components/ui/SystemLoader';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { JourneyPage } from './pages/JourneyPage';
import { CompetitionsPage } from './pages/CompetitionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { ContactPage } from './pages/ContactPage';

// Import All Aerospace Design Styles
import './styles/index.css';
import './styles/drone3d.css';
import './styles/components.css';
import './styles/cards.css';
import './styles/pages.css';

export default function App() {
  const [bootSequenceActive, setBootSequenceActive] = useState(() => {
    // Run boot sequence on first visit in session
    return !sessionStorage.getItem('ik_boot_passed');
  });

  const handleBootComplete = () => {
    sessionStorage.setItem('ik_boot_passed', 'true');
    setBootSequenceActive(false);
  };

  return (
    <BrowserRouter>
      {/* Initial Aerospace System Boot Sequence */}
      {bootSequenceActive && <SystemLoader onComplete={handleBootComplete} />}

      {/* Global Aerospace Background Elements */}
      <div className="aerospace-bg-grid"></div>
      <div className="aerospace-vignette"></div>
      <div className="noise-overlay"></div>

      <div className="page-wrapper">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
