import React from 'react';
import { Link } from 'react-router-dom';
import { DroneScene } from '../components/3d/DroneScene';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { SectionHeader } from '../components/common/SectionHeader';
import { technicalDomains } from '../data/domainsData';
import { aircraft } from '../data/aircraft';
import { missionsData } from '../data/missions';
import { archiveGenerationInfo } from '../data/archive';
import {
  ArrowUpRight,
  ChevronRight,
  Radio,
  Cpu,
  Shield,
  Layers,
  Activity,
  Crosshair,
  Archive,
  Compass,
  Zap,
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="home-page">
      {/* ====================================================================
          1. HERO SECTION: 4.0 IDENTITY + DOMINANT 3D UAV + TELEMETRY
         ==================================================================== */}
      <section className="home-hero-section">
        <div className="container home-hero-container">
          <div className="home-hero-text-col">
            {/* Technical Identifier & Generation Badge */}
            <div className="hero-tech-label-group">
              <GenerationBadge variant="current" size="sm" />
              <span className="hero-id-tag font-mono">
                IK / 04 // AUTONOMOUS AERIAL SYSTEMS // 2026 → PRESENT
              </span>
            </div>

            {/* Oversized Engineering Display Typography */}
            <h1 className="home-hero-title">
              ENGINEERING<br />
              THE NEXT<br />
              <span className="text-red">FLIGHT.</span>
            </h1>

            {/* 4.0 Mission Statement */}
            <p className="home-hero-desc">
              Ignite Knights 4.0 represents a clean-sheet generation of autonomous aerial robotics.
              Designing next-generation UAV architectures, heterogeneous edge compute, and
              fault-tolerant flight autonomy for complex GPS-degraded operational environments.
            </p>

            {/* Primary Action Controls */}
            <div className="home-hero-actions">
              <Link to="/aircraft" className="btn-aerospace btn-aerospace-red">
                <span>INSPECT 4.0 AIRCRAFT</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/missions" className="btn-aerospace btn-aerospace-outline">
                <span>CURRENT MISSIONS</span>
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* 4.0 Development Telemetry Strip */}
            <div className="hero-quick-specs">
              <div className="hero-spec-item">
                <span className="spec-title">AIRCRAFT</span>
                <span className="spec-val text-red font-mono">{aircraft.designation}</span>
              </div>
              <div className="hero-spec-divider"></div>
              <div className="hero-spec-item">
                <span className="spec-title">SYSTEM STATUS</span>
                <span className="spec-val font-mono">{aircraft.status}</span>
              </div>
              <div className="hero-spec-divider"></div>
              <div className="hero-spec-item">
                <span className="spec-title">INTEGRATION MODE</span>
                <span className="spec-val text-red font-mono">BENCH STANDBY</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Realistic Interactive UAV Component */}
        <DroneScene showHotspots={true} showHUD={true} />

        {/* Bottom Hero Fade Rule */}
        <div className="hero-bottom-rule">
          <div className="container">
            <div className="hero-rule-content">
              <span className="tech-label">IK-04 DEVELOPMENT AIRCRAFT // CARBON COMPOSITE // MODULAR AVIONICS</span>
              <span className="tech-label tech-label-red">INTERACTION : DRAG TO ROTATE // CLICK HOTSPOTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MAJOR EDITORIAL SECTION: WHAT IS 4.0?
         ==================================================================== */}
      <section className="editorial-what-is-4-section">
        <div className="container">
          <div className="what-is-header-block">
            <div className="what-is-meta-tag">
              <span className="tech-tag tech-tag-red">SYSTEM PHILOSOPHY</span>
              <span className="font-mono text-xs text-gray-400">IK4-GEN-MANIFESTO</span>
            </div>

            <h2 className="what-is-hero-heading">
              THIS IS NOT<br />
              A REVISION.<br />
              <span className="text-red">IT'S A NEW GENERATION.</span>
            </h2>

            <p className="what-is-lead-text">
              Ignite Knights 4.0 is not a minor refresh of previous platforms. It is an intentional,
              systemic evolution. A new engineering cohort, a clean-sheet UAV airframe, new flight
              control loops, and higher autonomous benchmarks designed for real-world reliability.
            </p>
          </div>

          {/* 5 Structural Pillars of Generation 4.0 */}
          <div className="what-is-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-num font-mono">01 // TEAM</div>
              <h3 className="pillar-title">NEW ENGINEERING COHORT</h3>
              <p className="pillar-desc">
                An incoming multidisciplinary engineering team bridging aerospace dynamics, edge neural computing, embedded firmware, and precision mechanics.
              </p>
              <span className="pillar-tag font-mono">ROSTER CERTIFICATION IN PROGRESS</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-num font-mono text-red">02 // AIRCRAFT</div>
              <h3 className="pillar-title">CLEAN-SHEET AIRFRAME</h3>
              <p className="pillar-desc">
                The IK-04 development aircraft replaces legacy geometries with modular composite plates, high-stiffness tubular arms, and rapid payload exchange bays.
              </p>
              <span className="pillar-tag font-mono">IK-04 IN ACTIVE DESIGN</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-num font-mono">03 // METHODOLOGY</div>
              <h3 className="pillar-title">SYSTEMS-FIRST APPROACH</h3>
              <p className="pillar-desc">
                Rigorous simulation before fabrication. Every carbon layup, thermal boundary, and sensor bus packet is verified before hardware-in-the-loop tests.
              </p>
              <span className="pillar-tag font-mono">7-STAGE PIPELINE ACTIVE</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-num font-mono text-red">04 // MISSIONS</div>
              <h3 className="pillar-title">NEXT-ERA CHALLENGES</h3>
              <p className="pillar-desc">
                Formulating brand-new operational profiles tailored for upcoming national aerospace tournaments, precision payload release, and GPS-denied navigation.
              </p>
              <span className="pillar-tag font-mono">CURRENT SPECIFICATION PHASE</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-num font-mono">05 // CULTURE</div>
              <h3 className="pillar-title">REPRODUCIBLE EXCELLENCE</h3>
              <p className="pillar-desc">
                Honoring the foundational achievements of Ignite Knights 3.0 while setting a higher standard of technical rigor, safety, and telemetry clarity.
              </p>
              <span className="pillar-tag font-mono">HONORING LEGACY // BUILDING AHEAD</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. CURRENT AIRCRAFT SPOTLIGHT: IK-04
         ==================================================================== */}
      <section className="home-aircraft-spotlight">
        <div className="container">
          <SectionHeader
            number="02"
            tag="AIRCRAFT SPOTLIGHT"
            title="THE 4.0 DEVELOPMENT"
            highlight="AIRCRAFT"
            subtitle="The IK-04 platform serves as our advanced testbed for autonomy, edge compute, and aerodynamic refinement."
            coord="IK-04 // 4.0 AUTONOMOUS SYSTEMS"
          />

          <div className="aircraft-spotlight-grid">
            <div className="spotlight-left-specs">
              <div className="spotlight-badge-row">
                <GenerationBadge variant="current" size="sm" />
                <span className="font-mono text-xs text-gray-400">DESIGNATION: IK-04</span>
              </div>

              <h3 className="spotlight-aircraft-title">{aircraft.name}</h3>
              <p className="spotlight-aircraft-desc">{aircraft.overview}</p>

              {/* Subsystems Specification Table */}
              <div className="spotlight-subsystems-list">
                {Object.entries(aircraft.subsystems).slice(0, 4).map(([key, sub]) => (
                  <div key={key} className="spotlight-subsystem-row">
                    <div className="sub-row-head">
                      <span className="sub-name">{sub.name}</span>
                      <span className="sub-status text-red font-mono">{sub.status}</span>
                    </div>
                    <div className="sub-placeholder font-mono text-xs text-gray-400">
                      {sub.spec}
                    </div>
                  </div>
                ))}
              </div>

              <div className="spotlight-cta-wrap">
                <Link to="/aircraft" className="btn-aerospace btn-aerospace-red">
                  <span>ENTER 3D AIRCRAFT LAB & EXPLODED VIEW</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: Technical Diagram & Hotspot Matrix */}
            <div className="spotlight-right-telemetry">
              <div className="spotlight-radar-box">
                <div className="radar-header">
                  <span className="tech-label">SUBSYSTEM SCHEMATIC // IK-04</span>
                  <Crosshair size={14} className="text-red" />
                </div>

                <div className="radar-hotspots-grid">
                  {aircraft.hotspots.map((h, i) => (
                    <div key={h.id} className="radar-hotspot-item">
                      <div className="hotspot-idx font-mono text-red">0{i + 1}</div>
                      <div className="hotspot-info">
                        <div className="hotspot-name">{h.title}</div>
                        <div className="hotspot-sub font-mono text-xs text-gray-500">{h.system}</div>
                        <div className="hotspot-spec-pill font-mono">{h.specPlaceholder}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="radar-footer">
                  <span className="text-xs text-gray-500 font-mono">
                    All specifications editable from src/data/aircraft.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. ENGINEERING DOMAINS SECTION
         ==================================================================== */}
      <section className="home-domains-section">
        <div className="container">
          <SectionHeader
            number="03"
            tag="CORE DISCIPLINES"
            title="ENGINEERING"
            highlight="DOMAINS"
            subtitle="Six interconnected engineering disciplines working in deterministic synchronization."
            coord="IK-04 // SUBSYSTEM SYNCHRONIZATION"
          />

          <div className="domains-editorial-grid">
            {technicalDomains.map((dom) => (
              <div key={dom.id} className="domain-editorial-card">
                <div className="domain-card-header">
                  <span className="domain-num font-mono">{dom.number}</span>
                  <div className="domain-tags-wrap">
                    {dom.techStack.slice(0, 2).map((t) => (
                      <span key={t} className="tech-badge font-mono">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="domain-title">{dom.title}</h3>
                <p className="domain-tagline text-red font-mono text-xs mb-2">{dom.tagline}</p>
                <p className="domain-desc">{dom.description}</p>

                <div className="domain-specs-bar">
                  {dom.specs.map((s, idx) => (
                    <div key={idx} className="domain-spec-col">
                      <span className="spec-label">{s.label}</span>
                      <span className="spec-val font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="domain-telemetry-foot font-mono text-xs">
                  {dom.telemetry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. CURRENT MISSIONS SECTION
         ==================================================================== */}
      <section className="home-missions-section">
        <div className="container">
          <SectionHeader
            number="04"
            tag="OPERATIONAL ROADMAP"
            title="CURRENT"
            highlight="MISSIONS"
            subtitle="Autonomous challenges and flight scenarios currently in development for the 4.0 generation."
            coord="IK-04 // 4.0 FLIGHT PREPARATION"
          />

          <div className="missions-preview-grid">
            {missionsData.map((m) => (
              <div key={m.id} className="mission-preview-card">
                <div className="mission-card-meta">
                  <span className="mission-code font-mono text-red">{m.code}</span>
                  <span className="mission-status-badge font-mono">{m.status}</span>
                </div>

                <h3 className="mission-card-title">{m.name}</h3>
                <div className="mission-category font-mono text-xs text-gray-400 mb-2">{m.category}</div>
                <p className="mission-desc">{m.challenge}</p>

                <div className="mission-stage-box font-mono text-xs">
                  <span className="text-red">PIPELINE:</span> {m.pipelineStage}
                </div>

                <div className="mission-tech-pills">
                  {m.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="tech-pill font-mono">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="missions-footer-action mt-6 text-center">
            <Link to="/missions" className="btn-aerospace btn-aerospace-outline">
              <span>VIEW FULL 4.0 MISSIONS DOSSIER</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. HISTORICAL ARCHIVE ENTRY: IGNITE KNIGHTS 3.0 (2024–2026)
         ==================================================================== */}
      <section className="home-archive-portal-section">
        <div className="container">
          <div className="archive-portal-box">
            <div className="archive-portal-header">
              <div className="flex items-center gap-3">
                <GenerationBadge variant="archive" size="md" />
                <span className="font-mono text-xs text-gray-400">HISTORICAL PRESERVATION PORTAL</span>
              </div>
              <span className="font-mono text-xs text-gray-500">SYSTEM RECORD // ARCHIVED</span>
            </div>

            <div className="archive-portal-grid">
              <div className="archive-portal-left">
                <h3 className="archive-portal-title">
                  EXPLORE THE PREVIOUS GENERATION:<br />
                  <span className="text-gray-300">IGNITE KNIGHTS 3.0</span>
                </h3>

                <p className="archive-portal-text">
                  Before Ignite Knights 4.0, our foundational cohort engineered our first heavy-lift hexacopter,
                  built an advanced autonomous quadcopter, secured a Top 10 finish at SAE ADDC 2025, and established
                  technology licenses with 9 premier industry partners.
                </p>

                <div className="archive-highlights-strip">
                  <div className="archive-highlight-item">
                    <span className="h-val font-mono text-white">TOP 10</span>
                    <span className="h-lbl">SAE ADDC 2025 FINISH</span>
                  </div>
                  <div className="archive-highlight-divider"></div>
                  <div className="archive-highlight-item">
                    <span className="h-val font-mono text-white">9 SPONSORS</span>
                    <span className="h-lbl">INDUSTRY TECH PARTNERS</span>
                  </div>
                  <div className="archive-highlight-divider"></div>
                  <div className="archive-highlight-item">
                    <span className="h-val font-mono text-white">2 AIRCRAFT</span>
                    <span className="h-lbl">HEXACOPTER & QUADCOPTER</span>
                  </div>
                </div>

                <div className="mt-5">
                  <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                    <Archive size={16} />
                    <span>OPEN 3.0 HISTORICAL ARCHIVE</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="archive-portal-right">
                <div className="archive-preview-card">
                  <div className="archive-card-tag font-mono">PREVIOUS GENERATION (2024–2026)</div>
                  <img
                    src="/team/drone-hero.jpg"
                    alt="Ignite Knights 3.0 Hexacopter Airframe"
                    className="archive-card-img"
                  />
                  <div className="archive-card-caption font-mono text-xs text-gray-400">
                    FIGURE 3.0: Inaugural Hexacopter Airframe // SAE India 2024 Debut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. MISSION DISPATCH CTA
         ==================================================================== */}
      <section className="home-cta-dispatch">
        <div className="container">
          <div className="cta-dispatch-inner">
            <div className="cta-label-bar">
              <span className="tech-badge-dot active"></span>
              <span className="tech-label text-red">COMMUNICATION LINK // ACTIVE</span>
            </div>

            <h2 className="cta-dispatch-title">
              BUILD THE NEXT<br />
              <span className="text-red">FLIGHT WITH US.</span>
            </h2>

            <p className="cta-dispatch-desc">
              Whether you are an industry partner looking to test cutting-edge hardware,
              a sponsor supporting student aeronautics, or a researcher collaborating on autonomous systems,
              our team welcomes forward-looking engagements.
            </p>

            <div className="cta-dispatch-buttons">
              <Link to="/contact" className="btn-aerospace btn-aerospace-red">
                <span>DISPATCH TRANSMISSION</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/about" className="btn-aerospace btn-aerospace-outline">
                <span>OUR ENGINEERING METHODOLOGY</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
