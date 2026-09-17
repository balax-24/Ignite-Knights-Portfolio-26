/**
 * IGNITE KNIGHTS 4.0 — MISSIONS & OPERATIONAL CHALLENGES
 * 
 * CURRENT GENERATION: 4.0
 * 
 * CRITICAL RULE:
 * Historical competitions from 3.0 (NIDAR 2026, AERATHON 2026, SAE ADDC 2025/2026)
 * belong strictly in the archive.
 * For 4.0, we provide structured, editable mission slots reflecting active development.
 * Do NOT invent fake competition names, awards, or rankings.
 */

export const missionsMeta = {
  generation: '4.0',
  title: 'CURRENT MISSIONS',
  subtitle: 'MISSIONS BEING PREPARED',
  description:
    'Ignite Knights 4.0 is architecting new autonomous aerial missions for the upcoming collegiate and industry flight challenges. The following mission slots represent active operational targets currently moving through our engineering pipeline.',
  statusNotice: 'ALL 4.0 MISSIONS ARE CURRENTLY IN ACTIVE SPECIFICATION & PLANNING',
};

export const missionsData = [
  {
    id: 'mission-01',
    code: 'IK4-MSN-01',
    name: '[4.0 MISSION 01 — IN PLANNING]',
    year: '2026',
    status: 'PLANNING',
    category: 'Autonomous Arena Navigation',
    objective: '[MISSION OBJECTIVE SPECIFICATION IN PREPARATION]',
    challenge:
      'Autonomous spatial navigation in complex, GPS-degraded indoor/outdoor flight volumes requiring deterministic state estimation and continuous obstacle avoidance.',
    systemRequirements: [
      'Edge neural perception with real-time bounding and tracking',
      'Non-GPS odometry (Stereo VIO / Optical Flow / Laser Ranging)',
      'Deterministic fail-safe return and emergency holding patterns',
      'Target precision waypoint accuracy',
    ],
    technologies: ['ROS2 Humble', 'MAVLink', 'TensorRT', 'VIO Odometry', 'Carbon Composite Airframe'],
    pipelineStage: 'STAGE 1: REQUIREMENT DECOMPOSITION & SIMULATION ARCHITECTURE',
    telemetryData: {
      flightEnvironment: 'GPS-Degraded / Obstructed Arena',
      autonomyTarget: 'Full Autonomous Waypoint & Search',
      status: 'PLANNING',
      releaseState: 'SPECIFICATION PENDING',
    },
  },
  {
    id: 'mission-02',
    code: 'IK4-MSN-02',
    name: '[4.0 MISSION 02 — SPECIFICATION PENDING]',
    year: '2026',
    status: 'DESIGN',
    category: 'Precision Delivery & Payload Dynamics',
    objective: '[PAYLOAD & DISPATCH OBJECTIVE TO BE UPDATED]',
    challenge:
      'High-speed aerial approach, stabilization over dynamic release targets, and automated mechanism trigger without destabilizing flight attitudes.',
    systemRequirements: [
      'Fast-response electronic payload release mechanism',
      'Dynamic center-of-gravity compensation in flight controller',
      'Real-time optical target centering via downward gimbal camera',
      'High-speed telemetry downlink to Ground Control Station',
    ],
    technologies: ['Custom Mechanism CAD', 'ANSYS CFD', 'Downward Optical Tracker', 'MAVSDK'],
    pipelineStage: 'STAGE 2: CAD MODELING & MECHANISM PROTOTYPING',
    telemetryData: {
      flightEnvironment: 'Open Airfield / Dynamic Crosswinds',
      autonomyTarget: 'Precision Release & Recovery',
      status: 'DESIGN',
      releaseState: 'SPECIFICATION PENDING',
    },
  },
  {
    id: 'mission-03',
    code: 'IK4-MSN-03',
    name: '[4.0 MISSION 03 — EVALUATION PHASE]',
    year: '2026',
    status: 'PLANNING',
    category: 'High-Endurance Multi-Sensor Mapping',
    objective: '[SPATIAL SURVEY & ENDURANCE OBJECTIVE TO BE UPDATED]',
    challenge:
      'Extended flight duration under continuous multi-sensor power draw while collecting and streaming synchronized high-density spatial point clouds.',
    systemRequirements: [
      'High-efficiency propulsion optimization for maximum flight time',
      'Solid-state point cloud sensor integration and timestamp syncing',
      'Telemetry bandwidth optimization for live data packet streaming',
      'Thermal dissipation management for embedded compute bay',
    ],
    technologies: ['Solid-State LiDAR', 'High-Efficiency BLDC', 'Thermal Modeling', 'Point Cloud Streaming'],
    pipelineStage: 'STAGE 1: POWERTRAIN EFFICIENCY AUDIT',
    telemetryData: {
      flightEnvironment: 'Wide-Area Survey Grid',
      autonomyTarget: 'Autonomous Survey & Telemetry',
      status: 'PLANNING',
      releaseState: 'SPECIFICATION PENDING',
    },
  },
];
