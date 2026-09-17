import React from 'react';
import { Shield, Archive, Activity } from 'lucide-react';

/**
 * GenerationBadge
 * 
 * Reusable aerospace badge making the distinction between
 * CURRENT GENERATION (4.0) and PREVIOUS GENERATION (3.0 ARCHIVED) impossible to miss.
 * 
 * @param {'current' | 'archive'} variant - "current" (4.0 active) or "archive" (3.0 legacy)
 * @param {string} customLabel - Optional custom text
 * @param {boolean} showIcon - Whether to display generation icon
 * @param {string} size - "sm" | "md" | "lg"
 */
export function GenerationBadge({
  variant = 'current',
  customLabel,
  showIcon = true,
  size = 'md',
  className = '',
}) {
  const isCurrent = variant === 'current';

  return (
    <div
      className={`generation-badge gen-badge-${variant} gen-badge-${size} ${className}`}
      role="status"
    >
      <div className="gen-badge-indicator">
        {isCurrent ? (
          <span className="gen-dot-pulse active"></span>
        ) : (
          <span className="gen-dot-archive"></span>
        )}
      </div>

      {showIcon && (
        <span className="gen-badge-icon">
          {isCurrent ? <Activity size={12} className="text-red" /> : <Archive size={12} />}
        </span>
      )}

      <span className="gen-badge-text">
        {customLabel ||
          (isCurrent
            ? 'CURRENT GENERATION // 4.0'
            : 'PREVIOUS GENERATION // 3.0 ARCHIVE')}
      </span>

      <span className="gen-badge-tag">{isCurrent ? '4.0' : '3.0'}</span>
    </div>
  );
}
