import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { Menu, X, Radio, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll state for navbar backdrop blur and background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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
        {/* Left: Team Logo & Branding */}
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo-wrap">
            <img
              src="/brand/ignite-icon.png"
              alt="Ignite Knights 3.0"
              className="navbar-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="navbar-status-indicator pulse"></span>
          </div>
          <div className="navbar-brand-text">
            <span className="brand-title">IGNITE KNIGHTS <span className="text-red">3.0</span></span>
            <span className="brand-subtitle">AUTONOMOUS AERIAL SYSTEMS</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav">
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
                  <span className="nav-active-pill"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Technical Readiness & Direct CTA */}
        <div className="navbar-actions">
          <div className="telemetry-badge">
            <Radio size={12} className="text-red animate-pulse" />
            <span className="telemetry-text">LINK : 915MHz</span>
          </div>
          <Link to="/contact" className="btn-aerospace btn-aerospace-outline-red navbar-cta">
            <span>ENGAGE TEAM</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="drawer-telemetry">
            <span className="status-dot active"></span>
            <span className="tech-label">MISSION CONTROL MENU // 2026</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-links">
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
              <ArrowUpRight size={18} className="drawer-link-arrow" />
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div className="drawer-contact-snippet">
            <span className="tech-label">HEADQUARTERS</span>
            <p className="drawer-contact-loc">Sairam Institution, West Tambaram, Chennai-44</p>
            <p className="drawer-contact-tel">+91 82482 29487</p>
          </div>
          <Link to="/contact" className="btn-aerospace btn-aerospace-primary drawer-action-btn">
            LET'S BUILD WHAT FLIES NEXT →
          </Link>
        </div>
      </div>
    </header>
  );
}
