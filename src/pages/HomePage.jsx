import React from 'react';
import { Link } from 'react-router-dom';
import { DroneScene } from '../components/3d/DroneScene';
import { technicalDomains } from '../data/domainsData';
import { journeyData } from '../data/journeyData';
import { competitionsData } from '../data/competitionsData';
import { sponsorsData } from '../data/sponsorsData';
import { galleryItems } from '../data/galleryData';
import { DomainCard } from '../components/cards/DomainCard';
import { CompetitionDossier } from '../components/cards/CompetitionDossier';
import { SponsorCard } from '../components/cards/SponsorCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { ArrowUpRight, ChevronRight, Radio, Compass, ShieldCheck, Cpu, Target, Flag } from 'lucide-react';

export function HomePage() {
  return (
    <div className="home-page">
      {/* ====================================================================
          1. HERO SECTION: 3D DRONE + CINEMATIC EDITORIAL HEADLINE
         ==================================================================== */}
      <section className="home-hero-section">
        <div className="container home-hero-container">
          <div className="home-hero-text-col">
            {/* Small Technical Label */}
            <div className="hero-tech-label-group">
              <span className="status-dot active pulse"></span>
              <span className="tech-label tech-label-red">
                IGNITE KNIGHTS 3.0 // AUTONOMOUS AERIAL SYSTEMS / 2026
              </span>
            </div>

            {/* Huge Headline */}
            <h1 className="home-hero-title">
              ENGINEERING<br />
              THE SKY.<br />
              <span className="text-red">BUILDING BEYOND LIMITS.</span>
            </h1>

            {/* Description from Website.docx */}
            <p className="home-hero-desc">
              We are an interdisciplinary drone team combining engineering, artificial
              intelligence, autonomous systems and innovation to design and develop
              aerial systems for real-world challenges and competitive missions.
            </p>

            {/* Action Buttons */}
            <div className="home-hero-actions">
              <Link to="/about" className="btn-aerospace btn-aerospace-primary">
                <span>EXPLORE OUR MISSION</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/team" className="btn-aerospace btn-aerospace-secondary">
                <span>MEET THE TEAM</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Quick Hero Telemetry Bar */}
            <div className="hero-quick-specs">
              <div className="hero-spec-item">
                <span className="spec-title">TOP 10 FINISH</span>
                <span className="spec-val">SAE ADDC 2025</span>
              </div>
              <div className="hero-spec-divider"></div>
              <div className="hero-spec-item">
                <span className="spec-title">AUTONOMY</span>
                <span className="spec-val text-red">LEVEL 4 MISSION</span>
              </div>
              <div className="hero-spec-divider"></div>
              <div className="hero-spec-item">
                <span className="spec-title">ACTIVE CAMPAIGNS</span>
                <span className="spec-val">NIDAR • ADDC • AERA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Realistic Interactive Drone Component */}
        <DroneScene />

        {/* Bottom Hero Fade Rule */}
        <div className="hero-bottom-rule">
          <div className="container">
            <div className="hero-rule-content">
              <span className="tech-label">TORAY 3K CARBON AIRFRAME // HIGH-TORQUE BLDC // PX4 STACK</span>
              <span className="tech-label tech-label-red">INTERACTION : DRAG TO ROTATE UAV</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. MISSION STATEMENT SECTION (Visual Split Editorial)
         ==================================================================== */}
      <section className="home-mission-section">
        <div className="container">
          <div className="mission-split-layout">
            <div className="mission-text-pane">
              <div className="section-meta-bar">
                <div className="flex items-center gap-2">
                  <span className="tech-tag tech-tag-red">CORE MISSION</span>
                  <span className="tech-label">INTERDISCIPLINARY ARCHITECTURE</span>
                </div>
              </div>

              <h2 className="mission-large-heading">
                MORE THAN<br />
                <span className="text-red">A DRONE TEAM.</span>
              </h2>

              <p className="mission-body-paragraph">
                We are a multidisciplinary team working across different domains of
                engineering and technology to develop innovative drone systems. Each
                domain contributes to building a complete and reliable autonomous drone
                platform.
              </p>

              <p className="mission-body-sub">
                From structural aerodynamics and composite manufacturing to real-time
                embedded Linux kernels, CUDA-accelerated visual odometry, and precision
                PID flight control loops—we engineer every layer in-house.
              </p>

              <div className="mission-action-row">
                <Link to="/about" className="btn-aerospace btn-aerospace-outline-red">
                  <span>OUR STORY & ARCHITECTURE</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* Technical Animated System Diagram Pane */}
            <div className="mission-diagram-pane corner-bracket-box">
              <div className="diagram-header">
                <span className="tech-label tech-label-red">AVIONICS SYSTEM TOPOLOGY</span>
                <span className="status-dot active"></span>
              </div>

              <div className="diagram-flow-stack">
                <div className="flow-step">
                  <span className="step-tag">STAGE 01</span>
                  <div className="step-info">
                    <span className="step-name">PERCEPTION & SENSORS</span>
                    <span className="step-sub">3D LiDAR • Stereo Vision • Optical Flow • Sonar</span>
                  </div>
                </div>
                <div className="flow-arrow">↓</div>

                <div className="flow-step">
                  <span className="step-tag">STAGE 02</span>
                  <div className="step-info">
                    <span className="step-name">EDGE COMPUTATION</span>
                    <span className="step-sub">NVIDIA Jetson • CUDA FP16 • TensorRT Inference</span>
                  </div>
                </div>
                <div className="flow-arrow">↓</div>

                <div className="flow-step">
                  <span className="step-tag">STAGE 03</span>
                  <div className="step-info">
                    <span className="step-name">DECISION & TRAJECTORY</span>
                    <span className="step-sub">Visual SLAM • Dynamic D* Path Re-planning</span>
                  </div>
                </div>
                <div className="flow-arrow">↓</div>

                <div className="flow-step">
                  <span className="step-tag">STAGE 04</span>
                  <div className="step-info">
                    <span className="step-name">FLIGHT CONTROLLER</span>
                    <span className="step-sub">MAVROS • MAVLink 2.0 • 400Hz Attitude EKF3</span>
                  </div>
                </div>
                <div className="flow-arrow">↓</div>

                <div className="flow-step step-flight">
                  <span className="step-tag step-tag-red">STAGE 05</span>
                  <div className="step-info">
                    <span className="step-name text-red">AUTONOMOUS MISSION FLIGHT</span>
                    <span className="step-sub">Waypoint Precision • Target Drop • Return to Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. TECHNICAL DOMAINS SECTION (6 Interactive Engineering Cards)
         ==================================================================== */}
      <section className="home-domains-section">
        <div className="container">
          <SectionHeader
            number="01"
            tag="TECHNICAL DISCIPLINES"
            title="ENGINEERED ACROSS"
            highlight="SIX SPECIALIZED DOMAINS"
            subtitle="Autonomous aerial flight demands synchronization across disparate engineering sciences. Explore our core technical divisions."
          />

          <div className="domains-grid">
            {technicalDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. JOURNEY PREVIEW SECTION
         ==================================================================== */}
      <section className="home-journey-preview-section">
        <div className="container">
          <div className="journey-preview-header-wrap">
            <SectionHeader
              number="02"
              tag="HISTORICAL TRAJECTORY"
              title="FROM FIRST FLIGHT"
              highlight="TO AUTONOMOUS AUTONOMY"
              subtitle="Formed in 2024, our rapid trajectory spans hexacopter design, national top-10 finishes, and multi-mission arena campaigns."
            />
            <Link to="/journey" className="btn-aerospace btn-aerospace-secondary journey-more-btn">
              <span>EXPLORE FULL TIMELINE</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="journey-summary-cards">
            {journeyData.map((item, idx) => (
              <div key={idx} className="journey-summary-card corner-bracket-box">
                <div className="journey-card-year-badge">
                  <span className="journey-year-num">{item.year}</span>
                  <span className="journey-phase-tag">{item.badge}</span>
                </div>
                <h3 className="journey-card-title">{item.title}</h3>
                <p className="journey-card-text">{item.description}</p>
                <div className="journey-achieve-list">
                  {item.keyAchievements.slice(0, 2).map((ach, aIdx) => (
                    <div key={aIdx} className="achieve-pill">
                      <span className="status-dot active"></span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. COMPETITIONS / THE ARENA PREVIEW
         ==================================================================== */}
      <section className="home-competitions-preview-section">
        <div className="container">
          <SectionHeader
            number="03"
            tag="THE ARENA // 2026 MISSIONS"
            title="WHERE ENGINEERING"
            highlight="MEETS EXTREME PRESSURE"
            subtitle="Our team actively participates in national drone challenges that push our edge AI, autonomous pathing, and mechanical endurance."
          />

          <div className="competitions-preview-list">
            {competitionsData.map((comp) => (
              <CompetitionDossier key={comp.id} competition={comp} defaultExpanded={comp.id === 'nidar-2026'} />
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/competitions" className="btn-aerospace btn-aerospace-outline-red">
              <span>VIEW ALL COMPETITION DOSSIERS & STATUS</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. GALLERY PREVIEW SECTION
         ==================================================================== */}
      <section className="home-gallery-preview-section">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <SectionHeader
              number="04"
              tag="DOCUMENTARY ARCHIVE"
              title="BEHIND"
              highlight="THE FLIGHT"
              subtitle="The people, progress, bench testing, and flight line moments behind our journey."
            />
            <Link to="/gallery" className="btn-aerospace btn-aerospace-secondary">
              <span>VIEW ALL 12+ ARCHIVE LOGS</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="home-gallery-grid">
            {galleryItems.slice(0, 4).map((item) => (
              <div key={item.id} className="home-gallery-tile corner-bracket-box">
                <img src={item.image} alt={item.title} className="home-gallery-img" />
                <div className="home-gallery-overlay">
                  <span className="tech-tag tech-tag-red">{item.category}</span>
                  <h4 className="home-gallery-title">{item.title}</h4>
                  <span className="home-gallery-meta">{item.location} • {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. SPONSORS / TECHNOLOGY ECOSYSTEM PREVIEW
         ==================================================================== */}
      <section className="home-sponsors-section">
        <div className="container">
          <SectionHeader
            number="05"
            tag="COLLABORATIVE ECOSYSTEM"
            title="POWERED BY"
            highlight="INDUSTRY PARTNERS"
            subtitle="Proudly supported by industry-leading technology partners whose simulation, design, and computational platforms enable our innovation."
          />

          <div className="sponsors-grid">
            {sponsorsData.slice(0, 6).map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/sponsors" className="btn-aerospace btn-aerospace-secondary">
              <span>EXPLORE COMPLETE 9-PARTNER TECHNOLOGY ECOSYSTEM</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. CONTACT CALL TO ACTION SECTION
         ==================================================================== */}
      <section className="home-contact-cta-section">
        <div className="container">
          <div className="contact-cta-box corner-bracket-box">
            <div className="cta-left-content">
              <div className="flex items-center gap-2 mb-3">
                <span className="status-dot active pulse"></span>
                <span className="tech-label tech-label-red">LET'S CONNECT</span>
              </div>
              <h2 className="cta-title">
                LET'S BUILD<br />
                <span className="text-red">WHAT FLIES NEXT.</span>
              </h2>
              <p className="cta-desc">
                Interested in collaborating with our team, sponsoring our research,
                discussing aerospace development, or connecting with our engineering leads?
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/contact" className="btn-aerospace btn-aerospace-primary cta-btn">
                <span>OPEN TRANSMISSION / CONTACT →</span>
              </Link>
              <span className="cta-tel-note">TELEPHONE HOTLINE : +91 82482 29487</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
