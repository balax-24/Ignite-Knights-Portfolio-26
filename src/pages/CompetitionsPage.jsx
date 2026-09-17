import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { competitionsData } from '../data/competitionsData';
import { CompetitionDossier } from '../components/cards/CompetitionDossier';
import { Target, Trophy, Flame, ShieldAlert, Radio } from 'lucide-react';

export function CompetitionsPage() {
  return (
    <div className="competitions-page">
      {/* Hero */}
      <PageHero
        badge="COMPETITION ARENA // ACTIVE CHALLENGES"
        title="THE"
        highlight="ARENA."
        subtitle="Where engineering meets pressure. Our team actively participates in drone competitions and challenges that push us to improve our engineering, autonomous systems and problem-solving capabilities."
        telemetry="ACTIVE MISSIONS : 3 NATIONAL CHALLENGES // 1 PODIUM RECORD"
      />

      {/* Intro Overview Stats */}
      <section className="competitions-overview-section">
        <div className="container">
          <div className="arena-stats-strip corner-bracket-box">
            <div className="arena-stat-box">
              <span className="arena-stat-num text-red">03</span>
              <span className="arena-stat-title">CURRENT CAMPAIGNS</span>
              <span className="arena-stat-desc">NIDAR • AERATHON • SAE ADDC</span>
            </div>
            <div className="arena-stat-divider"></div>
            <div className="arena-stat-box">
              <span className="arena-stat-num">TOP 10</span>
              <span className="arena-stat-title">BENCHMARK STANDING</span>
              <span className="arena-stat-desc">SAE ADDC 2025 National Finals</span>
            </div>
            <div className="arena-stat-divider"></div>
            <div className="arena-stat-box">
              <span className="arena-stat-num text-green">100%</span>
              <span className="arena-stat-title">AUTONOMOUS MISSION DESIGN</span>
              <span className="arena-stat-desc">Onboard Real-Time AI Inference</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Mission Dossiers */}
      <section className="competitions-list-section">
        <div className="container">
          <SectionHeader
            number="01"
            tag="TACTICAL SPECIFICATIONS"
            title="ACTIVE"
            highlight="MISSION DOSSIERS"
            subtitle="Explore each competition's core challenge, our multidisciplinary engineering approach, deployed avionics stack, and current readiness status."
          />

          <div className="competitions-dossiers-wrapper">
            {competitionsData.map((comp) => (
              <CompetitionDossier key={comp.id} competition={comp} defaultExpanded={true} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
