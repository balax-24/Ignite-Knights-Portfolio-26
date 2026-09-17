import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { SectionHeader } from '../components/common/SectionHeader';
import {
  Lightbulb,
  PenTool,
  Cpu,
  Hammer,
  Layers,
  CheckCircle2,
  Wind,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Compass,
  Activity,
  GitBranch,
} from 'lucide-react';

export function AboutPage() {
  const [selectedStage, setSelectedStage] = useState(0);

  // The 7-Stage Aerospace Development Pipeline
  const developmentPipeline = [
    {
      id: 'idea',
      step: '01',
      name: 'IDEA & MISSION SCOPE',
      icon: Lightbulb,
      tagline: 'Problem Decomposition & Flight envelope Constraints',
      description:
        'Every project originates with operational requirements: arena dimensions, required payload mass, endurance thresholds, wind turbulence allowances, and autonomous rules. We translate high-level mission goals into quantifiable physics and telemetry metrics.',
      outputs: [
        'Mission ConOps (Concept of Operations)',
        'Payload & Weight Budget Constraints',
        'Avionics Power & Battery Consumption Model',
        'Regulatory & Safety Boundaries',
      ],
      status: 'METHODOLOGY FOUNDATION',
    },
    {
      id: 'design',
      step: '02',
      name: 'PARAMETRIC CAD DESIGN',
      icon: PenTool,
      tagline: 'Multi-Deck Airframe & Electronics Layout',
      description:
        'Using 3D parametric CAD, we model the complete mechanical assembly down to the millimeter: Toray 3K carbon plates, 7075 aluminum CNC motor mounts, vibration dampeners, quick-release payload bays, and wiring harnesses.',
      outputs: [
        'Full 3D Mechanical Airframe Assembly',
        'Center of Gravity (CG) Optimization',
        'Schematic & Multi-Layer PCB Gerber Layouts',
        'Thermal Airflow Chimneys for Compute',
      ],
      status: 'CAD ARCHITECTURE',
    },
    {
      id: 'simulation',
      step: '03',
      name: 'MULTIPHYSICS SIMULATION',
      icon: Cpu,
      tagline: 'FEA Stress, CFD Aerodynamics & Software-in-the-Loop',
      description:
        'Before cutting carbon fiber or milling aluminum, the aircraft undergoes finite element analysis (FEA) to verify arm deflection under peak motor torque. Computational fluid dynamics (CFD) optimizes propeller downwash, and Software-in-the-Loop (SITL) tests autonomous waypoint logic in Gazebo.',
      outputs: [
        'ANSYS FEA Structural Stress & Modal Resonance',
        'CFD Aerodynamic Drag & Vortex Analysis',
        'SITL Virtual Flight Simulation with ROS2',
        'Thermal Dissipation Modeling',
      ],
      status: 'VIRTUAL VERIFICATION',
    },
    {
      id: 'fabrication',
      step: '04',
      name: 'PRECISION FABRICATION',
      icon: Hammer,
      tagline: 'CNC Machining, Composite Layup & 3D Prototyping',
      description:
        'Components transition to the physical world in our engineering workshop. High-precision CNC milling produces anodized aluminum clamps, carbon-fiber plates are waterjet cut, and lightweight nylon enclosures are additive-manufactured.',
      outputs: [
        'CNC 7075-T6 Motor Brackets & Standoffs',
        'Waterjet Machined 3K Matte Carbon Plates',
        'Vibration Isolation Silicone Damper Mounts',
        'Custom SMD Power Distribution Boards',
      ],
      status: 'PHYSICAL PRODUCTION',
    },
    {
      id: 'integration',
      step: '05',
      name: 'SYSTEM INTEGRATION',
      icon: Layers,
      tagline: 'Harnessing, Sensor Bus Isolation & Firmware Flashing',
      description:
        'Subsystems are married into the central chassis. Power lines are routed with EMI shielding, high-voltage XT90 harnesses are checked, optical sensors and LiDAR are aligned with the IMU frame, and ROS2 communication nodes are verified.',
      outputs: [
        'Galvanically Isolated Sensor Buses (I2C/SPI/CAN)',
        'Low-Latency MAVLink Telemetry Routing',
        'Edge AI TensorRT Accelerator Deployment',
        'Hardware-in-the-Loop (HIL) Loop Certification',
      ],
      status: 'SYSTEM ASSEMBLY',
    },
    {
      id: 'testing',
      step: '06',
      name: 'TEST BENCH & GROUND TESTING',
      icon: CheckCircle2,
      tagline: 'Tethered Hover, Thrust Dyno & Emergency Fail-safes',
      description:
        'Rigorous ground verification begins on the motor dyno to test actual thrust-to-weight and electrical draw under full throttle. Tethered hover verifies cascaded PID attitude response, and simulated radio losses test automated return-to-home algorithms.',
      outputs: [
        'Thrust Dyno Power & Thermal Profiling',
        'Tethered Attitude Stability & PID Tuning',
        'RF Failsafe & Emergency Cutoff Verification',
        'Optical Flow & VIO Indoor Position Hold',
      ],
      status: 'GROUND VALIDATION',
    },
    {
      id: 'flight',
      step: '07',
      name: 'AUTONOMOUS FLIGHT',
      icon: Wind,
      tagline: 'Open Arena Deployment & Mission Execution',
      description:
        'The culmination of our engineering pipeline: the aircraft takes to the flight test range under full autonomous supervision. Real-time telemetry streams to the Ground Control Station as the drone executes waypoint navigation, target detection, and payload operations.',
      outputs: [
        'Autonomous Waypoint Traversal & Landmark Lock',
        'Real-Time 915MHz Telemetry Logging',
        'Post-Flight Data Analytics & Performance Audit',
        'Mission Readout & Iteration Feedback',
      ],
      status: 'OPERATIONAL ENVELOPE',
    },
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <PageHero
        badge="IGNITE KNIGHTS 4.0 // PHILOSOPHY"
        title="ENGINEERING PHILOSOPHY &"
        highlight="SYSTEMS THINKING"
        subtitle="A multidisciplinary methodology conceiving, simulating, and validating autonomous aerial platforms with aerospace-grade discipline."
        telemetry="SYSTEM PIPELINE // METHODOLOGY v4.0"
      >
        <div className="mt-2">
          <GenerationBadge variant="current" size="sm" />
        </div>
      </PageHero>

      <div className="container py-12">
        {/* Section 1: WHO WE ARE (Editorial Split) */}
        <section className="about-editorial-section mb-20">
          <div className="editorial-lead-grid">
            <div className="lead-left-col">
              <span className="tech-tag tech-tag-red mb-3 inline-block">01 // IDENTITY</span>
              <h2 className="editorial-subheading">
                WHO WE ARE:<br />
                <span className="text-white">A STUDENT AEROSPACE & AUTONOMOUS SYSTEMS LAB.</span>
              </h2>
              <p className="editorial-paragraph">
                Ignite Knights is an interdisciplinary collegiate robotics and aerospace engineering organization based at Sairam Institution, Chennai. We unite engineers across Computer Science, Electronics, Mechanical, Electrical, and Artificial Intelligence departments to engineer autonomous unmanned aerial vehicles (UAVs).
              </p>
              <p className="editorial-paragraph text-gray-400">
                Operating with the rigor of an experimental flight-testing lab, we treat every airframe not as an assembled hobby kit, but as an integrated aerodynamic, algorithmic, and electrical system designed to solve complex real-world flight challenges.
              </p>
            </div>

            <div className="lead-right-col">
              <div className="editorial-spec-callout">
                <div className="callout-header">
                  <span className="tech-label text-red">ORGANIZATIONAL METRICS</span>
                  <Activity size={14} className="text-red" />
                </div>
                <div className="callout-grid">
                  <div className="callout-metric">
                    <span className="metric-val font-mono text-white">4.0</span>
                    <span className="metric-lbl">CURRENT GENERATION</span>
                  </div>
                  <div className="callout-metric">
                    <span className="metric-val font-mono text-red">5+</span>
                    <span className="metric-lbl">DISCIPLINARY MAJORS</span>
                  </div>
                  <div className="callout-metric">
                    <span className="metric-val font-mono text-white">100%</span>
                    <span className="metric-lbl">IN-HOUSE FLIGHT CODE</span>
                  </div>
                  <div className="callout-metric">
                    <span className="metric-val font-mono text-red">7-STAGE</span>
                    <span className="metric-lbl">DEVELOPMENT PIPELINE</span>
                  </div>
                </div>
                <div className="callout-footer font-mono text-xs text-gray-500">
                  Sairam Institution, West Tambaram, Chennai-44, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: HOW WE WORK & ENGINEERING PHILOSOPHY */}
        <section className="about-editorial-section mb-20">
          <div className="editorial-philosophy-grid">
            <div className="philosophy-card">
              <div className="card-num font-mono text-red">02 // PRINCIPLES</div>
              <h3 className="card-title">ENGINEERING PHILOSOPHY</h3>
              <ul className="philosophy-list font-mono text-xs">
                <li>
                  <span className="text-red">● GROUND TRUTH OVER SPECULATION:</span> Every aerodynamic claim, thrust estimate, and battery life projection must be validated by test bench telemetry.
                </li>
                <li>
                  <span className="text-red">● DECOUPLED SUBSYSTEM ISOLATION:</span> Mechanical vibrations, electromagnetic motor noise, and digital compute planes must never compromise avionics integrity.
                </li>
                <li>
                  <span className="text-red">● FAIL-SAFE REDUNDANCY AS STANDARD:</span> When sensor loss or communications degradation occurs, deterministic state machines must safely recover the aircraft.
                </li>
                <li>
                  <span className="text-red">● CODE AND HARDWARE CO-DESIGN:</span> Neural network architectures are shaped by edge compute thermal limits; airframe carbon plates are designed around sensor fields of view.
                </li>
              </ul>
            </div>

            <div className="philosophy-card">
              <div className="card-num font-mono text-red">03 // COGNITION</div>
              <h3 className="card-title">SYSTEMS THINKING & THE 4.0 MINDSET</h3>
              <p className="card-paragraph">
                UAV development is not a collection of isolated parts—it is an interconnected web of trade-offs. Increasing battery capacity adds mass, requiring larger motors, which increases electrical current draw, generating more heat, demanding thicker carbon plates, shifting the center of gravity.
              </p>
              <p className="card-paragraph text-gray-400">
                The <span className="text-white font-semibold">4.0 Mindset</span> enforces mathematical balance across these constraints. We simulate before cutting, test before flying, and log every milliampere and millisecond of flight telemetry to iteratively converge on peak aerial performance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: THE 7-STAGE DEVELOPMENT PIPELINE DIAGRAM */}
        <section className="about-pipeline-section mb-20">
          <div className="pipeline-header-block mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="tech-tag tech-tag-red">04 // METHODOLOGY PIPELINE</span>
                <span className="tech-label">THE 7-STAGE AEROSPACE LIFECYCLE</span>
              </div>
              <span className="font-mono text-xs text-gray-500">IK-PIPELINE-SPEC-07</span>
            </div>
            <h2 className="section-title-large">
              FROM CONCEPTION TO <span className="section-title-highlight">AUTONOMOUS FLIGHT</span>
            </h2>
            <p className="section-subtitle-editorial">
              Click any stage below to inspect the engineering deliverables, simulation parameters, and validation criteria.
            </p>
          </div>

          {/* Interactive Pipeline Track */}
          <div className="pipeline-track-bar">
            {developmentPipeline.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  className={`pipeline-step-node ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedStage(idx)}
                >
                  <div className="node-num font-mono">{stage.step}</div>
                  <div className="node-icon-wrap">
                    <IconComponent size={18} />
                  </div>
                  <div className="node-title font-mono">{stage.name.split(' ')[0]}</div>
                  {idx < developmentPipeline.length - 1 && (
                    <div className="node-connector-line"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Stage Inspection Box */}
          <div className="pipeline-detail-card">
            <div className="detail-card-header">
              <div className="flex items-center gap-3">
                <span className="detail-step-badge font-mono text-red">
                  STAGE {developmentPipeline[selectedStage].step}
                </span>
                <h3 className="detail-title">{developmentPipeline[selectedStage].name}</h3>
              </div>
              <span className="detail-status font-mono text-xs">
                {developmentPipeline[selectedStage].status}
              </span>
            </div>

            <div className="detail-tagline font-mono text-xs text-red mb-3">
              // {developmentPipeline[selectedStage].tagline}
            </div>

            <p className="detail-description">{developmentPipeline[selectedStage].description}</p>

            <div className="detail-outputs-block">
              <span className="tech-label mb-2 block text-gray-400">KEY ENGINEERING DELIVERABLES:</span>
              <div className="detail-outputs-grid">
                {developmentPipeline[selectedStage].outputs.map((out, oIdx) => (
                  <div key={oIdx} className="output-chip">
                    <CheckCircle2 size={13} className="text-red flex-shrink-0" />
                    <span className="font-mono text-xs text-white">{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: 3.0 ARCHIVE CALLOUT */}
        <section className="about-archive-notice">
          <div className="archive-notice-inner">
            <div className="flex items-center gap-3 mb-2">
              <GenerationBadge variant="archive" size="sm" />
              <span className="font-mono text-xs text-gray-400">INSTITUTIONAL CONTINUITY</span>
            </div>
            <h3 className="notice-title">HONORING THE FOUNDATIONS OF IGNITE KNIGHTS 3.0</h3>
            <p className="notice-text">
              The engineering standards of 4.0 are built upon the lessons, triumphs, and foundational data of Ignite Knights 3.0 (2024–2026), including their inaugural hexacopter and top 10 finish at SAE ADDC 2025.
            </p>
            <div className="mt-4">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <span>VIEW 3.0 HISTORICAL ARCHIVE</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
