/**
 * IGNITE KNIGHTS 4.0 — ENGINEERING ROSTER & DIRECTORY
 * 
 * CURRENT GENERATION: 4.0
 * 
 * CRITICAL RULE:
 * 3.0 team members (Mithra, Rakshanasri, Dhiraj, Shakthivel, etc.) belong strictly in the archive.
 * For 4.0, we provide the official directory structure currently in UPDATING state.
 * Do NOT invent fake names or fake personnel.
 */

export const teamMeta = {
  generation: '4.0',
  title: '4.0 TEAM DIRECTORY',
  status: 'TEAM ROSTER UPDATING',
  badge: 'CURRENT GENERATION // 4.0',
  description:
    'Ignite Knights 4.0 comprises an incoming multidisciplinary engineering cohort across Aerospace, Robotics, Artificial Intelligence, Electronics, and Mechanical Engineering. The official 4.0 roster is undergoing final administrative and technical certification.',
  archiveNotice:
    'Looking for the founding engineers, leaders, and mentors of Ignite Knights 3.0 (2024–2026)?',
  archiveLinkText: 'VIEW PREVIOUS GENERATION 3.0 ARCHIVE →',
};

export const teamCategories = [
  'ALL',
  'LEADERSHIP',
  'AI / SOFTWARE',
  'ELECTRONICS',
  'MECHANICAL',
  'FLIGHT SYSTEMS',
  'OPERATIONS',
];

// Department Structure and Slot Definitions for 4.0
export const teamDepartments = [
  {
    code: 'IK4-LEAD',
    name: 'TEAM LEADERSHIP & SYSTEMS ENGINEERING',
    category: 'LEADERSHIP',
    description:
      'Overall program direction, systems architecture synthesis, mission coordination, and inter-division synchronization.',
    slots: [
      {
        role: 'Team Lead & Chief Systems Engineer',
        callSign: 'IK4-LEAD-01',
        status: 'UPDATING // CERTIFICATION IN PROGRESS',
        department: 'Engineering Cohort 4.0',
        responsibilities: 'Flight program command, interdisciplinary architecture, safety oversight',
      },
      {
        role: 'Operations & Engineering Management',
        callSign: 'IK4-LEAD-02',
        status: 'UPDATING // CERTIFICATION IN PROGRESS',
        department: 'Engineering Cohort 4.0',
        responsibilities: 'Sprint milestones, logistics, regulatory compliance, testing schedule',
      },
    ],
  },
  {
    code: 'IK4-AI-SW',
    name: 'AUTONOMY, SOFTWARE & EDGE AI',
    category: 'AI / SOFTWARE',
    description:
      'Edge neural perception, ROS2 middleware architecture, path planning, and real-time state estimation.',
    slots: [
      {
        role: 'Autonomy & Navigation Lead',
        callSign: 'IK4-SW-01',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Computer Science / Robotics',
        responsibilities: 'Trajectory generation, SLAM odometry, obstacle avoidance loops',
      },
      {
        role: 'Computer Vision & Embedded AI',
        callSign: 'IK4-SW-02',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Artificial Intelligence & Data Science',
        responsibilities: 'TensorRT model acceleration, real-time spatial target acquisition',
      },
    ],
  },
  {
    code: 'IK4-ELEC',
    name: 'AVIONICS, SENSORS & POWER DISTRIBUTION',
    category: 'ELECTRONICS',
    description:
      'Power distribution hardware, high-current harnesses, telemetry links, and sensor bus isolation.',
    slots: [
      {
        role: 'Avionics & RF Hardware Lead',
        callSign: 'IK4-EE-01',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Electronics & Communication',
        responsibilities: 'Telemetry transceivers, PCB routing, signal bus isolation',
      },
      {
        role: 'Power Systems & Energy Management',
        callSign: 'IK4-EE-02',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Electrical & Electronics',
        responsibilities: 'High-voltage LiPo distribution, transient filtration, current monitoring',
      },
    ],
  },
  {
    code: 'IK4-MECH',
    name: 'AIRFRAME, COMPOSITES & FABRICATION',
    category: 'MECHANICAL',
    description:
      'Carbon-fiber airframe fabrication, FEA structural simulation, CNC machining, and motor mounts.',
    slots: [
      {
        role: 'Airframe Structures & FEA Lead',
        callSign: 'IK4-ME-01',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Mechanical / Aerospace Engineering',
        responsibilities: 'Carbon composite layup, ANSYS FEA stress modeling, arm rigidity',
      },
      {
        role: 'Precision Machining & Rapid Prototyping',
        callSign: 'IK4-ME-02',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Mechanical Engineering',
        responsibilities: '7075 aluminum CNC machining, landing gear dynamic dampening',
      },
    ],
  },
  {
    code: 'IK4-FLT',
    name: 'FLIGHT OPERATIONS & FLIGHT TEST',
    category: 'FLIGHT SYSTEMS',
    description:
      'Pre-flight telemetry inspection, range safety protocols, flight logs, and telemetry ground station.',
    slots: [
      {
        role: 'Flight Operations & Safety Officer',
        callSign: 'IK4-FLT-01',
        status: 'UPDATING // ROSTER ASSIGNMENT PENDING',
        department: 'Flight Systems Division',
        responsibilities: 'Pre-flight checklists, range clearance, emergency failsafe testing',
      },
    ],
  },
];

// Editable real members array (Populated when 4.0 names are announced)
export const real4TeamMembers = [
  /*
   * Once 4.0 members are confirmed, add them here:
   * {
   *   id: 'sample-id',
   *   name: 'Full Name',
   *   role: 'Specific Role',
   *   department: 'Department',
   *   domain: 'AI / SOFTWARE',
   *   photo: '/team/sample.jpg',
   *   callSign: 'IK4-01',
   *   bio: 'Short bio...',
   * }
   */
];
