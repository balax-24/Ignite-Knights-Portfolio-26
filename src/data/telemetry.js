/**
 * IGNITE KNIGHTS 4.0 — DEVELOPMENT TELEMETRY DATA
 * 
 * CURRENT GENERATION: 4.0
 * 
 * CRITICAL RULE:
 * This represents UI development and system integration states, NOT fabricated flight claims.
 * Editable for changing operational test modes.
 */

export const telemetryData4 = {
  aircraft: 'IK-04',
  generation: '4.0',
  status: 'DEVELOPMENT',
  mode: 'SYSTEM INTEGRATION',
  flightState: 'STANDBY',
  firmwareVersion: 'v4.0.1-DEV',
  telemetryLink: 'BENCH HARNESS // 915MHz STANDBY',
  gpsFix: 'BENCH LOCK (14 SATS)',
  busVoltage: '24.0V BUS REGULATED',
  avionicsTemp: '28.4°C STABLE',
  autonomyMode: 'ARCHITECTURE REFINEMENT',
  attitudeHeading: 'HDG 042° // LEVEL',
  rfProtocol: 'MAVLINK 2.0 // ISOLATED',
  activeNodes: [
    { name: 'ATTITUDE_STATE_MACHINE', state: 'ONLINE', statusColor: 'green' },
    { name: 'EDGE_INFERENCE_PIPELINE', state: 'INITIALIZING', statusColor: 'red' },
    { name: 'SPATIAL_ODOMETRY_FUSION', state: 'BENCH_CALIB', statusColor: 'red' },
    { name: 'SAFETY_GEOFENCE_ENGINE', state: 'ARMED', statusColor: 'green' },
  ],
};
