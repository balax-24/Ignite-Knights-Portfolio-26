import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { SectionHeader } from '../components/common/SectionHeader';
import { legacy3Era, transitionBridge, current4Era } from '../data/journey';
import {
  Clock,
  Archive,
  ArrowRight,
  ArrowUpRight,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Activity,
  Crosshair,
  Compass,
  Radio,
} from 'lucide-react';

export function JourneyPage() {
  return (
    <div className="journey-page">
      {/* Page Hero */}
      <PageHero
        badge="IGNITE KNIGHTS // EVOLUTIONARY TIMELINE"
        title="THE EVOLUTIONARY"
        highlight="RECORD"
        subtitle="A continuous trajectory of aeronautical refinement. Documenting our foundational 3.0 era in the archive, and charting the systemic transition into Ignite Knights 4.0."
        telemetry="SYSTEM RECORD // DUAL-ERA REPOSITORY"
      >
        <div className="flex items-center gap-3 mt-2">
          <GenerationBadge variant="archive" size="sm" />
          <span className="text-gray-500 font-mono text-xs">→ TRANSITION →</span>
          <GenerationBadge variant="current" size="sm" />
        </div>
      </PageHero>

      <div className="container py-12">
        {/* ================================================================
            ERA 1: PREVIOUS GENERATION — IGNITE KNIGHTS 3.0 (2024–2026)
           ================================================================ */}
        <section className="journey-era-section mb-16">
          <div className="era-header-bar archive-mode mb-8">
            <div className="flex items-center gap-3">
              <GenerationBadge variant="archive" size="md" />
              <span className="font-mono text-xs text-gray-400">ERA 01 // HISTORICAL FOUNDATION</span>
            </div>
            <span className="font-mono text-xs text-gray-500">STATUS: CONCLUDED & ARCHIVED</span>
          </div>

          <div className="era-intro-box archive-border mb-10">
            <h2 className="era-title text-gray-200">
              IGNITE KNIGHTS 3.0 // THE FOUNDING ERA (2024 — 2026)
            </h2>
            <p className="era-desc text-gray-400 text-sm">
              The 3.0 era established our identity in collegiate aeronautics. From building our first radial hexacopter to placing in the national Top 10 at SAE ADDC 2025, these milestones formed the mechanical and organizational foundation of the team.
            </p>
          </div>

          {/* Historical Timeline Cards */}
          <div className="era-timeline-stack space-y-8">
            {legacy3Era.milestones.map((m) => (
              <div key={m.year} className="timeline-archive-card">
                <div className="card-top-strip">
                  <div className="flex items-center gap-2">
                    <span className="year-pill font-mono">{m.year}</span>
                    <span className="tag-pill font-mono text-xs text-gray-400">{m.tag}</span>
                  </div>
                  <span className="archive-badge-text font-mono text-xs">3.0 ARCHIVED</span>
                </div>

                <h3 className="timeline-card-title text-white font-bold mt-2">{m.title}</h3>
                <p className="timeline-card-summary text-gray-300 text-sm mt-2">{m.summary}</p>

                <div className="timeline-achievements-box mt-4">
                  <span className="tech-label text-gray-500 mb-2 block">VERIFIED 3.0 MILESTONES:</span>
                  <div className="achievements-list space-y-1">
                    {m.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="achievement-row flex items-center gap-2">
                        <span className="text-gray-500 text-xs">■</span>
                        <span className="font-mono text-xs text-gray-300">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="timeline-metrics-foot mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-gray-500">
                  <span>RECORD: VERIFIED IN ARCHIVE</span>
                  <span>PREVIOUS GENERATION</span>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Line Termination Visual */}
          <div className="timeline-termination-rule mt-12">
            <div className="termination-line"></div>
            <div className="termination-marker font-mono">
              <span className="text-red">●</span> 3.0 TELEMETRY STREAM TERMINATED // RECORD PRESERVED
            </div>
            <div className="termination-line"></div>
          </div>
        </section>

        {/* ================================================================
            THE SYSTEM RESET TRANSITION BRIDGE
           ================================================================ */}
        <section className="journey-transition-bridge mb-16">
          <div className="transition-box corner-bracket-box">
            <div className="transition-code-bar font-mono text-xs">
              <span className="text-red animate-pulse">SYSTEM RESET EVENT //</span>
              <span className="text-gray-400 ml-2">{transitionBridge.code}</span>
            </div>

            <h2 className="transition-hero-title">
              {transitionBridge.title}
            </h2>

            <p className="transition-text">
              {transitionBridge.description}
            </p>

            <div className="transition-telemetry-diff">
              <div className="diff-col diff-old">
                <span className="diff-label font-mono text-gray-500">3.0 ARCHITECTURE:</span>
                <span className="diff-val font-mono text-gray-400">DECOMMISSIONED & ARCHIVED</span>
              </div>
              <div className="diff-arrow font-mono text-red">→ RESET →</div>
              <div className="diff-col diff-new">
                <span className="diff-label font-mono text-red">4.0 ARCHITECTURE:</span>
                <span className="diff-val font-mono text-white">IK-04 CLEAN-SHEET ACTIVE</span>
              </div>
            </div>

            <div className="transition-signals font-mono text-xs text-gray-400 mt-4">
              <div className="signal-line text-gray-500">[-] {transitionBridge.terminalSignal}</div>
              <div className="signal-line text-red">[+] {transitionBridge.bootSignal}</div>
            </div>
          </div>
        </section>

        {/* ================================================================
            ERA 2: CURRENT GENERATION — IGNITE KNIGHTS 4.0 (2026 → PRESENT)
           ================================================================ */}
        <section className="journey-era-section mb-16">
          <div className="era-header-bar current-mode mb-8">
            <div className="flex items-center gap-3">
              <GenerationBadge variant="current" size="md" />
              <span className="font-mono text-xs text-gray-400">ERA 02 // NEW GENERATION</span>
            </div>
            <span className="font-mono text-xs text-red">STATUS: CURRENTLY DEVELOPING</span>
          </div>

          <div className="era-intro-box current-border mb-10">
            <h2 className="era-title text-white">
              IGNITE KNIGHTS 4.0 // ACTIVE FLIGHT ERA (2026 → PRESENT)
            </h2>
            <p className="era-desc text-gray-300 text-sm">
              The new era begins with a clean-sheet multirotor airframe, next-generation edge perception acceleration, deterministic attitude stabilization, and modular payload systems. Below is our active development trajectory.
            </p>
          </div>

          {/* 4.0 Active Development Cards */}
          <div className="era-timeline-stack space-y-8">
            {current4Era.milestones.map((m) => (
              <div key={m.year} className="timeline-current-card">
                <div className="card-top-strip">
                  <div className="flex items-center gap-2">
                    <span className="year-pill-red font-mono">{m.year}</span>
                    <span className="tag-pill-red font-mono text-xs">{m.tag}</span>
                  </div>
                  <span className="current-badge-text font-mono text-xs text-red">
                    {m.status}
                  </span>
                </div>

                <h3 className="timeline-card-title text-white font-bold mt-2">{m.title}</h3>
                <p className="timeline-card-summary text-gray-300 text-sm mt-2">{m.summary}</p>

                <div className="timeline-achievements-box mt-4">
                  <span className="tech-label text-red mb-2 block">ACTIVE OBJECTIVES:</span>
                  <div className="achievements-list space-y-1">
                    {m.points.map((p, pIdx) => (
                      <div key={pIdx} className="achievement-row flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-red flex-shrink-0" />
                        <span className="font-mono text-xs text-white">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="timeline-metrics-foot mt-4 pt-3 border-t border-red-500/20 flex items-center justify-between font-mono text-xs">
                  <span className="text-gray-400">TARGET: {m.metrics.status}</span>
                  <span className="text-red font-bold">IGNITE KNIGHTS 4.0</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Historical Archive Portal Link */}
        <section className="journey-archive-cta mt-16">
          <div className="archive-portal-inner">
            <div className="flex items-center gap-3 mb-2">
              <GenerationBadge variant="archive" size="sm" />
              <span className="font-mono text-xs text-gray-400">COMPLETE HISTORICAL RECORD</span>
            </div>

            <h3 className="portal-heading">
              EXPLORE THE COMPLETE 3.0 HISTORICAL ARCHIVE
            </h3>

            <p className="portal-text">
              View the founding roster, historical aircraft gallery, software partners, and SAE India / SAE ADDC tournament data in the dedicated Ignite Knights 3.0 Archive.
            </p>

            <div className="mt-4">
              <Link to="/archive" className="btn-aerospace btn-aerospace-archive-cta">
                <Archive size={15} />
                <span>ACCESS 3.0 HISTORICAL ARCHIVE →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
