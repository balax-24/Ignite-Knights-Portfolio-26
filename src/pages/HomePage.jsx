import React from 'react';
import { Link } from 'react-router-dom';
import { DroneScene } from '../components/3d/DroneScene';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { aircraft } from '../data/aircraft';
import { missionsData } from '../data/missions';
import { teamDepartments } from '../data/team';
import { legacy3Era, current4Era } from '../data/journey';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="home-editorial-page">
      {/* ====================================================================
          HERO: THE OPENING FRAME OF AN AEROSPACE FILM
          Enormous Headline + Single CTA + Dominant Studio 3D UAV + Clean Baseline
         ==================================================================== */}
      <section className="editorial-hero-section">
        <div className="container hero-editorial-grid">
          <div className="hero-editorial-left">
            <div className="hero-callsign">
              <span className="editorial-tag red-dot">IGNITE KNIGHTS // 04</span>
            </div>

            <h1 className="hero-headline-massive">
              BUILT<br />
              TO<br />
              FLY.
            </h1>

            <p className="hero-lead-text">
              Ignite Knights 4.0 is a clean-sheet generation of autonomous aerial engineering.
              Custom airframe architecture, embedded spatial perception, and flight-tested autonomy
              built in-house from first principles.
            </p>

            <div className="hero-single-cta">
              <Link to="/aircraft" className="btn-aerospace btn-aerospace-primary">
                <span>VIEW AIRCRAFT</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Dominant Real 4.0 UAV Presentation */}
          <div className="hero-drone-stage">
            <DroneScene />
          </div>
        </div>

        {/* Minimal Hero Bottom Edge (No floating HUDs) */}
        <div className="hero-edge-bar">
          <div className="container hero-edge-inner">
            <span>CURRENT GENERATION / 2026</span>
            <span className="dot-sep">·</span>
            <span>DESIGNED & FABRICATED IN-HOUSE</span>
            <span className="dot-sep">·</span>
            <span>IGNITE KNIGHTS 4.0</span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 01: A NEW GENERATION (Major Editorial Statement)
         ==================================================================== */}
      <section className="section-block section-new-gen">
        <div className="container">
          <div className="editorial-manifesto-grid">
            <div className="manifesto-lead-col">
              <span className="editorial-num">01</span>
              <h2 className="manifesto-title">
                THIS IS NOT<br />
                A REVISION.<br />
                <span className="text-red">IT'S A NEW<br />GENERATION.</span>
              </h2>
            </div>

            <div className="manifesto-body-col">
              <p className="manifesto-paragraph-lead">
                Every generation of an engineering team must earn its own altitude.
                Ignite Knights 4.0 does not iterate on legacy foundations—we re-engineered our approach from the first sketch to final flight testing.
              </p>

              <div className="pillars-editorial-list">
                <div className="pillar-row">
                  <span className="pillar-num">01</span>
                  <div className="pillar-content">
                    <h3 className="pillar-name">NEW PEOPLE</h3>
                    <p className="pillar-desc">
                      A newly forged multidisciplinary cohort combining robotics, aerospace, mechanical design, and embedded systems engineers under unified leadership.
                    </p>
                  </div>
                </div>

                <div className="pillar-row">
                  <span className="pillar-num">02</span>
                  <div className="pillar-content">
                    <h3 className="pillar-name">NEW AIRCRAFT</h3>
                    <p className="pillar-desc">
                      The IK-04 development UAV. A custom composite chassis, modular payload bay, and high-discharge propulsion stack engineered entirely in-house.
                    </p>
                  </div>
                </div>

                <div className="pillar-row">
                  <span className="pillar-num">03</span>
                  <div className="pillar-content">
                    <h3 className="pillar-name">NEW ENGINEERING</h3>
                    <p className="pillar-desc">
                      Heterogeneous onboard compute, neural inference at the edge, and deterministic flight control loops built for dynamic, GPS-degraded operational environments.
                    </p>
                  </div>
                </div>

                <div className="pillar-row">
                  <span className="pillar-num">04</span>
                  <div className="pillar-content">
                    <h3 className="pillar-name">NEW MISSIONS</h3>
                    <p className="pillar-desc">
                      Fresh operational objectives designed to push beyond standard telemetry and achieve full Level 4 tactical aerial autonomy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE AIRCRAFT (Clean Engineering Specification Layout)
         ==================================================================== */}
      <section className="section-block section-aircraft-spec">
        <div className="container">
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">02</span>
              <h2 className="section-title-editorial">THE AIRCRAFT</h2>
              <span className="editorial-tag red-dot">IK-04 // DEVELOPMENT UAV PLATFORM</span>
            </div>
            <Link to="/aircraft" className="editorial-text-link">
              <span>FULL CAD INSPECTION</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Clean Engineering Specification Table */}
          <div className="spec-table-editorial">
            <div className="spec-row-item">
              <span className="spec-item-key">AIRFRAME</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.airframe.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.airframe.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.airframe.status}</span>
            </div>

            <div className="spec-row-item">
              <span className="spec-item-key">PROPULSION</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.propulsion.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.propulsion.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.propulsion.status}</span>
            </div>

            <div className="spec-row-item">
              <span className="spec-item-key">CONTROL</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.control.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.control.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.control.status}</span>
            </div>

            <div className="spec-row-item">
              <span className="spec-item-key">COMPUTE</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.compute.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.compute.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.compute.status}</span>
            </div>

            <div className="spec-row-item">
              <span className="spec-item-key">PERCEPTION</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.perception.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.perception.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.perception.status}</span>
            </div>

            <div className="spec-row-item">
              <span className="spec-item-key">POWER</span>
              <div className="spec-item-data">
                <span className="spec-item-val">{aircraft.subsystems.power.name}</span>
                <p className="spec-item-desc">{aircraft.subsystems.power.description}</p>
              </div>
              <span className="spec-item-status">{aircraft.subsystems.power.status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: HOW WE BUILD (Engineering Development Sequence)
         ==================================================================== */}
      <section className="section-block section-pipeline">
        <div className="container">
          <div className="pipeline-header-block">
            <span className="editorial-num">03</span>
            <h2 className="section-title-editorial">HOW WE BUILD</h2>
            <p className="pipeline-header-desc">
              From first-principles mathematical derivation to closed-loop autonomous flight testing, our 7-stage development cycle enforces aeronautical rigor at every milestone.
            </p>
          </div>

          <div className="pipeline-sequence-container">
            <div className="pipeline-stage-card">
              <span className="stage-code">01</span>
              <h3 className="stage-title">CONCEPT</h3>
              <p className="stage-desc">
                Mission envelope definition, regulatory requirements decomposition, and aerodynamic sizing analysis.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">02</span>
              <h3 className="stage-title">DESIGN</h3>
              <p className="stage-desc">
                Parametric CAD modeling in SolidWorks and Fusion 360 with tolerance stack-up and mechanical fastener analysis.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">03</span>
              <h3 className="stage-title">SIMULATION</h3>
              <p className="stage-desc">
                Computational fluid dynamics (CFD) and finite-element structural stress simulation (FEA) under 8G maneuver loads.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">04</span>
              <h3 className="stage-title">FABRICATION</h3>
              <p className="stage-desc">
                Precision CNC routing of Toray carbon composite sheets and 7075-T6 aluminum aircraft-grade hardware.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">05</span>
              <h3 className="stage-title">INTEGRATION</h3>
              <p className="stage-desc">
                Avionics harness wiring, optical isolation, hardware-in-the-loop (HIL) bench simulation, and sensor calibration.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">06</span>
              <h3 className="stage-title">TEST</h3>
              <p className="stage-desc">
                Tethered hover validation, attitude step-response tuning, fail-safe trigger verification, and ground station telemetry logging.
              </p>
            </div>

            <div className="pipeline-stage-card">
              <span className="stage-code">07</span>
              <h3 className="stage-title">FLIGHT</h3>
              <p className="stage-desc">
                Full-envelope untethered autonomous flight trials across competitive and tactical research domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: CURRENT MISSIONS (Engineering Case Studies)
         ==================================================================== */}
      <section className="section-block section-missions-editorial">
        <div className="container">
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">04</span>
              <h2 className="section-title-editorial">CURRENT MISSIONS</h2>
              <span className="editorial-tag red-dot">4.0 OPERATIONAL SLOTS IN DEVELOPMENT</span>
            </div>
            <Link to="/missions" className="editorial-text-link">
              <span>ALL MISSION DOSSIERS</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="missions-case-study-list">
            {missionsData.map((mission) => (
              <div key={mission.id} className="mission-case-study-item">
                <div className="mission-meta-strip">
                  <span className="mission-serial-tag">{mission.designation}</span>
                  <span className="editorial-tag">{mission.status}</span>
                </div>
                <h3 className="mission-name-display">{mission.name}</h3>
                <p className="mission-objective-text">{mission.objective}</p>

                <div className="mission-specs-strip">
                  <div className="mission-spec-field">
                    <span className="spec-k">CHALLENGE</span>
                    <span className="spec-v">{mission.challenge}</span>
                  </div>
                  <div className="mission-spec-field">
                    <span className="spec-k">APPROACH</span>
                    <span className="spec-v">{mission.approach}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: THE TEAM (Editorial Magazine Profile)
         ==================================================================== */}
      <section className="section-block section-team-editorial">
        <div className="container">
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">05</span>
              <h2 className="section-title-editorial">THE TEAM</h2>
              <span className="editorial-tag red-dot">INCOMING 4.0 ENGINEERING COHORT</span>
            </div>
            <Link to="/team" className="editorial-text-link">
              <span>VIEW FULL DIRECTORY</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="team-editorial-spread">
            <div className="team-statement-box">
              <p className="team-statement-large">
                We are student engineers, researchers, and builders who dedicate thousands of hours to crafting competitive autonomous aerial systems.
              </p>
              <p className="team-statement-sub">
                Our 4.0 cohort is organized across five specialized engineering divisions. The full roster is currently completing official certification.
              </p>
            </div>

            <div className="team-divisions-grid">
              {teamDepartments.slice(0, 4).map((dept) => (
                <div key={dept.code} className="team-division-card">
                  <span className="division-code">{dept.code}</span>
                  <h4 className="division-name">{dept.name}</h4>
                  <p className="division-desc">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 06: THE JOURNEY (Storytelling 3.0 -> 4.0 Transition)
         ==================================================================== */}
      <section className="section-block section-journey-story">
        <div className="container">
          <div className="journey-story-header">
            <span className="editorial-num">06</span>
            <h2 className="section-title-editorial">THE JOURNEY</h2>
            <span className="editorial-tag">A DUAL-ERA EVOLUTIONARY RECORD</span>
          </div>

          <div className="journey-chapters-row">
            {/* Chapter 01: 3.0 Archive */}
            <div className="journey-chapter-block archive-chapter">
              <span className="chapter-marker">CHAPTER 01 // ARCHIVE</span>
              <h3 className="chapter-title">IGNITE KNIGHTS 3.0</h3>
              <span className="chapter-period">2024 — 2026</span>
              <p className="chapter-summary">
                The inaugural era. Formed with cross-discipline engineers, built our initial hexacopter, and achieved a national Top 10 finish at SAE ADDC 2025.
              </p>
              <div className="chapter-footer-link">
                <Link to="/archive" className="editorial-text-link">
                  <span>3.0 ARCHIVE →</span>
                </Link>
              </div>
            </div>

            {/* Chapter 02: The Transition */}
            <div className="journey-chapter-block transition-chapter">
              <span className="chapter-marker">CHAPTER 02 // RESET</span>
              <h3 className="chapter-title">CLEAN-SHEET TRANSITION</h3>
              <span className="chapter-period">EARLY 2026</span>
              <p className="chapter-summary">
                Scheduled decommission of legacy aircraft. Total reset of airframe architecture, flight electronics, and edge computing algorithms.
              </p>
            </div>

            {/* Chapter 03: 4.0 Current */}
            <div className="journey-chapter-block current-chapter">
              <span className="chapter-marker red-dot">CHAPTER 03 // ACTIVE</span>
              <h3 className="chapter-title">IGNITE KNIGHTS 4.0</h3>
              <span className="chapter-period">2026 → PRESENT</span>
              <p className="chapter-summary">
                The current generation. Development of the IK-04 UAV, new autonomous perception stacks, and upcoming arena mission campaigns.
              </p>
              <div className="chapter-footer-link">
                <Link to="/journey" className="editorial-text-link">
                  <span>READ FULL JOURNEY →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 07: GALLERY PREVIEW (Photo Journal / Editorial Spread)
         ==================================================================== */}
      <section className="section-block section-gallery-spread">
        <div className="container">
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">07</span>
              <h2 className="section-title-editorial">GALLERY</h2>
              <span className="editorial-tag red-dot">PHOTO JOURNAL & DOCUMENTARY RECORD</span>
            </div>
            <Link to="/gallery" className="editorial-text-link">
              <span>EXPLORE ALL IMAGES</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="editorial-photo-journal-grid">
            <div className="journal-photo-item photo-large">
              <img
                src="/assets/drone-hero.jpg"
                alt="Ignite Knights 4.0 In-House UAV"
                className="journal-img"
              />
              <div className="journal-caption">
                <span className="caption-tag">DEVELOPMENT AIRCRAFT</span>
                <span className="caption-title">IK-04 In-House Carbon Airframe Assembly</span>
              </div>
            </div>

            <div className="journal-photo-item photo-stack">
              <div className="journal-placeholder-card">
                <span className="editorial-tag red-dot">4.0 FLIGHT TEST</span>
                <h4 className="placeholder-card-title">FLIGHT TESTING COMING SOON</h4>
                <p className="placeholder-card-sub">
                  Live flight envelope telemetry and outdoor range photography will be published following maiden tether tests.
                </p>
              </div>

              <div className="journal-placeholder-card">
                <span className="editorial-tag red-dot">4.0 WORKSHOP</span>
                <h4 className="placeholder-card-title">WORKSHOP BUILD LOG</h4>
                <p className="placeholder-card-sub">
                  Documenting composite autoclave prep, CNC milling tolerances, and avionics wiring harnesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 08: PARTNERS (Minimal Logos With Breathing Room)
         ==================================================================== */}
      <section className="section-block section-partners-minimal">
        <div className="container">
          <div className="partners-editorial-header">
            <span className="editorial-num">08</span>
            <h2 className="section-title-editorial">PARTNERS & COLLABORATION</h2>
            <p className="partners-editorial-desc">
              We collaborate with premier aerospace manufacturers, compute vendors, and research institutions.
            </p>
          </div>

          <div className="partner-tracks-editorial-grid">
            <div className="partner-track-card">
              <span className="track-code">TRACK 01</span>
              <h3 className="track-title">R&D HARDWARE SPONSOR</h3>
              <p className="track-desc">
                Provide edge compute, microcontrollers, BLDC motors, or high-discharge LiPo batteries for extreme flight testing.
              </p>
            </div>

            <div className="partner-track-card">
              <span className="track-code">TRACK 02</span>
              <h3 className="track-title">SOFTWARE LICENSES</h3>
              <p className="track-desc">
                Equip the 4.0 engineering cohort with high-fidelity CFD, FEA, CAD, embedded compilers, or telemetry tooling.
              </p>
            </div>

            <div className="partner-track-card">
              <span className="track-code">TRACK 03</span>
              <h3 className="track-title">COMPOSITE FABRICATION</h3>
              <p className="track-desc">
                Precision CNC milling of 7075 aluminum motor mounts, carbon pre-preg curing, and rapid 3D prototyping support.
              </p>
            </div>
          </div>

          <div className="partners-archive-note">
            <span className="editorial-tag">HISTORICAL 3.0 SOFTWARE PARTNERS:</span>
            <Link to="/archive" className="archive-inline-link">
              MATLAB, Siemens, Altair, ANSYS, Altium & more archived in 3.0 historical record →
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 09: FINAL CTA (Massive Editorial Typography)
         ==================================================================== */}
      <section className="section-block section-final-cta">
        <div className="container">
          <div className="final-cta-content">
            <span className="editorial-tag red-dot">IGNITE KNIGHTS 4.0</span>
            <h2 className="final-cta-massive">
              LET'S BUILD<br />
              WHAT FLIES<br />
              NEXT.
            </h2>
            <p className="final-cta-sub">
              Whether you are an aspiring aerospace engineer, prospective industry partner, or research collaborator, connect with our command team.
            </p>
            <div className="final-cta-action">
              <Link to="/contact" className="btn-aerospace btn-aerospace-primary">
                <span>INITIATE CONTACT</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
