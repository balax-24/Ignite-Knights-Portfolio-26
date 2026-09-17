import React from 'react';

/**
 * GenerationBadge
 * Clear, editorial badge distinguishing CURRENT 4.0 vs PREVIOUS 3.0 ARCHIVE
 */
export function GenerationBadge({
  variant = 'current',
  customLabel,
  className = '',
}) {
  const isCurrent = variant === 'current';
  const label =
    customLabel ||
    (isCurrent ? 'CURRENT GENERATION // 4.0' : 'PREVIOUS GENERATION // 3.0 ARCHIVE');

  return (
    <div className={`generation-badge ${variant} ${className}`} role="status">
      <span className="badge-dot" aria-hidden="true"></span>
      <span className="badge-label">{label}</span>
    </div>
  );
}
