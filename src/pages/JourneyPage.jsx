import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeader } from '../components/common/SectionHeader';
import { journeyData } from '../data/journeyData';
import { Flag, Trophy, TrendingUp, CheckCircle2, Radio, Calendar, ArrowRight } from 'lucide-react';

export function JourneyPage() {
  const [selectedYear, setSelectedYear] = useState('2025');

  const icons = [Flag, Trophy, TrendingUp];

  return (
    <div className="journey-page">
      {/* Hero */}
      <PageHero
        badge="HISTORICAL DEVELOPMENT // MILESTONES"
        title="FROM FIRST FLIGHT"
        highlight="TO AUTONOMOUS SYSTEMS."
        subtitle="Formed in 2024 with a vision to revolutionize drone technology, Ignite Knights 3.0 has rapidly evolved through intensive research, development, and competition."
        telemetry="TIMELINE ACCUMULATION : 24+ MONTHS // 3 AIRFRAME EVOLUTIONS"
      />

      {/* Main Interactive Timeline Section */}
      <section className="journey-timeline-section">
        <div className="container">
          <div className="timeline-interactive-wrapper">
            {/* Red Travelling Backbone Line */}
            <div className="timeline-central-spine">
              <div className="spine-red-glow-line"></div>
            </div>

            {journeyData.map((milestone, idx) => {
              const Icon = icons[idx] || Trophy;
              const isSelected = selectedYear === milestone.year;

              return (
                <div
                  key={milestone.year}
                  className={`timeline-node-item ${idx % 2 === 0 ? 'node-left' : 'node-right'} ${
                    isSelected ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedYear(milestone.year)}
                >
                  {/* Spine Center Node Marker */}
                  <div className="timeline-spine-marker">
                    <div className="marker-outer-ring">
                      <div className="marker-inner-dot"></div>
                    </div>
                    <span className="marker-year-label">{milestone.year}</span>
                  </div>

                  {/* Milestone Card Content */}
                  <div className="timeline-content-card corner-bracket-box">
                    <div className="timeline-card-meta">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-red" />
                        <span className="tech-tag tech-tag-red">{milestone.badge}</span>
                      </div>
                      <span className="tech-label">CYCLE // {milestone.year}</span>
                    </div>

                    <h3 className="timeline-card-title">{milestone.title}</h3>
                    <p className="timeline-card-summary">{milestone.summary}</p>
                    <p className="timeline-card-desc">{milestone.description}</p>

                    {/* Key Achievements Box */}
                    <div className="timeline-achievements-block">
                      <span className="achievements-heading">KEY ACHIEVEMENTS:</span>
                      <ul className="achievements-ul">
                        {milestone.keyAchievements.map((ach, aIdx) => (
                          <li key={aIdx} className="achievement-li">
                            <CheckCircle2 size={13} className="text-red flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Metrics Table */}
                    <div className="timeline-metrics-grid">
                      {milestone.technicalMetrics.map((met, mIdx) => (
                        <div key={mIdx} className="timeline-metric-cell">
                          <span className="metric-label">{met.label}</span>
                          <span className="metric-val">{met.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Applications & Vision Ahead */}
      <section className="journey-vision-section">
        <div className="container">
          <div className="vision-callout-box corner-bracket-box">
            <div className="flex items-center gap-3 mb-4">
              <Radio size={20} className="text-red animate-pulse" />
              <span className="tech-label tech-label-red">LOOKING AHEAD // 2026 & BEYOND</span>
            </div>
            <h2 className="vision-title">
              BRIDGING COMPETITION FLIGHT INTO REAL-WORLD LOGISTICS & RESCUE.
            </h2>
            <p className="vision-desc">
              As we continue to innovate and push boundaries, Ignite Knights 3.0 is committed to
              developing next-generation drone solutions that transition beyond the competition
              ring into practical aerial applications: emergency healthcare supply transport,
              disaster relief mapping, and high-precision autonomous industrial inspections.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
