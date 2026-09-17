import React from 'react';
import { Radio } from 'lucide-react';

export function PageHero({
  badge = 'AEROSPACE DIVISION',
  title = '',
  highlight = '',
  subtitle = '',
  telemetry = 'STATUS : OPERATIONAL // SYSTEM READY',
  children,
}) {
  return (
    <section className="page-hero-section">
      <div className="container">
        <div className="page-hero-meta">
          <div className="page-hero-badge">
            <span className="status-dot active"></span>
            <span className="tech-label tech-label-red">{badge}</span>
          </div>
          <div className="page-hero-telemetry">
            <Radio size={12} className="text-red" />
            <span className="tech-label">{telemetry}</span>
          </div>
        </div>

        <div className="page-hero-content">
          <h1 className="page-hero-title">
            {title} {highlight && <span className="text-red">{highlight}</span>}
          </h1>

          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}

          {children && <div className="page-hero-actions">{children}</div>}
        </div>

        <div className="tech-ruler-line"></div>
      </div>
    </section>
  );
}
