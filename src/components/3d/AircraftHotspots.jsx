import React, { useState } from 'react';
import { aircraft } from '../../data/aircraft';
import { X, ChevronRight, Activity, Crosshair } from 'lucide-react';

/**
 * AircraftHotspots
 * 
 * Interactive engineering inspection hotspots for IK-04 development aircraft:
 * - FLIGHT CONTROL
 * - COMPUTE
 * - PERCEPTION
 * - POWER
 * - PROPULSION
 * - COMMUNICATION
 * 
 * Clicking a hotspot reveals a sleek aerospace technical drawer with editable placeholders.
 */
export function AircraftHotspots({
  activeHotspot = null,
  onSelectHotspot,
  isExploded = false,
  onToggleExploded,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (hotspot) => {
    setSelectedItem(hotspot);
    onSelectHotspot && onSelectHotspot(hotspot.id);
  };

  const handleClose = () => {
    setSelectedItem(null);
    onSelectHotspot && onSelectHotspot(null);
  };

  return (
    <div className="aircraft-hotspots-overlay">
      {/* Top Controls: Mode & Exploded Toggle */}
      <div className="hotspots-toolbar">
        <div className="hotspots-status">
          <span className="status-dot active"></span>
          <span className="tech-label text-white">IK-04 SYSTEM INSPECTOR</span>
          <span className="tech-badge-dot active ml-2"></span>
          <span className="tech-label text-red">4.0 DEVELOPMENT</span>
        </div>

        {onToggleExploded && (
          <button
            type="button"
            className={`btn-aerospace btn-aerospace-sm ${isExploded ? 'btn-aerospace-red' : 'btn-aerospace-outline'}`}
            onClick={onToggleExploded}
          >
            <Crosshair size={13} />
            <span>{isExploded ? 'EXPLODED VIEW : ACTIVE' : 'EXPLODED VIEW : ASSEMBLED'}</span>
          </button>
        )}
      </div>

      {/* Interactive Hotspots Selector Strip */}
      <div className="hotspots-chip-strip">
        {aircraft.hotspots.map((h) => {
          const isActive = activeHotspot === h.id || (selectedItem && selectedItem.id === h.id);
          return (
            <button
              key={h.id}
              type="button"
              className={`hotspot-chip ${isActive ? 'active' : ''}`}
              onClick={() => handleOpen(h)}
            >
              <span className="hotspot-chip-indicator"></span>
              <span className="hotspot-chip-title">{h.title}</span>
            </button>
          );
        })}
      </div>

      {/* Flyout Technical Telemetry Drawer for Selected Hotspot */}
      {selectedItem && (
        <div className="hotspot-flyout-panel">
          <div className="flyout-header">
            <div className="flex items-center gap-2">
              <span className="tech-tag tech-tag-red">SUBSYSTEM</span>
              <h4 className="flyout-title">{selectedItem.title}</h4>
            </div>
            <button
              type="button"
              className="flyout-close"
              onClick={handleClose}
              aria-label="Close Inspection Panel"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flyout-body">
            <div className="flyout-meta-row">
              <span className="tech-label">CLASSIFICATION</span>
              <span className="text-white text-xs font-mono">{selectedItem.system}</span>
            </div>

            <div className="flyout-placeholder-card">
              <div className="flex items-center gap-2 mb-1">
                <Activity size={12} className="text-red" />
                <span className="tech-label text-red">HARDWARE SPECIFICATION</span>
              </div>
              <div className="flyout-placeholder-val font-mono text-xs text-white">
                {selectedItem.specPlaceholder}
              </div>
            </div>

            <p className="flyout-desc">{selectedItem.description}</p>

            <div className="flyout-footer-note">
              <span className="tech-label">DATA INTEGRITY //</span>
              <span className="text-xs text-gray-400">
                Official 4.0 hardware component will populate upon test bench sign-off.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
