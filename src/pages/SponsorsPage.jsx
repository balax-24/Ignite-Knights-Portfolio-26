import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { sponsorsData } from '../data/sponsorsData';
import { SponsorCard } from '../components/cards/SponsorCard';
import { Cpu, Layers, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function SponsorsPage() {
  return (
    <div className="sponsors-page">
      {/* Hero */}
      <PageHero
        badge="TECHNOLOGY ECOSYSTEM // INDUSTRY PARTNERS"
        title="POWERED BY"
        highlight="COLLABORATION."
        subtitle="Proudly supported by industry-leading technology partners who enable our innovation through world-class simulation, CAD, avionics, and computing suites."
        telemetry="PARTNER ECOSYSTEM : 9 PREMIER ENGINEERING ALLIANCES"
      />

      {/* Narrative Context Banner */}
      <section className="sponsors-overview-section">
        <div className="container">
          <div className="sponsors-intro-card corner-bracket-box">
            <div className="flex items-center gap-2 mb-3">
              <span className="status-dot active"></span>
              <span className="tech-label tech-label-red">INDUSTRY-STANDARD CAPABILITIES</span>
            </div>
            <h2 className="sponsors-intro-title">
              PROFESSIONAL-GRADE TOOLCHAINS FROM CONCEPT TO DEPLOYMENT.
            </h2>
            <p className="sponsors-intro-desc">
              Building competition-winning autonomous UAVs demands the exact same software platforms
              utilized by global aerospace contractors and Formula 1 motorsport engineering teams.
              Through generous institutional and direct technological licensing partnerships, our student
              engineers conduct multi-physics FEA, computational fluid dynamics, PCB routing, and
              virtual 3D arena synthesis prior to any physical flight.
            </p>
          </div>
        </div>
      </section>

      {/* Complete 9-Partner Ecosystem Grid */}
      <section className="sponsors-grid-section">
        <div className="container">
          <SectionHeader
            number="01"
            tag="PARTNER ROSTER"
            title="THE TECHNOLOGY"
            highlight="STACK"
            subtitle="Explore how our 9 technology partners directly integrate into our airframe CAD, aerodynamics, avionics, and autonomous simulation pipelines."
          />

          <div className="sponsors-grid">
            {sponsorsData.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiries Callout */}
      <section className="sponsors-inquiry-section">
        <div className="container">
          <div className="sponsors-cta-box corner-bracket-box">
            <div className="cta-content">
              <span className="tech-label tech-label-red">SUPPORT STUDENT AEROSPACE R&D</span>
              <h2 className="cta-h2">BECOME A TECHNOLOGY OR SPONSORSHIP PARTNER</h2>
              <p className="cta-p">
                Help empower the next generation of aerospace, autonomous systems, and AI engineers.
                We collaborate with hardware manufacturers, composite suppliers, and software developers.
              </p>
            </div>
            <a href="/contact" className="btn-aerospace btn-aerospace-primary">
              <span>DISCUSS PARTNERSHIP →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
