import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { technicalDomains } from '../data/domainsData';
import { DomainCard } from '../components/cards/DomainCard';
import { 
  Eye, Cpu, Compass, Navigation, Wind, ShieldCheck, 
  Layers, CheckCircle2, ArrowUpRight, Activity 
} from 'lucide-react';

export function AboutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const architecturePipeline = [
    {
      step: '01',
      title: 'PERCEPTION',
      icon: Eye,
      tag: 'OPTICAL & LASER SENSORS',
      description: 'Solid-state LiDAR point clouds, stereoscopic depth disparity mapping, and high-frequency optical flow sensors track environmental features in real-time.',
      specs: ['LiDAR FOV 360°', 'Disparity 1280x720', 'Floor Lock 50Hz'],
      status: 'CALIBRATED',
    },
    {
      step: '02',
      title: 'COMPUTATION',
      icon: Cpu,
      tag: 'EDGE ACCELERATION',
      description: 'NVIDIA Jetson heterogeneous embedded modules execute INT8/FP16 quantized neural networks with CUDA cores to detect targets in under 15ms.',
      specs: ['TensorRT 8.5', '40 TOPS INT8', 'Dual MIPI CSI-2'],
      status: 'LOW LATENCY',
    },
    {
      step: '03',
      title: 'DECISION',
      icon: Compass,
      tag: 'TRAJECTORY PLANNING',
      description: 'Real-time D* Lite search algorithms and 3D octree voxel mapping project optimal flight corridors around sudden dynamic obstacles.',
      specs: ['Voxel Octomap', 'Re-planning 40Hz', 'Fail-safe Matrix'],
      status: 'ACTIVE',
    },
    {
      step: '04',
      title: 'CONTROL',
      icon: Navigation,
      tag: 'ATTITUDE & DYNAMICS',
      description: 'High-rate Extended Kalman Filters (EKF3) and tuned cascaded PID attitude controllers generate direct PWM motor commands through MAVROS.',
      specs: ['Attitude Loop 400Hz', 'EKF3 State Estimator', 'MAVLink 2.0'],
      status: 'LOCKED',
    },
    {
      step: '05',
      title: 'FLIGHT',
      icon: Wind,
      tag: 'AERODYNAMIC EXECUTION',
      description: 'Ultra-stiff Toray 3K carbon-fiber airframe, balanced high-pitch composite props, and high-torque brushless motors translate signals into precise flight.',
      specs: ['Thrust/Weight 3.8:1', 'Toray 3K Weave', 'Payload 3.2kg'],
      status: 'MISSION READY',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <PageHero
        badge="SYSTEM PHILOSOPHY // MISSION INTENT"
        title="MORE THAN"
        highlight="A DRONE TEAM."
        subtitle="We are a multidisciplinary team working across different domains of engineering and technology to develop innovative drone systems. Each domain contributes to building a complete and reliable autonomous drone platform."
        telemetry="SYSTEMS ARCHITECTURE v3.0 // 2026 CAMPAIGN"
      >
        <Link to="/team" className="btn-aerospace btn-aerospace-primary">
          <span>MEET THE ENGINEERS</span>
          <ArrowUpRight size={15} />
        </Link>
        <Link to="/competitions" className="btn-aerospace btn-aerospace-secondary">
          <span>VIEW ACTIVE MISSIONS</span>
        </Link>
      </PageHero>

      {/* Editorial Narrative: Philosophy & Multidisciplinary Roots */}
      <section className="about-narrative-section">
        <div className="container">
          <div className="about-narrative-grid">
            <div className="about-narrative-col">
              <span className="tech-tag tech-tag-red mb-3 inline-block">OUR PHILOSOPHY</span>
              <h2 className="narrative-heading">
                INTERDISCIPLINARY COHESION IS OUR CRITICAL ADVANTAGE.
              </h2>
              <p className="narrative-lead">
                Modern autonomous flight does not exist in isolation. A drone is not
                merely a mechanical frame, nor is it merely a software script. It is an
                uncompromising intersection of mechanical rigidity, power electronics,
                low-latency firmware, and high-level artificial intelligence.
              </p>
              <p className="narrative-text">
                Ignite Knights 3.0 was established to tear down the artificial silos
                between engineering branches. Mechanical engineers sit directly with
                computer science algorithm designers; electrical avionics leads solder alongside
                embedded systems programmers. The result is an integrated platform where
                vibration harmonics, sensor noise, and trajectory planning are solved
                holistically.
              </p>
            </div>

            <div className="about-narrative-stats corner-bracket-box">
              <div className="stats-box-header">
                <span className="tech-label tech-label-red">ENGINEERING METRICS</span>
                <span className="status-dot active"></span>
              </div>
              <div className="stats-metric-list">
                <div className="stat-row">
                  <span className="stat-label">DISCIPLINES INTEGRATED</span>
                  <span className="stat-number">4 CORE DEPTS</span>
                  <span className="stat-desc">CSE, ECE, MECH, EEE Synergy</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">NATIONAL COMPETITION FINISH</span>
                  <span className="stat-number text-red">TOP 10 NATIONALLY</span>
                  <span className="stat-desc">SAE ADDC 2025 Finals</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">HARDWARE R&D CYCLES</span>
                  <span className="stat-number">100+ HOURS</span>
                  <span className="stat-desc">Flight Logging, Telemetry & HIL Testing</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">AUTONOMY READINESS</span>
                  <span className="stat-number">GPS-DENIED SLAM</span>
                  <span className="stat-desc">LiDAR & VIO Real-Time Mapping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Drone System Architecture Pipeline */}
      <section className="about-architecture-section">
        <div className="container">
          <SectionHeader
            number="02"
            tag="SYSTEM ARCHITECTURE"
            title="THE AUTONOMOUS"
            highlight="EXECUTION PIPELINE"
            subtitle="From photonic photons hitting the stereo camera lens to brushless motor PWM pulses, explore the 5-stage real-time avionics loop."
          />

          {/* Interactive Pipeline Bar */}
          <div className="pipeline-steps-container">
            {architecturePipeline.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`pipeline-step-card corner-bracket-box ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="pipeline-step-top">
                    <span className="step-num">{item.step}</span>
                    <span className="pipeline-status-badge">{item.status}</span>
                  </div>
                  <div className="pipeline-step-main">
                    <Icon size={24} className={isActive ? 'text-red' : 'text-faint'} />
                    <h3 className="pipeline-title">{item.title}</h3>
                    <span className="pipeline-tag">{item.tag}</span>
                  </div>
                  <p className="pipeline-desc">{item.description}</p>
                  <div className="pipeline-specs-chips">
                    {item.specs.map((sp, sIdx) => (
                      <span key={sIdx} className="tech-tag">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="architecture-telemetry-strip corner-bracket-box">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-red animate-pulse" />
              <span className="tech-label">
                ACTIVE PIPELINE METRIC: {architecturePipeline[activeStep].title} // {architecturePipeline[activeStep].tag}
              </span>
            </div>
            <span className="tech-label tech-label-red">LATENCY BUDGET &lt; 28ms END-TO-END</span>
          </div>
        </div>
      </section>

      {/* Six Technical Domains In Detail */}
      <section className="about-domains-section">
        <div className="container">
          <SectionHeader
            number="03"
            tag="TECHNICAL BREAKDOWN"
            title="CORE ENGINEERING"
            highlight="DIVISIONS"
            subtitle="Explore how each technical division of Ignite Knights 3.0 operates, and the exact software and hardware tools they deploy."
          />

          <div className="domains-grid">
            {technicalDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
