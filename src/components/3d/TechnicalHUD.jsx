import React, { useState, useEffect } from 'react';

/**
 * Technical HUD overlay for the 3D Drone Scene
 * Features telemetry readouts strictly from Website.docx:
 * - ALTITUDE: 120m
 * - SYSTEM: AUTONOMOUS
 * - VISION: AI ENABLED
 * - STATUS: MISSION READY
 * Plus live telemetry micro-fluctuations, compass heading, and radar grid.
 */
export function TechnicalHUD() {
  const [telemetry, setTelemetry] = useState({
    altitude: 120.4,
    speed: 12.8,
    satellites: 21,
    heading: 0o42,
    batteryVolts: 22.4,
    batteryPercent: 94,
    signalDbm: -48,
    imuTemp: 34.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        altitude: parseFloat((120.0 + (Math.sin(Date.now() / 1500) * 0.8)).toFixed(1)),
        speed: parseFloat((12.5 + (Math.cos(Date.now() / 2000) * 0.5)).toFixed(1)),
        heading: Math.floor(40 + (Math.sin(Date.now() / 4000) * 5)),
        batteryVolts: parseFloat((22.4 - (Date.now() % 5000) * 0.00001).toFixed(2)),
      }));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="technical-hud-container" style={{ pointerEvents: 'none' }}>
      {/* Top Left Compass & Status Bar */}
      <div className="hud-widget hud-top-left">
        <div className="hud-line-header">
          <span className="hud-indicator active pulse"></span>
          <span className="hud-title">SYSTEM : AUTONOMOUS</span>
        </div>
        <div className="hud-metrics-row">
          <div className="hud-metric">
            <span className="hud-metric-label">STATUS</span>
            <span className="hud-metric-value text-red">MISSION READY</span>
          </div>
          <div className="hud-metric">
            <span className="hud-metric-label">VISION</span>
            <span className="hud-metric-value">AI ENABLED</span>
          </div>
          <div className="hud-metric">
            <span className="hud-metric-label">UAV CALLSIGN</span>
            <span className="hud-metric-value">IK-UAV-3.0</span>
          </div>
        </div>
      </div>

      {/* Top Right Primary Flight Telemetry */}
      <div className="hud-widget hud-top-right">
        <div className="hud-line-header" style={{ justifyContent: 'flex-end' }}>
          <span className="hud-title">TELEMETRY LINK // 915MHz</span>
          <span className="hud-indicator active"></span>
        </div>
        <div className="hud-metrics-grid">
          <div className="hud-metric-box">
            <span className="hud-metric-label">ALTITUDE</span>
            <span className="hud-metric-hero-val">{telemetry.altitude}<span className="unit">m</span></span>
          </div>
          <div className="hud-metric-box">
            <span className="hud-metric-label">AIRSPEED</span>
            <span className="hud-metric-hero-val">{telemetry.speed}<span className="unit">m/s</span></span>
          </div>
        </div>
      </div>

      {/* Bottom Left Sensor Fusion Matrix */}
      <div className="hud-widget hud-bottom-left">
        <div className="hud-line-header">
          <span className="hud-bracket">[</span>
          <span className="hud-title">SENSOR FUSION STREAM</span>
          <span className="hud-bracket">]</span>
        </div>
        <div className="hud-sensor-matrix">
          <div className="hud-sensor-item">
            <span className="sensor-name">LiDAR 3D:</span>
            <span className="sensor-val text-green">LOCK 25K/s</span>
          </div>
          <div className="hud-sensor-item">
            <span className="sensor-name">STEREO VIO:</span>
            <span className="sensor-val text-green">ONLINE</span>
          </div>
          <div className="hud-sensor-item">
            <span className="sensor-name">GNSS RTK:</span>
            <span className="sensor-val">{telemetry.satellites} SATS (FIX)</span>
          </div>
          <div className="hud-sensor-item">
            <span className="sensor-name">EDGE INFER:</span>
            <span className="sensor-val text-red">YOLOv8 FP16</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Power & Coordinates */}
      <div className="hud-widget hud-bottom-right">
        <div className="hud-power-status">
          <div className="hud-power-bar-wrap">
            <div className="hud-power-label">
              <span>6S LiPo BUS</span>
              <span className="text-red">{telemetry.batteryVolts}V ({telemetry.batteryPercent}%)</span>
            </div>
            <div className="hud-power-track">
              <div className="hud-power-fill" style={{ width: `${telemetry.batteryPercent}%` }}></div>
            </div>
          </div>
          <div className="hud-coords">
            <span>LAT 12.9249° N</span>
            <span className="hud-divider">|</span>
            <span>LON 80.0543° E</span>
          </div>
        </div>
      </div>

      {/* Target Aim Reticle in Center */}
      <div className="hud-center-crosshair">
        <div className="reticle-ring"></div>
        <div className="reticle-line reticle-h"></div>
        <div className="reticle-line reticle-v"></div>
        <div className="reticle-tag">PITCH: 0.0° // ROLL: +0.2°</div>
      </div>
    </div>
  );
}
