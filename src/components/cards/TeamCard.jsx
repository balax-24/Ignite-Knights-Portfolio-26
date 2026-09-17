import React, { useState } from 'react';
import { User, Shield, Terminal } from 'lucide-react';

export function TeamCard({ member }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="team-engineer-card corner-bracket-box">
      <div className="team-card-image-wrap">
        {member.photo && !imgError ? (
          <img
            src={member.photo}
            alt={member.name}
            className={`team-card-photo ${imgLoaded ? 'loaded' : ''}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="team-card-photo-fallback">
            <User size={56} className="text-faint" />
            <span className="fallback-callsign">{member.callSign || 'IK-AVIONICS'}</span>
          </div>
        )}

        <div className="team-card-overlay-telemetry">
          <span className="callsign-tag">{member.callSign || 'IK-CORE'}</span>
          <span className="dept-tag">{member.domain}</span>
        </div>
      </div>

      <div className="team-card-info">
        <div className="team-card-meta-line">
          <span className="team-card-role">{member.role}</span>
          <span className="status-dot active"></span>
        </div>

        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-dept">{member.department}</p>

        {member.bio && <p className="team-card-bio">{member.bio}</p>}

        {member.tags && member.tags.length > 0 && (
          <div className="team-card-tags">
            {member.tags.map((tag, tIdx) => (
              <span key={tIdx} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="team-card-bottom-ruler">
        <span className="ruler-notch"></span>
        <span className="ruler-line"></span>
        <span className="ruler-notch"></span>
      </div>
    </div>
  );
}
