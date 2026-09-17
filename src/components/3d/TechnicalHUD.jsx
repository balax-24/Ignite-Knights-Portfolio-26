import React, { useState, useEffect } from 'react';
import { telemetryData4 } from '../../data/telemetry';

/**
 * Technical HUD overlay for the 3D Drone Scene
 *
 * 4.0 DEVELOPMENT TELEMETRY INTERFACE:
 * - AIRCRAFT: IK-04
 * - STATUS: DEVELOPMENT
 * - MODE: SYSTEM INTEGRATION
 * - FLIGHT: STANDBY
 * - VERSION: 4.0
 *
 * Sourced directly from src/data/telemetry.js
 */
export function TechnicalHUD({ activeSubsystem = null }) {
  const [liveState, setLiveState] = useState({
    voltage: 24.0,
    temp: 28.4,
    imuDrift: 0.02,
    packets: 1420,
    heading: 42,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveState((prev) => ({
        voltage: parseFloat((24.0 + (Math.sin(Date.now() / 2000) * 0.08)).toFixed(2)),
        temp: parseFloat((28.4 + (Math.cos(Date.now() / 3000) * 0.2)).toFixed(1)),
        imuDrift: parseFloat((Math.sin(Date.now() / 1200) * 0.03).toFixed(2)),
        packets: prev.packets + 1,
        heading: Math.floor(42 + (Math.sin(Date.now() / 4000) * 2)),
      }));
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="technical-hud-container" style={{ pointerEvents: 'none' }}>
      {/* Top Left: 4.0 Development Status */}
      <div className="hud-widget hud-top-left">
        <div className="hud-line-header">
          <span className="hud-indicator active pulse"></span>
          <span className="hud-title">4.0 DEVELOPMENT TELEMETRY</span>
        </div>
        <div className="hud-metrics-row">
          <div className="hud-metric">
            <span className="hud-metric-label">AIRCRAFT</span>
            <span className="hud-metric-value text-red">{telemetryData4.aircraft}</span>
          </div>
          <div className="hud-metric">
            <span className="hud-metric-label">STATUS</span>
            <span className="hud-metric-value text-red">{telemetryData4.status}</span>
          </div>
          <div className="hud-metric">
            <span className="hud-metric-label">MODE</span>
            <span className="hud-metric-value">{telemetryData4.mode}</span>
          </div>
          <div className="hud-metric">
            <span className="hud-metric-label">FLIGHT</span>
            <span className="hud-metric-value">{telemetryData4.flightState}</span>
          </div>
        </div>
      </div>

      {/* Top Right: System Bench Diagnostics */}
      <div className="hud-widget hud-top-right">
        <div className="hud-line-header" style={{ justifyContent: 'flex-end' }}>
          <span className="hud-title">TEST BENCH LINK // STANDBY</span>
          <span className="hud-indicator active"></span>
        </div>
        <div className="hud-metrics-grid">
          <div className="hud-metric-box">
            <span className="hud-metric-label">SYS VERSION</span>
            <span className="hud-metric-hero-val">{telemetryData4.generation}<span className="unit">.0-DEV</span></span>
          </div>
          <div className="hud-metric-box">
            <span className="hud-metric-label">BUS VOLTAGE</span>
            <span className="hud-metric-hero-val">{liveState.voltage}<span className="unit">V</span></span>
          </div>
        </div>
      </div>

      {/* Bottom Left: Integration Node Matrix */}
      <div className="hud-widget hud-bottom-left">
        <div className="hud-line-header">
          <span className="hud-bracket">[</span>
          <span className="hud-title">SYSTEM ARCHITECTURE NODES</span>
          <span className="hud-bracket">]</span>
        </div>
        <div className="hud-sensor-matrix">
          {telemetryData4.activeNodes.map((node) => (
            <div key={node.name} className="hud-sensor-item">
              <span className="sensor-name">{node.name}:</span>
              <span className={`sensor-val ${node.statusColor === 'green' ? 'text-green' : 'text-red'}`}>
                {node.state}
              </span>
            </div>
          ))}
          {activeSubsystem && (
            <div className="hud-sensor-item" style={{ borderTop: '1px solid rgba(225, 6, 0, 0.3)', paddingTop: '4px' }}>
              <span className="sensor-name">INSPECTING:</span>
              <span className="sensor-val text-red">{activeSubsystem}</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Right: Base Location Coordinates */}
      <div className="hud-widget hud-bottom-right">
        <div className="hud-power-status">
          <div className="hud-power-bar-wrap">
            <div className="hud-power-label">
              <span>BENCH THERMAL</span>
              <span className="text-red">{liveState.temp}°C (OPTIMAL)</span>
            </div>
            <div className="hud-power-track">
              <div className="hud-power-fill" style={{ width: '42%' }}></div>
            </div>
          </div>
          <div className="hud-coords">
            <span>IK-04 SYSTEM LAB</span>
            <span className="hud-divider">|</span>
            <span>{telemetryData4.attitudeHeading}</span>
          </div>
        </div>
      </div>

      {/* Center Precision Aim Crosshair */}
      <div className="hud-center-crosshair">
        <div className="reticle-ring"></div>
        <div className="reticle-line reticle-h"></div>
        <div className="reticle-line reticle-v"></div>
        <div className="reticle-tag">PITCH: 0.0° // ROLL: {liveState.imuDrift}°</div>
      </div>
    </div>
  );
}
