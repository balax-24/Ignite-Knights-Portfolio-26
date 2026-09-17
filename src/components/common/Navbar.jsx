import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navLinks, archiveLink, contactLink } from '../../data/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Clean transition from transparent to solid dark on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        {/* Left: Clean Brand Wordmark */}
        <Link to="/" className="navbar-brand" aria-label="Ignite Knights 4.0">
          <span className="navbar-brand-title">IGNITE KNIGHTS</span>
          <span className="navbar-brand-badge">04</span>
        </Link>

        {/* Center: Visually Quiet Desktop Navigation */}
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
                  {link.name}
                </NavLink>
              </li>
            ))}
            {/* Archive link */}
            <li className="nav-item">
              <NavLink
                to={archiveLink.path}
                className={({ isActive }) =>
                  `nav-link nav-link-archive ${isActive ? 'active' : ''}`
                }
              >
                ARCHIVE
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right: Clean Contact CTA */}
        <div className="navbar-right">
          <Link to={contactLink.path} className="nav-contact-cta">
            <span>CONTACT</span>
            <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Editorial Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-header">
              <span className="editorial-tag red-dot">IGNITE KNIGHTS 4.0</span>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="mobile-nav-idx">0{idx + 1}</span>
                  <span className="mobile-nav-title">{link.name}</span>
                </NavLink>
              ))}
              <NavLink
                to={archiveLink.path}
                className={({ isActive }) =>
                  `mobile-nav-link mobile-nav-archive ${isActive ? 'active' : ''}`
                }
              >
                <span className="mobile-nav-idx">09</span>
                <span className="mobile-nav-title">3.0 ARCHIVE</span>
              </NavLink>
              <NavLink
                to={contactLink.path}
                className={({ isActive }) =>
                  `mobile-nav-link mobile-nav-contact ${isActive ? 'active' : ''}`
                }
              >
                <span className="mobile-nav-idx">10</span>
                <span className="mobile-nav-title">CONTACT</span>
              </NavLink>
            </nav>

            <div className="mobile-menu-footer">
              <span className="editorial-tag">CURRENT GENERATION // 2026</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
