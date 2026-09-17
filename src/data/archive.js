/**
 * IGNITE KNIGHTS 3.0 — HISTORICAL ARCHIVE DATA (2024 — 2026)
 * 
 * CRITICAL ARCHIVAL NOTICE:
 * All data in this file represents the PREVIOUS GENERATION (Ignite Knights 3.0).
 * It is preserved strictly for historical record, legacy attribution, and portfolio archives.
 * It must NEVER be presented as current 4.0 information.
 */

export const archiveGenerationInfo = {
  generation: '3.0',
  label: 'PREVIOUS GENERATION',
  tenure: '2024 — 2026',
  title: 'IGNITE KNIGHTS 3.0 ARCHIVE',
  description:
    'Ignite Knights 3.0 was the founding and expansion era of our autonomous aerial systems team. Operating from 2024 through early 2026, the 3.0 cohort built our first heavy-lift hexacopter, engineered an advanced competition quadcopter, secured a Top 10 national ranking at SAE ADDC 2025, and established partnerships with 9 premier industry technology sponsors.',
  legacySlogan: 'Engineering the sky. Building beyond limits.',
};

// 3.0 Aircraft Fleet (Historical)
export const archive3Aircraft = [
  {
    id: 'ik-3-quadcopter',
    name: 'IK-3.0 Competition Quadcopter',
    generation: '3.0',
    type: 'Autonomous Competition Drone',
    year: '2025',
    status: 'DECOMMISSIONED / ARCHIVED',
    description:
      'Engineered for high-agility autonomous arena missions and SAE ADDC 2025 competition flight tasks.',
    specs: [
      { label: 'Airframe', value: '3K Carbon Fiber Monocoque' },
      { label: 'Propulsion', value: 'High-Torque Brushless DC Motors' },
      { label: 'Compute', value: 'NVIDIA Jetson Edge AI Module' },
      { label: 'Perception', value: 'Solid-State LiDAR + Stereo VIO' },
      { label: 'Autonomy', value: 'MAVROS / ROS2 Flight Stack' },
      { label: 'Power', value: '6S High-Discharge LiPo Bus' },
    ],
    highlight: 'Secured Top 10 National Finish at SAE ADDC 2025',
    image: '/assets/drone-hero.jpg',
  },
  {
    id: 'ik-3-hexacopter',
    name: 'IK-3.0 Heavy-Lift Hexacopter',
    generation: '3.0',
    type: 'Heavy Payload Aerial Platform',
    year: '2024',
    status: 'DECOMMISSIONED / ARCHIVED',
    description:
      'The inaugural heavy-lift platform built in 2024 marking the foundation of Ignite Knights and our SAE India debut.',
    specs: [
      { label: 'Airframe', value: 'Radial 6-Arm Carbon Composite' },
      { label: 'Configuration', value: 'Hexarotor Coaxial Lift' },
      { label: 'Payload Capacity', value: 'High-Payload Arena Drop' },
      { label: 'Debut Event', value: 'SAE India 2024 National Arena' },
    ],
    highlight: 'Founding platform of Ignite Knights aerial robotics',
    image: '/team/drone-hero.jpg',
  },
];

// 3.0 Key Achievements (Historical)
export const archive3Achievements = [
  {
    year: '2025',
    event: 'SAE ADDC 2025',
    title: 'Top 10 National Ranking',
    description:
      'Secured a top 10 national position among collegiate aerospace teams across India with our custom-engineered autonomous quadcopter.',
    badge: 'TOP 10 FINISH',
  },
  {
    year: '2024',
    event: 'SAE India 2024',
    title: 'National Competition Debut',
    description:
      'Engineered our first heavy-lift hexacopter airframe and debuted in the national arena, proving interdisciplinary telemetry and flight capability.',
    badge: 'FOUNDATION DEBUT',
  },
  {
    year: '2024–2026',
    event: 'Industry Sponsorships',
    title: '9 Premier Technology Partnerships',
    description:
      'Secured engineering software licenses from industry leaders including MATLAB, Altair, Siemens, Altium, ANSYS, SolidWorks, Mastercam, and Onshape.',
    badge: 'INDUSTRY BACKED',
  },
];

// 3.0 Historical Competition Campaigns
export const archive3Competitions = [
  {
    id: 'addc-2025',
    name: 'SAE ADDC 2025',
    generation: '3.0',
    status: 'COMPLETED // TOP 10 RANKING',
    objective: 'Autonomous payload drop, precise waypoint navigation, and aerial target acquisition.',
    achievement: 'Ranked in the Top 10 nationally among engineering colleges across India.',
    technologies: ['Autonomous Waypoints', 'Computer Vision Lock', 'SolidWorks CAD', 'ANSYS CFD'],
  },
  {
    id: 'nidar-2026',
    name: 'NIDAR 2026 (3.0 Campaign)',
    generation: '3.0',
    status: '3.0 PARTICIPATION CAMPAIGN',
    objective: 'Autonomous drone flight challenge in unknown GPS-degraded arena.',
    approach: 'NVIDIA Jetson edge computing, YOLO perception, and MAVROS flight loops.',
    technologies: ['YOLOv8', 'SLAM', 'LiDAR', 'Jetson Orin', 'MAVROS'],
  },
  {
    id: 'aerathon-2026',
    name: 'AERATHON 2026 (3.0 Campaign)',
    generation: '3.0',
    status: '3.0 PARTICIPATION CAMPAIGN',
    objective: 'High-reliability endurance and precision flight demonstration.',
    approach: 'High-torque BLDC propulsion and low-drag composite arm optimization.',
    technologies: ['BLDC Propulsion', 'Composite Arms', 'MAVSDK', 'Encrypted RF'],
  },
  {
    id: 'addc-2026',
    name: 'SAE ADDC 2026 (3.0 Prep)',
    generation: '3.0',
    status: '3.0 INITIAL PREPARATION',
    objective: 'Next-stage competition spec drone development building on 2025 Top 10 finish.',
    approach: 'FEA analysis in ANSYS and modular avionics bus.',
    technologies: ['SolidWorks', 'ANSYS Simulation', 'Altair Aero', 'Dual IMU'],
  },
];

// 3.0 Historical Team Roster (Core Members, Mentors, Trainees)
export const archive3TeamMembers = [
  {
    id: 'mithra-niranjan',
    name: 'Mithra Niranjan P',
    role: 'Team Lead (3.0)',
    department: 'Electronics & Communication (ECE)',
    domain: 'ELECTRONICS & AVIONICS',
    photo: '/team/Mithran.jpg',
    callSign: 'IK-3.0-LEAD-01',
    bio: 'Directed overall flight operations, avionics architecture, and interdisciplinary system synchronization for Ignite Knights 3.0.',
  },
  {
    id: 'rakshanasri',
    name: 'Rakshanasri E',
    role: 'Co-Lead / Project Manager (3.0)',
    department: 'Computer Science (CSE)',
    domain: 'OPERATIONS & SOFTWARE',
    photo: '/team/Rakshana.jpg',
    callSign: 'IK-3.0-LEAD-02',
    bio: 'Managed engineering timelines, milestone delivery, operational logistics, and multidisciplinary coordination.',
  },
  {
    id: 'dhiraj-js',
    name: 'Dhiraj J S',
    role: 'Co-Lead / Avionics Lead (3.0)',
    department: 'Electronics & Communication (ECE)',
    domain: 'AVIONICS & POWER',
    photo: '/team/Dhiraj.jpg',
    callSign: 'IK-3.0-CORE-03',
    bio: 'Architected electrical power distribution, RF communication links, and sensor bus isolation.',
  },
  {
    id: 'shakthivel-tv',
    name: 'Shakthivel T V',
    role: 'Co-Lead / Mechanical Lead (3.0)',
    department: 'Mechanical Engineering (MECH)',
    domain: 'AIRFRAME & COMPOSITES',
    photo: '/team/Sakthivel.jpg',
    callSign: 'IK-3.0-CORE-04',
    bio: 'Spearheaded carbon composite airframe design, structural load analysis, and aerodynamic optimization.',
  },
  {
    id: 'balaharish-s',
    name: 'Balaharish S',
    role: 'Software & AI Engineer (3.0)',
    department: 'Computer Science (CSE)',
    domain: 'EDGE AI & ROS2',
    photo: '/team/Balaharish.png',
    callSign: 'IK-3.0-DEV-05',
    bio: 'Developed deep learning perception models, TensorRT acceleration pipelines, and target recognition systems.',
  },
  {
    id: 'harshadnarayana',
    name: 'Harshadnarayana',
    role: 'Software Engineer (3.0)',
    department: 'Computer Science (CSE)',
    domain: 'AUTONOMY & GCS',
    photo: '/team/Harshad.jpg',
    callSign: 'IK-3.0-DEV-06',
    bio: 'Designed autonomous waypoint traversal algorithms, fail-safe state machines, and ground control interfaces.',
  },
  {
    id: 'rithika-a',
    name: 'Rithika A',
    role: 'AI & Data Science Engineer (3.0)',
    department: 'AI & Data Science (AI DS)',
    domain: 'COMPUTER VISION',
    photo: null,
    callSign: 'IK-3.0-DEV-07',
    bio: 'Specialized in computer vision datasets, camera calibration, and multi-class aerial object classification.',
  },
  {
    id: 'vishnu-priya',
    name: 'Vishnu Priya',
    role: 'Electrical Engineer (3.0)',
    department: 'Electrical & Electronics (EEE)',
    domain: 'POWER SYSTEMS',
    photo: '/team/Priya.jpg',
    callSign: 'IK-3.0-ENG-08',
    bio: 'Engineered high-voltage LiPo power harnesses, continuous current load distribution, and thermal dissipation.',
  },
  {
    id: 'vishwalingam',
    name: 'Vishwalingam',
    role: 'Mechanical Engineer (3.0)',
    department: 'Mechanical Engineering (MECH)',
    domain: 'CNC & PAYLOAD',
    photo: '/team/Vishwalingam.jpg',
    callSign: 'IK-3.0-ENG-09',
    bio: 'Designed custom CNC motor brackets, quick-release payload mechanisms, and ruggedized mountings.',
  },
  {
    id: 'hemanth-m',
    name: 'Hemanth M',
    role: 'Mechanical Engineer (3.0)',
    department: 'Mechanical Engineering (MECH)',
    domain: 'CFD & LANDING GEAR',
    photo: '/team/Hemanth.jpg',
    callSign: 'IK-3.0-ENG-10',
    bio: 'Specialized in computational fluid dynamics (CFD) simulation, structural stress modeling, and landing gear testing.',
  },
  {
    id: 'prameksha-u',
    name: 'Prameksha U',
    role: 'Electrical & Embedded Engineer (3.0)',
    department: 'Electronics & Communication (ECE)',
    domain: 'FIRMWARE & BUSES',
    photo: '/team/Prameksha.jpg',
    callSign: 'IK-3.0-ENG-11',
    bio: 'Implemented low-latency microcontroller firmware, sensor hardware interfacing, and real-time avionics debugging.',
  },
];

export const archive3Mentors = [
  {
    id: 'dr-s-murali',
    name: 'Dr. S. Murali',
    role: 'Faculty Advisor (3.0)',
    title: 'Head of Department, Mechanical Engineering',
    organization: 'Sairam Institution',
    badge: 'FACULTY ADVISOR',
    photo: null,
    bio: 'Provided institutional mentorship, aerospace engineering counsel, and technical oversight across 3.0 campaigns.',
  },
  {
    id: 'nithish-ranjith',
    name: 'Nithish Ranjith N',
    role: 'Technical Mentor (3.0)',
    title: 'Former Captain, Ignite Knights',
    organization: 'AI & Data Science Alumnus',
    badge: 'ALUMNI MENTOR',
    photo: null,
    bio: 'Mentored the 3.0 cohort on competition flight strategy, autonomous flight loops, and flight test safety.',
  },
  {
    id: 'nivetha-ruvah',
    name: 'Nivetha Ruvah D',
    role: 'Technical Mentor (3.0)',
    title: 'Former Core Member',
    organization: 'Information Technology',
    badge: 'ALUMNI MENTOR',
    photo: '/team/Nivetha.jpg',
    bio: 'Guided avionics verification, telemetry reliability, and organizational knowledge transfer.',
  },
];

export const archive3Trainees = [
  { name: 'Charumathi S', dept: 'Mechanical Engineering', role: 'Aerodynamics Trainee (3.0)', photo: '/team/Charumathi.jpg' },
  { name: 'Mithun', dept: 'Internet of Things (IOT)', role: 'Sensor Fusion Trainee (3.0)', photo: '/team/mithun.jpg' },
  { name: 'Varshni', dept: 'Information Technology', role: 'Software Trainee (3.0)', photo: '/team/Varshini.jpg' },
  { name: 'Hemna Gangadaran', dept: 'Electronics & Communication', role: 'Avionics Trainee (3.0)', photo: '/team/Hemna.jpg' },
  { name: 'Vishnu Sri', dept: 'Aerospace Systems', role: 'Flight Systems Trainee (3.0)', photo: '/team/Vishnusri.jpg' },
];

// 3.0 Historical Technology Sponsors (9 Partners)
export const archive3Sponsors = [
  {
    name: 'MATLAB',
    category: 'Computation & Numerical Modeling',
    description: 'Mathematical modeling of UAV flight dynamics and sensor filtering algorithms.',
    logo: '/sponsors/Mathworks.png',
  },
  {
    name: 'Altair Suite',
    category: 'Multiphysics Engineering Simulation',
    description: 'Structural topology optimization and aerodynamic stress analysis of composite arms.',
    logo: '/sponsors/altair.png',
  },
  {
    name: 'Siemens Software',
    category: 'Industrial Design & Automation',
    description: 'Multi-disciplinary systems engineering and digital twin component modeling.',
    logo: '/sponsors/siemens.png',
  },
  {
    name: 'Altium Designer',
    category: 'Avionics & PCB Design',
    description: 'High-speed PCB routing for power distribution boards and sensor breakout avionics.',
    logo: '/sponsors/altium.png',
  },
  {
    name: 'RoadRunner',
    category: '3D Simulation & Scene Synthesis',
    description: 'High-fidelity 3D arena scene generation for virtual sensor flight simulation.',
    logo: '/sponsors/Mathworks.png',
  },
  {
    name: 'ANSYS',
    category: 'Computational Fluid Dynamics (CFD)',
    description: 'Propeller wash simulation, drag coefficient analysis, and thermal dissipation modeling.',
    logo: '/sponsors/ansys.png',
  },
  {
    name: 'SolidWorks',
    category: '3D CAD & Assemblies',
    description: 'Core mechanical airframe modeling, CNC bracket designs, and structural assemblies.',
    logo: '/sponsors/solid.png',
  },
  {
    name: 'Mastercam',
    category: 'CAM & CNC Toolpaths',
    description: 'Precision milling G-code generation for 7075 aluminum motor mounts and arm clamps.',
    logo: '/sponsors/mastercam.png',
  },
  {
    name: 'Onshape',
    category: 'Cloud-Native CAD Collaboration',
    description: 'Simultaneous multi-engineer airframe CAD collaboration and version control.',
    logo: '/sponsors/onshape.png',
  },
];

// 3.0 Historical Timeline
export const archive3Timeline = [
  {
    year: '2024',
    phase: 'FORMATION & FIRST FLIGHT',
    summary: 'Team established. Built first heavy-lift hexacopter and made national competition debut at SAE India 2024.',
  },
  {
    year: '2025',
    phase: 'INNOVATION & SAE ADDC TOP 10',
    summary: 'Engineered advanced autonomous quadcopter. Secured Top 10 national ranking at SAE ADDC 2025.',
  },
  {
    year: '2026 (EARLY)',
    phase: '3.0 CONCLUDING PHASE',
    summary: 'Expanded 9 industry software partnerships, prepared early competition prototypes, concluding the 3.0 era.',
  },
];
