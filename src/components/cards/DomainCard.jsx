import React, { useState } from 'react';
import { Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function DomainCard({ domain }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`domain-tech-card corner-bracket-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="domain-card-header">
        <span className="domain-card-num">{domain.number}</span>
        <span className="domain-card-telemetry">{domain.telemetry}</span>
      </div>

      <h3 className="domain-card-title">{domain.title}</h3>
      <p className="domain-card-tagline">{domain.tagline}</p>

      <p className="domain-card-desc">{domain.description}</p>

      <div className="domain-tech-stack">
        {domain.techStack.map((tech, idx) => (
          <span key={idx} className="tech-tag tech-tag-red">
            {tech}
          </span>
        ))}
      </div>

      {domain.specs && (
        <div className="domain-specs-grid">
          {domain.specs.map((spec, sIdx) => (
            <div key={sIdx} className="domain-spec-item">
              <span className="domain-spec-label">{spec.label}</span>
              <span className="domain-spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="domain-card-corner-arrow">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
