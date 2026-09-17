import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, teamContactInfo } from '../../data/navigation';
import { ArrowUpRight, Mail, Phone, MapPin, Radio, Compass, ShieldCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-rule">
        <div className="container">
          <div className="footer-rule-inner">
            <span className="footer-freq-tag">UAV FREQ : 915MHz TELEMETRY // MAVLINK 2.0 PROTOCOL</span>
            <span className="footer-coord-tag">LAT 12.9249° N, LON 80.0543° E</span>
          </div>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Brand, Slogan & Identity */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-lockup">
              <img
                src="/brand/ignite-logo.png"
                alt="Ignite Knights 3.0"
                className="footer-logo-img"
                onError={(e) => {
                  e.target.src = '/brand/ignite-icon.png';
                }}
              />
              <div className="footer-brand-title">
                <span>IGNITE KNIGHTS <span className="text-red">3.0</span></span>
              </div>
            </Link>
            <p className="footer-slogan">
              Engineering the sky. Building beyond limits.
            </p>
            <p className="footer-bio">
              A multidisciplinary student aerospace and autonomous systems team engineering competition-grade UAVs, edge AI computer vision, and autonomous aerial platforms.
            </p>
            <div className="footer-status-pill">
              <span className="status-dot active"></span>
              <span className="tech-label">MISSION STATUS : ONLINE 2026</span>
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

          {/* Column 3: Operations & Arena */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-num">02 //</span>
              <span className="footer-col-title">MISSIONS & ARENA</span>
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
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-col footer-col-contact">
            <div className="footer-col-header">
              <span className="footer-col-num">03 //</span>
              <span className="footer-col-title">BASE OF OPERATIONS</span>
            </div>
            <div className="footer-contact-items">
              <a href={`mailto:${teamContactInfo.email}`} className="footer-contact-item">
                <Mail size={16} className="text-red" />
                <span>{teamContactInfo.email}</span>
              </a>
              <a href={`tel:${teamContactInfo.phonePrimary}`} className="footer-contact-item">
                <Phone size={16} className="text-red" />
                <span>{teamContactInfo.phonePrimary}</span>
              </a>
              <a href={`tel:${teamContactInfo.phoneSecondary}`} className="footer-contact-item">
                <Phone size={16} className="text-red" />
                <span>{teamContactInfo.phoneSecondary}</span>
              </a>
              <div className="footer-contact-item location-item">
                <MapPin size={18} className="text-red flex-shrink-0" />
                <span>
                  {teamContactInfo.institution},<br />
                  {teamContactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Technical Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>© {currentYear} IGNITE KNIGHTS 3.0. ALL RIGHTS RESERVED.</span>
            <span className="footer-bar-sep">|</span>
            <span>AUTONOMOUS AERIAL SYSTEMS RESEARCH</span>
          </div>
          <div className="footer-bottom-right">
            <span className="tech-label">AVIONICS FIRMWARE v3.4.2 // ROS2 HUMBLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
