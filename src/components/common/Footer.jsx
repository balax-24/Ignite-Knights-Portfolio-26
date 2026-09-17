import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, archiveLink, contactLink, teamContactInfo } from '../../data/navigation';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Editorial Row */}
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <h2 className="footer-brand-heading">IGNITE KNIGHTS 4.0</h2>
            <div className="footer-gen-meta">
              <span className="editorial-tag red-dot">CURRENT GENERATION</span>
              <span className="editorial-tag">AUTONOMOUS AERIAL SYSTEMS</span>
            </div>
            <p className="footer-brand-statement">
              Designing, manufacturing, and deploying next-generation autonomous unmanned aerial systems. Engineered in-house from first principles.
            </p>
          </div>

          {/* Quick Nav Directory */}
          <div className="footer-nav-block">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={contactLink.path} className="footer-nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* 3.0 Historical Archive Callout */}
          <div className="footer-archive-block">
            <span className="footer-col-title">HISTORICAL RECORD</span>
            <p className="footer-archive-text">
              Ignite Knights 3.0 represents the previous generation (2024–2026), including our inaugural aircraft, SAE ADDC 2025 finish, legacy team, and software partners.
            </p>
            <Link to={archiveLink.path} className="footer-archive-portal-link">
              <span>3.0 ARCHIVE</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copy">
            © {currentYear} IGNITE KNIGHTS 4.0 · ALL RIGHTS RESERVED
          </span>
          <div className="footer-bottom-coords">
            <span>{teamContactInfo.institution}</span>
            <span className="separator">·</span>
            <span>{teamContactInfo.coordinates}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
