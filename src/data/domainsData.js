export const technicalDomains = [
  {
    id: 'ai-cv',
    number: '01',
    title: 'AI & COMPUTER VISION',
    tagline: 'Edge Perception & Cognitive Awareness',
    techStack: ['YOLO', 'Object Detection', 'CUDA', 'TensorRT'],
    description:
      'High-throughput deep neural networks running on embedded accelerators for real-time aerial object classification, tracking, and spatial target bounding.',
    telemetry: 'LATENCY < 14ms // CUDA FP16 // MODEL v8.4',
    specs: [
      { label: 'Inference Rate', value: '62 FPS' },
      { label: 'Precision', value: 'mAP@0.5: 94.2%' },
      { label: 'Architecture', value: 'TensorRT Engine' },
    ],
  },
  {
    id: 'autonomous-systems',
    number: '02',
    title: 'AUTONOMOUS SYSTEMS',
    tagline: 'GPS-Denied State Estimation & Navigation',
    techStack: ['SLAM', 'Path Planning', 'VIO'],
    description:
      'Robust visual-inertial odometry and 3D occupancy grid mapping allowing accurate localization and obstacle-free trajectory optimization in unstructured environments.',
    telemetry: 'SLAM DRIFT < 0.8% // D* LITE PLANNER',
    specs: [
      { label: 'Localization', value: 'Stereo VIO' },
      { label: 'Re-planning', value: '50 Hz Loop' },
      { label: 'Fail-safe', value: 'Geofenced RTH' },
    ],
  },
  {
    id: 'flight-control',
    number: '03',
    title: 'FLIGHT & CONTROL',
    tagline: 'High-Rate Attitude Dynamics & Aerodynamics',
    techStack: ['MAVROS', 'MAVSDK', 'Flight Controller'],
    description:
      'Low-level custom PID/LQR attitude controllers interfacing via MAVLink telemetry protocol to command high-dynamic aerial maneuvers with sub-centimeter waypoint hold.',
    telemetry: 'ATTITUDE FREQ 400Hz // EKF3 EXTENDED',
    specs: [
      { label: 'Telemetry', value: 'MAVLink 2.0' },
      { label: 'Response', value: '18ms Angular' },
      { label: 'Hold Drift', value: '±2.5 cm' },
    ],
  },
  {
    id: 'perception',
    number: '04',
    title: 'PERCEPTION',
    tagline: 'Multi-Modal Spatial Environmental Sensing',
    techStack: ['LiDAR', 'Optical Flow', 'Range Finder'],
    description:
      'Active laser range scanning fused with downward optical flow velocimetry for precision low-altitude ground tracking and 360-degree point cloud obstacle barriers.',
    telemetry: 'FOV 360° // SAMPLES 25K/s // RANGE 40M',
    specs: [
      { label: 'Scanner', value: 'Solid-State LiDAR' },
      { label: 'Floor Lock', value: 'PMW3901 Flow' },
      { label: 'Precision', value: '1 mm Laser' },
    ],
  },
  {
    id: 'embedded-systems',
    number: '05',
    title: 'EMBEDDED SYSTEMS',
    tagline: 'Heterogeneous Mission Compute Hardware',
    techStack: ['Jetson', 'Python', 'Sensors'],
    description:
      'Onboard NVIDIA Jetson compute modules with custom carrier isolation, regulated 24V power filtration, and deterministic Linux kernels running ROS2 middleware nodes.',
    telemetry: 'COMPUTE 40 TOPS // BUS CAN 2.0B // LINUX RT',
    specs: [
      { label: 'Compute Core', value: 'NVIDIA Jetson' },
      { label: 'Bus Speed', value: '1 Mbps CAN' },
      { label: 'Isolation', value: 'Optocoupled I/O' },
    ],
  },
  {
    id: 'aerial-systems',
    number: '06',
    title: 'AERIAL SYSTEMS',
    tagline: 'Structural Carbon Composites & Aero Design',
    techStack: ['Drone Architecture', 'Integration', 'Testing'],
    description:
      'Ultra-rigid Toray 3K carbon-fiber frames engineered with high strength-to-weight ratios, custom CNC anodized 7075 aluminum motor brackets, and vibration-damped payload bays.',
    telemetry: 'FRAME 3K WEAVE // T/W RATIO 3.8:1 // MTBF > 150H',
    specs: [
      { label: 'Material', value: '3K Toray Carbon' },
      { label: 'Thrust Ratio', value: '3.8 : 1' },
      { label: 'Max Payload', value: '3.2 kg' },
    ],
  },
];
