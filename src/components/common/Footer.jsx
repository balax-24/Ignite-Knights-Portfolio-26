import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, archiveLink, contactLink, teamContactInfo } from '../../data/navigation';
import { GenerationBadge } from './GenerationBadge';
import { ArrowUpRight, Mail, Phone, MapPin, Radio, Archive } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Engineering Top Bar */}
      <div className="footer-top-rule">
        <div className="container">
          <div className="footer-rule-inner">
            <div className="flex items-center gap-3">
              <span className="footer-freq-tag">IGNITE KNIGHTS 4.0 // AUTONOMOUS AERIAL SYSTEMS</span>
              <span className="tech-badge-dot active"></span>
              <span className="text-xs text-gray-400">STATUS: IN DEVELOPMENT</span>
            </div>
            <span className="footer-coord-tag">{teamContactInfo.coordinates}</span>
          </div>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Ignite Knights 4.0 Brand & Mission */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-lockup">
              <img
                src="/brand/ignite-logo.png"
                alt="Ignite Knights 4.0"
                className="footer-logo-img"
                onError={(e) => {
                  e.target.src = '/brand/ignite-icon.png';
                }}
              />
              <div className="footer-brand-title">
                <span>IGNITE KNIGHTS</span>
                <span className="brand-gen-pill">4.0</span>
              </div>
            </Link>

            <div className="mt-3 mb-3">
              <GenerationBadge variant="current" size="sm" />
            </div>

            <p className="footer-slogan">
              Engineering the next generation of autonomous aerial robotics.
            </p>
            <p className="footer-bio">
              A multidisciplinary student aerospace and autonomous systems engineering organization developing next-generation UAV platforms, edge computing architectures, and fail-safe flight autonomy.
            </p>

            <div className="footer-status-pill">
              <span className="status-dot active"></span>
              <span className="tech-label">SYSTEM : 4.0 ACTIVE DEVELOPMENT</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-num">01 //</span>
              <span className="footer-col-title">NAVIGATION</span>
            </div>
            <ul className="footer-nav-list">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    <span>{link.name}</span>
                    <ArrowUpRight size={13} className="footer-arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Aircraft & Operations */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-num">02 //</span>
              <span className="footer-col-title">SYSTEMS & MISSIONS</span>
            </div>
            <ul className="footer-nav-list">
              {navLinks.slice(4).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    <span>{link.name}</span>
                    <ArrowUpRight size={13} className="footer-arrow" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to={contactLink.path} className="footer-nav-link">
                  <span>{contactLink.name}</span>
                  <ArrowUpRight size={13} className="footer-arrow" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Base of Operations */}
          <div className="footer-col footer-col-contact">
            <div className="footer-col-header">
              <span className="footer-col-num">03 //</span>
              <span className="footer-col-title">BASE OF OPERATIONS</span>
            </div>
            <div className="footer-contact-items">
              <a href={`mailto:${teamContactInfo.email}`} className="footer-contact-item">
                <Mail size={15} className="text-red" />
                <span>{teamContactInfo.email}</span>
              </a>
              <a href={`tel:${teamContactInfo.phonePrimary}`} className="footer-contact-item">
                <Phone size={15} className="text-red" />
                <span>{teamContactInfo.phonePrimary}</span>
              </a>
              <a href={`tel:${teamContactInfo.phoneSecondary}`} className="footer-contact-item">
                <Phone size={15} className="text-red" />
                <span>{teamContactInfo.phoneSecondary}</span>
              </a>
              <div className="footer-contact-item location-item">
                <MapPin size={17} className="text-red flex-shrink-0" />
                <span>
                  {teamContactInfo.institution},<br />
                  {teamContactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Distinct 3.0 Historical Archive Section */}
        <div className="footer-archive-portal-strip">
          <div className="footer-archive-info">
            <GenerationBadge variant="archive" size="sm" />
            <div className="archive-strip-text">
              <span className="font-semibold text-white">IGNITE KNIGHTS 3.0 HISTORICAL ARCHIVE (2024–2026)</span>
              <p className="text-xs text-gray-400">
                Explore the previous generation’s founding aircraft, Top 10 SAE ADDC 2025 finish, 9 industry software sponsors, and original roster.
              </p>
            </div>
          </div>
          <Link to={archiveLink.path} className="btn-aerospace btn-aerospace-archive-cta">
            <Archive size={14} />
            <span>3.0 ARCHIVE →</span>
          </Link>
        </div>

        {/* Bottom Bar with Technical Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>© {currentYear} IGNITE KNIGHTS 4.0. ALL RIGHTS RESERVED.</span>
            <span className="footer-bar-sep">|</span>
            <span>AUTONOMOUS AERIAL SYSTEMS LAB</span>
          </div>
          <div className="footer-bottom-right">
            <span className="tech-label">IK-04 SYSTEM ARCHITECTURE // ROS2 HUMBLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
