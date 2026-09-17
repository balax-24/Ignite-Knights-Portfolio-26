import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks, archiveLink, contactLink } from '../../data/navigation';
import { Menu, X, Radio, ArrowUpRight, Archive } from 'lucide-react';
import { GenerationBadge } from './GenerationBadge';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Transition from transparent to dark background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Ignite Knights 4.0 Brand Lockup */}
        <Link to="/" className="navbar-brand" aria-label="Ignite Knights 4.0 Home">
          <div className="navbar-logo-wrap">
            <img
              src="/brand/ignite-icon.png"
              alt="Ignite Knights 4.0"
              className="navbar-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="navbar-status-indicator pulse"></span>
          </div>
          <div className="navbar-brand-text">
            <div className="brand-title-wrap">
              <span className="brand-title">IGNITE KNIGHTS</span>
              <span className="brand-gen-pill">4.0</span>
            </div>
            <span className="brand-subtitle">AUTONOMOUS AERIAL SYSTEMS</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with Thin Separators & Red Indicator */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="nav-link-text">{link.name}</span>
                  <span className="nav-active-indicator"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Distinct 3.0 Archive Link + Contact CTA */}
        <div className="navbar-actions">
          {/* Distinct 3.0 Archive Button */}
          <NavLink
            to={archiveLink.path}
            className={({ isActive }) =>
              `navbar-archive-btn ${isActive ? 'active' : ''}`
            }
            title="Access Ignite Knights 3.0 Historical Archive (2024–2026)"
          >
            <Archive size={12} className="archive-icon" />
            <span className="archive-btn-text">3.0 ARCHIVE</span>
            <span className="archive-tag">HISTORICAL</span>
          </NavLink>

          {/* Strong Contact CTA */}
          <Link to={contactLink.path} className="btn-aerospace btn-aerospace-red navbar-cta">
            <span>CONTACT</span>
            <ArrowUpRight size={13} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Command Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Command-Style Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="drawer-telemetry">
            <GenerationBadge variant="current" size="sm" />
            <span className="tech-label ml-2">MISSION COMMAND // 2026</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Command Menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile Navigation">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `mobile-drawer-link ${isActive ? 'active' : ''}`
              }
            >
              <span className="drawer-link-num">0{idx + 1}</span>
              <span className="drawer-link-title">{link.name}</span>
              <ArrowUpRight size={16} className="drawer-link-arrow" />
            </NavLink>
          ))}

          {/* Mobile Archive Link */}
          <NavLink
            to={archiveLink.path}
            className={({ isActive }) =>
              `mobile-drawer-link mobile-drawer-archive ${isActive ? 'active' : ''}`
            }
          >
            <span className="drawer-link-num">HIST</span>
            <div className="flex items-center gap-2">
              <Archive size={14} className="text-gray-400" />
              <span className="drawer-link-title">3.0 ARCHIVE</span>
            </div>
            <span className="tech-badge-archive">2024–2026</span>
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="drawer-status-box">
            <span className="tech-label text-red">AIRCRAFT SYSTEM // IK-04</span>
            <p className="text-xs text-gray-400 mt-1">STATUS: IN DEVELOPMENT // INTEGRATION MODE</p>
          </div>
          <Link
            to="/contact"
            className="btn-aerospace btn-aerospace-primary drawer-action-btn w-full text-center"
          >
            INITIATE MISSION CONTACT →
          </Link>
        </div>
      </div>
    </header>
  );
}
