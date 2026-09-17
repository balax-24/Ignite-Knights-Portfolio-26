/**
 * IGNITE KNIGHTS 4.0 — DEVELOPMENT AIRCRAFT SPECIFICATION
 * 
 * CURRENT GENERATION: 4.0
 * 
 * CRITICAL RULE:
 * Do NOT invent unverified hardware specifications, flight numbers, or fabricated claims.
 * All fields use structured, editable placeholders ready for official 4.0 engineering data.
 */

export const aircraft = {
  generation: '4.0',
  badge: 'CURRENT GENERATION // 4.0',
  designation: 'IK-04',
  name: '[4.0 AIRCRAFT NAME]',
  type: 'Autonomous Multirotor Engineering UAV',
  status: 'IN DEVELOPMENT',
  phase: 'SYSTEM ARCHITECTURE & INTEGRATION',
  environment: 'GPS-Denied & Dynamic Aerodynamic Regimes',
  serial: 'IK-UAV-4.0-DEV-001',
  overview:
    'The 4.0 Development Aircraft represents our new generation autonomous aerial systems architecture. Engineered from the ground up for superior rigidity, heterogeneous edge acceleration, modular subsystem isolation, and high-precision sensor fusion.',
  
  // Subsystem Specifications (Modular & Editable)
  subsystems: {
    airframe: {
      name: 'AIRFRAME & COMPOSITES',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 AIRFRAME SPECIFICATION - TO BE UPDATED]',
      description:
        'Custom modular carbon composite airframe structure engineered for maximum torsional stiffness, motor vibration dampening, and rapid field deployment.',
      parameters: [
        { label: 'FRAME GEOMETRY', value: '[PENDING 4.0 RELEASE]' },
        { label: 'COMPOSITE WEAVE', value: '[TORAY 3K / MULTI-AXIAL]' },
        { label: 'ARM MOUNTING', value: '[CNC MACHINED MODULAR]' },
        { label: 'PAYLOAD BAY', value: '[QUICK-RELEASE MODULAR]' },
      ],
    },
    propulsion: {
      name: 'PROPULSION & AERODYNAMICS',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 PROPULSION SYSTEM - TO BE UPDATED]',
      description:
        'High-efficiency brushless outrunner propulsion matched with carbon-composite aerodynamics for high thrust-to-weight margins and dynamic wind resistance.',
      parameters: [
        { label: 'MOTOR ARCHITECTURE', value: '[HIGH-TORQUE BLDC]' },
        { label: 'PROPELLER GEOMETRY', value: '[AERODYNAMIC CARBON]' },
        { label: 'ESC PROTOCOL', value: '[DSHOT / TELEMETRY BUS]' },
        { label: 'THRUST MARGIN', value: '[TARGET SPECIFICATION PENDING]' },
      ],
    },
    compute: {
      name: 'MISSION COMPUTE & EDGE AI',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 ONBOARD MISSION COMPUTE - TO BE UPDATED]',
      description:
        'Heterogeneous embedded computing system handling real-time trajectory optimization, neural perception inference, and inter-process ROS2 node communication.',
      parameters: [
        { label: 'ACCELERATOR', value: '[EDGE AI SOC / ACCELERATOR]' },
        { label: 'INFERENCE STACK', value: '[TENSORRT / NEURAL ACCEL]' },
        { label: 'MIDDLEWARE', value: '[ROS2 / MICRO-XRCE]' },
        { label: 'POWER ISOLATION', value: '[GALVANIC ISOLATED BUS]' },
      ],
    },
    perception: {
      name: 'PERCEPTION & SPATIAL SENSING',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 SENSOR SUITE & PERCEPTION - TO BE UPDATED]',
      description:
        'Multi-sensor spatial perception stack integrating high-rate optical flow, laser ranging, and stereo visual-inertial odometry for GPS-denied state estimation.',
      parameters: [
        { label: 'PRIMARY SENSOR', value: '[3D SPATIAL SENSING]' },
        { label: 'ODOMETRY', value: '[STEREO VIO / OPTICAL FLOW]' },
        { label: 'RANGEFINDER', value: '[PRECISION LASER ALTIMETRY]' },
        { label: 'GNSS DUAL-ANTENNA', value: '[RTK-CAPABLE SYSTEM]' },
      ],
    },
    control: {
      name: 'FLIGHT CONTROL & AUTONOMY',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 FLIGHT CONTROL & AUTONOMY - TO BE UPDATED]',
      description:
        'Deterministic low-level attitude state machine with fault-tolerant sensor bus redundancy, real-time geofencing, and automated return-to-home algorithms.',
      parameters: [
        { label: 'AUTONOMY ENGINE', value: '[AUTONOMOUS FLIGHT STACK]' },
        { label: 'IMU REDUNDANCY', value: '[DUAL/TRIPLE ISOLATED IMU]' },
        { label: 'FAIL-SAFE LOGIC', value: '[HARDWARE LEVEL GEO-RTH]' },
        { label: 'CONTROL LOOP RATE', value: '[HIGH-RATE ATTITUDE LOOP]' },
      ],
    },
    power: {
      name: 'POWER DISTRIBUTION & ENERGY',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 POWER & ENERGY STORAGE - TO BE UPDATED]',
      description:
        'High-density energy storage bus with active current monitoring, transient voltage suppression, and clean buck-boost avionics rails.',
      parameters: [
        { label: 'BATTERY CHEMISTRY', value: '[HIGH-DISCHARGE LIPO]' },
        { label: 'BUS DISTRIBUTION', value: '[CUSTOM COPPER PDB]' },
        { label: 'SENSING & BMS', value: '[CURRENT & VOLTAGE TELEMETRY]' },
        { label: 'RAIL REGULATION', value: '[FILTERED 5V / 12V RAILS]' },
      ],
    },
    communication: {
      name: 'TELEMETRY & RF LINK',
      status: 'IN DEVELOPMENT',
      spec: '[4.0 TELEMETRY & RF LINK - TO BE UPDATED]',
      description:
        'Encrypted long-range telemetry link delivering bidirectional MAVLink packets and low-latency digital video downlinks to the ground control station.',
      parameters: [
        { label: 'DATA TELEMETRY', value: '[LONG-RANGE FHSS LINK]' },
        { label: 'PROTOCOL', value: '[MAVLINK 2.0 ENCRYPTED]' },
        { label: 'GROUND STATION', value: '[CUSTOM MISSION GCS]' },
        { label: 'ANTENNA ARRAY', value: '[CIRCULARLY POLARIZED]' },
      ],
    },
  },

  // Interactive 3D Hotspot Targets
  hotspots: [
    {
      id: 'flight-control',
      title: 'FLIGHT CONTROL',
      position: [0, 0.28, 0],
      system: 'Autonomy & Attitude Stabilization',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 REDUNDANT AUTOPILOT - TO BE UPDATED]',
      description:
        'Core flight computer running deterministic attitude control, sensor fusion EKF, and autonomous waypoint sequencing.',
    },
    {
      id: 'compute',
      title: 'MISSION COMPUTE',
      position: [0, 0.12, -0.3],
      system: 'Onboard Edge AI Processing',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 EMBEDDED ACCELERATOR - TO BE UPDATED]',
      description:
        'Dedicated embedded computing module executing real-time spatial neural networks, SLAM mapping, and path generation.',
    },
    {
      id: 'perception',
      title: 'PERCEPTION SUITE',
      position: [0, -0.15, 0.7],
      system: 'Multi-Modal Spatial Sensing',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 VISION & RANGE SUITE - TO BE UPDATED]',
      description:
        'Gimbal-stabilized optical sensors, stereo vision odometry, and high-frequency laser range scanners for obstacle detection.',
    },
    {
      id: 'propulsion',
      title: 'PROPULSION',
      position: [1.15, 0.15, -1.15],
      system: 'BLDC Motors & Carbon Props',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 HIGH-TORQUE PROPULSION - TO BE UPDATED]',
      description:
        'High-efficiency outrunner brushless motors with dynamic response matching and balanced composite aerodynamic blades.',
    },
    {
      id: 'power',
      title: 'POWER BUS',
      position: [0, -0.38, 0],
      system: 'Energy Storage & Regulation',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 HIGH-CURRENT POWER HARNESS - TO BE UPDATED]',
      description:
        'Low-center-of-gravity battery enclosure with transient filtration and isolated digital power planes.',
    },
    {
      id: 'communication',
      title: 'COMMUNICATION',
      position: [-0.4, 0.65, -0.4],
      system: 'Long-Range RF Telemetry & GPS',
      specPlaceholder: '[CURRENT SYSTEM : 4.0 DUAL-BAND RF & RTK GNSS - TO BE UPDATED]',
      description:
        'Precision multi-constellation RTK GNSS receiver mast and encrypted telemetry transceiver for mission synchronization.',
    },
  ],
};
