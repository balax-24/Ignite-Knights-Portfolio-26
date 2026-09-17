import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { DroneScene } from '../components/3d/DroneScene';
import { aircraft } from '../data/aircraft';
import { Layers, ArrowRight } from 'lucide-react';

export function AircraftPage() {
  const [isExploded, setIsExploded] = useState(false);

  return (
    <div className="aircraft-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            THE AIRCRAFT<br />
            <span className="text-red">IK-04</span>
          </h1>
          <p className="editorial-page-lead">
            A clean-sheet autonomous engineering platform designed and fabricated in-house for extreme operational regimes and high-speed edge perception.
          </p>
        </div>
      </section>

      {/* Interactive 3D CAD Workstation */}
      <section className="container">
        <div className="aircraft-cad-workstation">
          <DroneScene isExploded={isExploded} className="w-full h-full" />

          {/* Clean CAD Control Bar */}
          <div className="cad-inspection-bar">
            <button
              className={`cad-btn-toggle ${isExploded ? 'active' : ''}`}
              onClick={() => setIsExploded(!isExploded)}
              aria-pressed={isExploded}
            >
              <Layers size={14} />
              <span>{isExploded ? 'ASSEMBLED VIEW' : 'EXPLODED CAD VIEW'}</span>
            </button>
            <span className="cad-hint">CLICK & DRAG TO ORBIT · COMPONENT INSPECTION</span>
          </div>
        </div>

        {/* Clean Engineering Specification Table */}
        <div className="section-block" style={{ borderTop: 'none', paddingTop: '2rem' }}>
          <div className="aircraft-intro-header">
            <div>
              <span className="editorial-num">02</span>
              <h2 className="section-title-editorial">SUBSYSTEM SPECIFICATIONS</h2>
              <span className="editorial-tag red-dot">IN-HOUSE ARCHITECTURE BREAKDOWN</span>
            </div>
          </div>

          <div className="aircraft-specs-editorial-grid">
            {/* Airframe */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">01 // AIRFRAME</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.airframe.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.airframe.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.airframe.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Propulsion */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">02 // PROPULSION</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.propulsion.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.propulsion.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.propulsion.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Control */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">03 // FLIGHT CONTROL</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.control.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.control.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.control.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compute */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">04 // COMPUTE & AI</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.compute.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.compute.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.compute.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perception */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">05 // PERCEPTION</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.perception.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.perception.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.perception.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Power */}
            <div className="aircraft-spec-card">
              <span className="editorial-tag">06 // POWER & BATTERY</span>
              <h3 className="aircraft-spec-name">{aircraft.subsystems.power.name}</h3>
              <p className="spec-item-desc">{aircraft.subsystems.power.description}</p>
              <div className="editorial-divider" style={{ margin: '1.2rem 0' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {aircraft.subsystems.power.parameters.map((p, idx) => (
                  <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}>{p.label}</span>
                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Action */}
      <section className="section-block">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>EXPLORE 4.0 MISSIONS</h3>
            <p style={{ color: 'var(--text-muted)' }}>Review the operational challenges designed for this aircraft architecture.</p>
          </div>
          <Link to="/missions" className="btn-aerospace btn-aerospace-primary">
            <span>VIEW MISSIONS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
