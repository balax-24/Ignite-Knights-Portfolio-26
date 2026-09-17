import React, { useState } from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

export function SponsorCard({ sponsor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="sponsor-ecosystem-card corner-bracket-box">
      <div className="sponsor-card-top">
        <span className="tech-tag tech-tag-red">{sponsor.ecosystemTag}</span>
        <span className="sponsor-tier">{sponsor.tier}</span>
      </div>

      <div className="sponsor-logo-frame">
        {sponsor.logo && !imgError ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="sponsor-logo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="sponsor-logo-fallback">
            <Cpu size={32} className="text-red" />
            <span className="fallback-sponsor-name">{sponsor.name}</span>
          </div>
        )}
      </div>

      <div className="sponsor-card-body">
        <h3 className="sponsor-name">{sponsor.name}</h3>
        <p className="sponsor-category">{sponsor.category}</p>
        <p className="sponsor-desc">{sponsor.description}</p>

        <div className="sponsor-team-role">
          <span className="role-heading">INTEGRATION IN IK 3.0:</span>
          <p className="role-text">{sponsor.roleInTeam}</p>
        </div>
      </div>

      <div className="sponsor-card-footer">
        <span className="tech-label">TECHNOLOGY PARTNER</span>
        <ArrowUpRight size={14} className="sponsor-arrow" />
      </div>
    </div>
  );
}
