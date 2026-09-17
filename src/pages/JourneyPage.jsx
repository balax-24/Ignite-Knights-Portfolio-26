import React from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { legacy3Era, transitionBridge, current4Era } from '../data/journey';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function JourneyPage() {
  return (
    <div className="journey-editorial-page">
      {/* Editorial Page Header */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            THE JOURNEY<br />
            <span className="text-red">DUAL-ERA RECORD</span>
          </h1>
          <p className="editorial-page-lead">
            The evolution of Ignite Knights from our founding flights in 2024 through our generational transition into autonomous aerial robotics.
          </p>
        </div>
      </section>

      <section className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {/* ==================================================================
            CHAPTER 01: IGNITE KNIGHTS 3.0 (ARCHIVE)
           ================================================================== */}
        <div className="journey-chapter-block" style={{ background: '#0a0a0c' }}>
          <div className="chapter-header" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <span className="chapter-marker">CHAPTER 01 // ARCHIVE</span>
            <h2 className="chapter-title" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>
              IGNITE KNIGHTS 3.0
            </h2>
            <span className="chapter-period">2024 — 2026 // PREVIOUS GENERATION</span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '850px', marginBottom: '2.5rem' }}>
            The founding era of our organization. A passionate interdisciplinary group of student engineers proved collegiate aerial robotics on national stages, engineering our first radial hexacopter and earning a national Top 10 finish at SAE ADDC 2025.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {legacy3Era.milestones.map((m, idx) => (
              <div key={idx} style={{ background: '#111114', padding: '2rem', border: '1px solid var(--border-subtle)' }}>
                <span className="editorial-tag">{m.year}</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.8rem 0' }}>{m.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{m.summary}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/archive" className="editorial-text-link">
              <span>EXPLORE COMPLETE 3.0 ARCHIVE</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* ==================================================================
            CHAPTER 02: THE TRANSITION (SYSTEM RESET)
           ================================================================== */}
        <div className="journey-chapter-block" style={{ background: '#060606', borderLeft: '3px solid var(--accent-red)' }}>
          <span className="chapter-marker red-dot">CHAPTER 02 // SYSTEM RESET</span>
          <h2 className="chapter-title" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>
            CLEAN-SHEET TRANSITION
          </h2>
          <span className="chapter-period">EARLY 2026 // ARCHITECTURE HANDOFF</span>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: '1.8', maxWidth: '850px', marginTop: '1.5rem' }}>
            {transitionBridge.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div>
              <span className="editorial-tag">DECOMMISSIONED</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Legacy 3.0 quadcopter and hexacopter platforms retired from active flight rosters. Telemetry streams archived.
              </p>
            </div>
            <div>
              <span className="editorial-tag red-dot">INITIALIZED</span>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                4.0 systems engineering protocol enacted. Toray carbon airframe geometry and high-speed edge compute synthesis launched.
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================
            CHAPTER 03: IGNITE KNIGHTS 4.0 (CURRENT GENERATION)
           ================================================================== */}
        <div className="journey-chapter-block" style={{ background: '#0d0d10', border: '1px solid rgba(225, 6, 0, 0.4)' }}>
          <div className="chapter-header" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <span className="chapter-marker red-dot">CHAPTER 03 // ACTIVE</span>
            <h2 className="chapter-title" style={{ fontSize: '2.5rem', marginTop: '0.4rem' }}>
              IGNITE KNIGHTS 4.0
            </h2>
            <span className="chapter-period">2026 → PRESENT // CURRENT GENERATION</span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '850px', marginBottom: '2.5rem' }}>
            The current active era. Focused on extreme engineering rigor, in-house fabrication, multi-modal sensor fusion, and preparing our newly certified cohort for upcoming autonomous flight challenges.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {current4Era.milestones.map((m, idx) => (
              <div key={idx} style={{ background: '#141418', padding: '2rem', border: '1px solid var(--border-subtle)' }}>
                <span className="editorial-tag red-dot">{m.year}</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.8rem 0' }}>{m.title}</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{m.summary}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/aircraft" className="btn-aerospace btn-aerospace-primary">
              <span>EXPLORE 4.0 AIRCRAFT</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
