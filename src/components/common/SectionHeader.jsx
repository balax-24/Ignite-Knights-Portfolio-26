import React from 'react';

export function SectionHeader({
  number = '01',
  tag = 'SYSTEM MODULE',
  title = '',
  highlight = '',
  subtitle = '',
  align = 'left',
  coord = 'IK-04 // 4.0 AUTONOMOUS SYSTEMS',
  generation = '4.0',
}) {
  return (
    <div className={`section-header-wrap ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      <div className="section-meta-bar">
        <div className="flex items-center gap-2">
          <span className="tech-tag tech-tag-red">{number}</span>
          <span className="tech-label">{tag}</span>
        </div>
        <span className="section-coord">{coord}</span>
      </div>

      <h2 className="section-title-large">
        {title} {highlight && <span className="section-title-highlight">{highlight}</span>}
      </h2>

      {subtitle && <p className="section-subtitle-editorial">{subtitle}</p>}
    </div>
  );
}
