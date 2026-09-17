import React, { useState, useEffect } from 'react';

export function SystemLoader({ onComplete }) {
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const logs = [
    { label: 'SYSTEM INITIALIZATION', status: 'INIT', speed: 250 },
    { label: '3D FLIGHT SYSTEM', status: 'READY', speed: 300 },
    { label: 'VISION SYSTEM', status: 'READY', speed: 300 },
    { label: 'AUTONOMY STACK', status: 'READY', speed: 280 },
    { label: 'MISSION STATUS', status: 'ONLINE', speed: 350 },
  ];

  useEffect(() => {
    if (step < logs.length) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, logs[step].speed);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }, 400);
      return () => clearTimeout(endTimer);
    }
  }, [step]);

  return (
    <div className={`system-loader-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-box corner-bracket-box">
        <div className="loader-header">
          <div className="flex items-center gap-2">
            <span className="status-dot active pulse"></span>
            <span className="tech-label tech-label-red">IGNITE KNIGHTS 3.0</span>
          </div>
          <span className="tech-label">BOOT v3.4</span>
        </div>

        <div className="loader-terminal">
          {logs.slice(0, step + 1).map((log, index) => (
            <div
              key={index}
              className={`terminal-line ${index === step ? 'current' : 'done'}`}
            >
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text">{log.label}</span>
              <span className="terminal-dots">................</span>
              <span
                className={`terminal-status ${
                  log.status === 'ONLINE'
                    ? 'status-online'
                    : log.status === 'READY'
                    ? 'status-ready'
                    : 'status-init'
                }`}
              >
                [{log.status}]
              </span>
            </div>
          ))}
        </div>

        <div className="loader-progress-track">
          <div
            className="loader-progress-bar"
            style={{ width: `${Math.min(100, (step / logs.length) * 100)}%` }}
          ></div>
        </div>

        <div className="loader-footer">
          <span className="tech-label">STANDBY FOR MISSION ENVIRONMENT</span>
          <span className="tech-label tech-label-red">100% SECURE</span>
        </div>
      </div>
    </div>
  );
}
