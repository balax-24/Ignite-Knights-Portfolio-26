export const competitionsData = [
  {
    id: 'nidar-2026',
    name: 'NIDAR 2026',
    badge: 'FLAGSHIP CHALLENGE',
    type: 'Autonomous Drone Challenge',
    status: 'CURRENTLY PARTICIPATING',
    statusCode: 'ACTIVE',
    objective:
      'Develop an autonomous drone capable of completing the given mission in an unknown, GPS-degraded arena.',
    challenge:
      'Navigate the complex environment, detect required operational markers/elements in real time, and execute mission objectives accurately without manual pilot intervention.',
    ourApproach:
      'Combining autonomous navigation, computer vision, and onboard processing via NVIDIA Jetson edge computing with custom MAVROS flight loops.',
    technologies: ['YOLO', 'SLAM', 'LiDAR', 'Jetson', 'MAVROS'],
    currentPreparation:
      'System development, hardware-in-the-loop (HIL) integration, and live flight testing are actively in progress at the testing range.',
    telemetryData: {
      missionClass: 'Full Autonomous Level 4',
      primarySensor: '3D Solid-State LiDAR + Stereo VIO',
      processor: 'NVIDIA Jetson Accelerator',
      commsLink: '915MHz Telemetry + 5.8GHz Low-Latency HD',
      targetAccuracy: '< 15cm Target Drop / Landmark Lock',
    },
    phases: [
      { step: 'Phase 1', name: 'Simulation & Architecture Design', state: 'COMPLETED' },
      { step: 'Phase 2', name: 'Airframe Fabrication & Hardware Mounting', state: 'COMPLETED' },
      { step: 'Phase 3', name: 'Perception Pipeline & Edge Training', state: 'IN PROGRESS' },
      { step: 'Phase 4', name: 'Field Trials & Autonomous Arena Runs', state: 'ACTIVE' },
    ],
  },
  {
    id: 'aerathon-2026',
    name: 'AERATHON 2026',
    badge: 'ENDURANCE & AGILITY',
    type: 'Aerial Systems Challenge',
    status: 'PREPARING',
    statusCode: 'STANDBY',
    objective:
      'Develop and demonstrate a high-reliability drone system tailored for rigorous competition operational requirements.',
    challenge:
      'Complete assigned aerial tasks with pinpoint accuracy, flight stability under wind turbulence, and maximum operational uptime.',
    ourApproach:
      'Working on balanced high-efficiency propulsion geometry, low-resistance carbon composite frame layout, and precision PID attitude tuning.',
    technologies: ['High-Torque BLDC', 'Carbon Composite Arms', 'MAVSDK', 'Telemetry Link'],
    currentProgress:
      'Prototype development and testing are in progress in the engineering workshop.',
    telemetryData: {
      missionClass: 'Dynamic High-Payload Flight',
      primarySensor: 'Optical Flow + Laser Altimeter',
      processor: 'STM32F7 Dual Core Flight Stack',
      commsLink: 'Encrypted Dual-Band Radio',
      targetAccuracy: 'Sub-second Response Rate',
    },
    phases: [
      { step: 'Phase 1', name: 'Task Requirement Breakdown', state: 'COMPLETED' },
      { step: 'Phase 2', name: 'Aerodynamic Modeling & CAD in SolidWorks', state: 'COMPLETED' },
      { step: 'Phase 3', name: 'Prototype Assembly & Bench Testing', state: 'IN PROGRESS' },
      { step: 'Phase 4', name: 'Mission Simulation Trials', state: 'UPCOMING' },
    ],
  },
  {
    id: 'addc-2026',
    name: 'SAE ADDC 2026',
    badge: 'AEROSPACE ARENA',
    type: 'Aerospace Drone Design Challenge',
    status: 'IN PREPARATION',
    statusCode: 'STANDBY',
    objective:
      'Build an exceptional competition-spec drone platform to meet and exceed national SAE ADDC mission guidelines.',
    challenge:
      'Complete complex assigned payloads and multi-waypoint navigation while maintaining stable, highly repeatable, and reliable flight.',
    ourApproach:
      'Developing and testing modular drone systems, drawing on our top 10 national ranking at SAE ADDC 2025 to engineer a podium-level platform.',
    technologies: ['SolidWorks CAD', 'ANSYS Simulation', 'Altair Aero Optimization', 'Custom Avionics'],
    currentProgress:
      'Preparation, structural FEA analysis, and subsystem design are underway.',
    telemetryData: {
      missionClass: 'National Collegiate Championship',
      primarySensor: 'Dual IMU + RTK Precision GNSS',
      processor: 'Heterogeneous Dual Controller Bus',
      commsLink: 'Long-Range Redundant RF',
      targetAccuracy: 'Podium Finish Objective',
    },
    phases: [
      { step: 'Phase 1', name: 'Design Verification & Regulations Audit', state: 'COMPLETED' },
      { step: 'Phase 2', name: 'CFD & Structural Simulation in ANSYS', state: 'IN PROGRESS' },
      { step: 'Phase 3', name: 'Subsystem Machining & Assembly', state: 'UPCOMING' },
      { step: 'Phase 4', name: 'Autonomous Circuit Certification', state: 'UPCOMING' },
    ],
  },
];
