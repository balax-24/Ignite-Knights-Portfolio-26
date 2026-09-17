import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { partnersMeta, partnerTracks, active4Partners, archived3Partners } from '../data/partners';
import {
  Handshake,
  Cpu,
  PenTool,
  Hammer,
  Shield,
  ArrowUpRight,
  Archive,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';

export function PartnersPage() {
  return (
    <div className="partners-page">
      {/* Page Hero Header */}
      <PageHero
        badge="IGNITE KNIGHTS 4.0 // PARTNERSHIPS"
        title="INDUSTRY PARTNERS &"
        highlight="COLLABORATION"
        subtitle={partnersMeta.description}
        telemetry="IK-04 // INDUSTRY PROGRAM 2026"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="current" size="sm" />
          <span className="tech-badge-dot active"></span>
          <span className="font-mono text-xs text-red">{partnersMeta.status}</span>
        </div>
      </PageHero>

      <div className="container py-8">
        {/* Official 4.0 Status Notice */}
        <div className="roster-status-banner mb-12">
          <div className="banner-left">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} className="text-red animate-pulse" />
              <span className="tech-label text-red">4.0 PARTNERSHIP CAMPAIGN</span>
            </div>
            <h3 className="banner-title text-white font-bold text-lg">
              4.0 INDUSTRY SPONSORSHIPS CURRENTLY OPEN
            </h3>
            <p className="banner-desc text-sm text-gray-400">
              We are actively inviting technology companies, semiconductor developers, composite manufacturers, and CAD/CFD simulation providers to power the 4.0 flight campaign.
            </p>
          </div>

          <div className="banner-right flex items-center">
            <Link to="/contact" className="btn-aerospace btn-aerospace-red">
              <span>PROPOSE A PARTNERSHIP</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4.0 Partnership Tracks Grid */}
        <section className="partnership-tracks-section mb-16">
          <div className="section-header-wrap mb-8">
            <div className="section-meta-bar">
              <div className="flex items-center gap-2">
                <span className="tech-tag tech-tag-red">01 // COLLABORATION PATHS</span>
                <span className="tech-label">4.0 ENGAGEMENT TRACKS</span>
              </div>
              <span className="section-coord">IK-04 // INDUSTRY RECOGNITION</span>
            </div>
            <h2 className="section-title-large">
              HOW TO COLLABORATE <span className="section-title-highlight">WITH 4.0</span>
            </h2>
          </div>

          <div className="partner-tracks-grid">
            {partnerTracks.map((track) => (
              <div key={track.code} className="partner-track-card">
                <div className="track-code-strip font-mono text-xs">
                  <span className="text-red">{track.code}</span>
                  <span className="text-gray-500">// 4.0 PROGRAM</span>
                </div>

                <h3 className="track-tier text-white font-bold text-base mt-2 mb-2">{track.tier}</h3>
                <p className="track-desc text-xs text-gray-300 mb-4">{track.description}</p>

                <div className="track-benefits-block font-mono text-xs">
                  <span className="tech-label text-gray-400 mb-2 block">PARTNER DELIVERABLES:</span>
                  <ul className="space-y-1">
                    {track.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-red flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current 4.0 Partner Slots (Editable) */}
        <section className="current-partners-slots mb-16">
          <div className="section-header-wrap mb-6">
            <div className="section-meta-bar">
              <span className="tech-tag tech-tag-red">02 // ROSTER</span>
              <span className="tech-label">CONFIRMED 4.0 PARTNERS</span>
            </div>
            <h3 className="text-lg font-bold text-white">4.0 PARTNER DIRECTORY</h3>
          </div>

          {active4Partners.length === 0 ? (
            <div className="partners-updating-box">
              <Clock size={24} className="text-red mb-2 animate-pulse" />
              <h4 className="text-white font-mono font-bold">CURRENT 4.0 PARTNERS : UPDATING</h4>
              <p className="text-xs text-gray-400 max-w-md mt-1">
                New agreements are undergoing legal and administrative certification. Confirmed 4.0 partners will be published here upon formal signing.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="btn-aerospace btn-aerospace-sm btn-aerospace-outline">
                  <span>SUBMIT PARTNERSHIP INQUIRY</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="partners-grid">
              {/* Maps real 4.0 partners when available */}
            </div>
          )}
        </section>

        {/* Section: 3.0 ARCHIVED TECHNOLOGY SPONSORS (Strictly Labelled) */}
        <section className="archived-sponsors-section">
          <div className="archive-section-header-block mb-8">
            <div className="flex items-center gap-3 mb-2">
              <GenerationBadge variant="archive" size="md" />
              <span className="font-mono text-xs text-gray-400">HISTORICAL SPONSORSHIP ATTRIBUTION</span>
            </div>
            <h3 className="section-title-large">
              IGNITE KNIGHTS 3.0 <span className="text-gray-400">ARCHIVED TECHNOLOGY LICENSES</span>
            </h3>
            <p className="section-subtitle-editorial">
              The following 9 premier software licenses supported the engineering simulations and CAD assemblies of our previous generation (Ignite Knights 3.0, 2024–2026). Preserved here for historical attribution.
            </p>
          </div>

          <div className="archived-partners-grid">
            {archived3Partners.map((sp, idx) => (
              <div key={idx} className="archived-partner-card">
                <div className="archived-card-top">
                  <span className="badge-3-tag font-mono">3.0 ARCHIVE</span>
                  <span className="font-mono text-xs text-gray-500">2024–2026</span>
                </div>

                <div className="archived-logo-wrap">
                  <img
                    src={sp.logo}
                    alt={sp.name}
                    className="archived-logo-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <h4 className="archived-partner-name text-white font-bold">{sp.name}</h4>
                <p className="archived-partner-role text-xs text-gray-400 mt-1">{sp.role}</p>

                <div className="archived-card-foot font-mono text-xs text-gray-500 mt-3 pt-2 border-t border-white/5">
                  PREVIOUS GENERATION LICENSE
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
              <Archive size={14} />
              <span>EXPLORE ALL 3.0 HISTORICAL SPONSORSHIPS IN ARCHIVE →</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
