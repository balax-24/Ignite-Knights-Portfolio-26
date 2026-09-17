import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { DroneScene } from '../components/3d/DroneScene';
import { aircraft } from '../data/aircraft';
import {
  Crosshair,
  RotateCcw,
  Maximize2,
  Activity,
  Layers,
  Cpu,
  Eye,
  Navigation,
  Zap,
  Radio,
  ArrowUpRight,
  ShieldCheck,
  Archive,
} from 'lucide-react';

export function AircraftPage() {
  const [isExploded, setIsExploded] = useState(false);
  const [activeSubsystemKey, setActiveSubsystemKey] = useState('airframe');

  const subsystemIcons = {
    airframe: Layers,
    propulsion: Crosshair,
    compute: Cpu,
    perception: Eye,
    control: Navigation,
    power: Zap,
    communication: Radio,
  };

  const currentSubsystem = aircraft.subsystems[activeSubsystemKey] || aircraft.subsystems.airframe;
  const SubsystemIcon = subsystemIcons[activeSubsystemKey] || Layers;

  return (
    <div className="aircraft-page">
      {/* Page Hero Header */}
      <PageHero
        badge="IK-04 // DEVELOPMENT AIRCRAFT"
        title="THE AIRCRAFT"
        highlight="4.0"
        subtitle="Clean-sheet autonomous UAV architecture engineered for high-precision sensor fusion, modular carbon composites, and fail-safe flight autonomy."
        telemetry="IK-04 // SUBSYSTEM INSPECTOR MODE"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="current" size="sm" />
          <span className="tech-badge-dot active"></span>
          <span className="font-mono text-xs text-gray-400">SERIAL: {aircraft.serial}</span>
        </div>
      </PageHero>

      <div className="container py-8">
        {/* Main Aerospace Inspection Workstation Layout */}
        <div className="aircraft-workstation-layout">
          {/* LEFT: Massive Interactive 3D Aircraft Canvas */}
          <div className="workstation-3d-pane">
            <div className="pane-header-bar">
              <div className="flex items-center gap-2">
                <span className="tech-tag tech-tag-red">3D CAD INSPECT</span>
                <span className="font-mono text-xs text-white">IK-04 DIGITAL TWIN</span>
              </div>

              {/* Exploded View Toggle Button */}
              <button
                type="button"
                className={`btn-aerospace btn-aerospace-sm ${isExploded ? 'btn-aerospace-red' : 'btn-aerospace-outline'}`}
                onClick={() => setIsExploded(!isExploded)}
                aria-pressed={isExploded}
              >
                <Crosshair size={14} />
                <span>{isExploded ? 'EXPLODED VIEW : ON' : 'EXPLODE COMPONENTS'}</span>
              </button>
            </div>

            {/* 3D Canvas Viewport */}
            <div className="aircraft-canvas-container">
              <DroneScene
                isCompact={false}
                showHotspots={true}
                showHUD={true}
                isExploded={isExploded}
                onToggleExploded={() => setIsExploded(!isExploded)}
                enableOrbit={true}
                autoRotate={false}
              />
            </div>

            {/* Viewport Control Strip */}
            <div className="pane-control-strip">
              <span className="font-mono text-xs text-gray-400">
                CLICK & DRAG TO ROTATE // TOGGLE EXPLODED VIEW TO SEPARATE CHASSIS, AVIONICS & MOTORS
              </span>
              <span className="font-mono text-xs text-red">MODE: 4.0 INTERACTIVE INSPECTION</span>
            </div>
          </div>

          {/* RIGHT: Technical Information & Subsystem Specification Panel */}
          <div className="workstation-specs-pane">
            <div className="specs-pane-header">
              <span className="tech-tag tech-tag-red">SUBSYSTEM SPECIFICATION</span>
              <span className="font-mono text-xs text-gray-400">DATA SOURCE: src/data/aircraft.js</span>
            </div>

            {/* Subsystem Navigation Tabs */}
            <div className="subsystem-tabs-scroll">
              {Object.keys(aircraft.subsystems).map((key) => {
                const sub = aircraft.subsystems[key];
                const Icon = subsystemIcons[key] || Layers;
                const isActive = activeSubsystemKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`subsystem-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSubsystemKey(key)}
                  >
                    <Icon size={14} className={isActive ? 'text-red' : 'text-gray-400'} />
                    <span>{sub.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Subsystem Detail Card */}
            <div className="subsystem-active-card">
              <div className="subsystem-card-top">
                <div className="flex items-center gap-3">
                  <div className="subsystem-icon-box">
                    <SubsystemIcon size={20} className="text-red" />
                  </div>
                  <div>
                    <h3 className="subsystem-title">{currentSubsystem.name}</h3>
                    <span className="font-mono text-xs text-red">{currentSubsystem.status}</span>
                  </div>
                </div>
              </div>

              {/* Hardware Specification Placeholder Box */}
              <div className="subsystem-placeholder-block">
                <div className="flex items-center gap-2 mb-1">
                  <Activity size={13} className="text-red" />
                  <span className="tech-label text-red">4.0 HARDWARE SPECIFICATION</span>
                </div>
                <div className="placeholder-value font-mono text-xs text-white">
                  {currentSubsystem.spec}
                </div>
                <p className="placeholder-note text-xs text-gray-400 mt-2">
                  {currentSubsystem.description}
                </p>
              </div>

              {/* Parameter Readouts */}
              <div className="subsystem-parameters-table">
                <span className="tech-label mb-2 block text-gray-400">SYSTEM ATTRIBUTES:</span>
                {currentSubsystem.parameters.map((param, pIdx) => (
                  <div key={pIdx} className="param-row">
                    <span className="param-label font-mono text-xs text-gray-400">{param.label}</span>
                    <span className="param-value font-mono text-xs text-white">{param.value}</span>
                  </div>
                ))}
              </div>

              <div className="subsystem-footer-disclaimer font-mono text-xs text-gray-500">
                Parameters will reflect confirmed 4.0 bench dyno results upon completion of integration phase.
              </div>
            </div>

            {/* Quick Summary of all 4.0 Subsystems */}
            <div className="subsystems-compact-summary">
              <span className="tech-label text-gray-400 mb-2 block">FULL ARCHITECTURE MATRIX:</span>
              <div className="summary-grid">
                {Object.entries(aircraft.subsystems).map(([key, sub]) => (
                  <button
                    key={key}
                    type="button"
                    className={`summary-item ${activeSubsystemKey === key ? 'selected' : ''}`}
                    onClick={() => setActiveSubsystemKey(key)}
                  >
                    <span className="summary-item-name font-mono text-xs">{sub.name}</span>
                    <span className="summary-item-status font-mono text-xs text-red">{sub.status}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Historical Comparison Notice (Link to 3.0 Archive) */}
        <section className="aircraft-archive-bridge mt-16">
          <div className="bridge-inner">
            <div className="bridge-left">
              <GenerationBadge variant="archive" size="sm" />
              <h3 className="bridge-title mt-2">
                LOOKING FOR PREVIOUS GENERATION AIRCRAFT SPECIFICATIONS?
              </h3>
              <p className="bridge-desc">
                Inspect the historical telemetry, airframes, and flight specs of the 
                <span className="text-white font-semibold"> IK-3.0 Hexacopter (2024)</span> and 
                <span className="text-white font-semibold"> IK-3.0 Competition Quadcopter (2025)</span> in the dedicated 3.0 Historical Archive.
              </p>
            </div>
            <div className="bridge-right">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <Archive size={15} />
                <span>INSPECT 3.0 AIRCRAFT ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
