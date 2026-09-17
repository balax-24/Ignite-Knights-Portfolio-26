import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// 10 Dedicated Aerospace Pages for Ignite Knights 4.0 & 3.0 Archive
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { AircraftPage } from './pages/AircraftPage';
import { MissionsPage } from './pages/MissionsPage';
import { JourneyPage } from './pages/JourneyPage';
import { GalleryPage } from './pages/GalleryPage';
import { PartnersPage } from './pages/PartnersPage';
import { ArchivePage } from './pages/ArchivePage';
import { ContactPage } from './pages/ContactPage';

// Editorial Stylesheets
import './styles/index.css';
import './styles/drone3d.css';
import './styles/components.css';
import './styles/pages.css';

export default function App() {
  return (
    <BrowserRouter>
      {/* Subtle organic film grain texture */}
      <div className="noise-overlay" aria-hidden="true"></div>

      <div className="page-wrapper">
        <Navbar />

        <main className="page-content" id="main-content">
          <Routes>
            {/* Primary 4.0 Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/aircraft" element={<AircraftPage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Backwards Compatibility / Legacy Route Redirects */}
            <Route path="/competitions" element={<Navigate to="/missions" replace />} />
            <Route path="/sponsors" element={<Navigate to="/partners" replace />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
