/**
 * IGNITE KNIGHTS — DUAL-ERA JOURNEY & SYSTEM EVOLUTION
 * 
 * Divided strictly into:
 * 1. PREVIOUS GENERATION // IGNITE KNIGHTS 3.0 (2024 — 2026) [ARCHIVE]
 * 2. SYSTEM RESET & GENERATIONAL TRANSITION
 * 3. CURRENT GENERATION // IGNITE KNIGHTS 4.0 (2026 → PRESENT) [ACTIVE]
 */

export const journeyMeta = {
  title: 'THE EVOLUTIONARY RECORD',
  subtitle: 'FROM FOUNDING FLIGHTS TO AUTONOMOUS HORIZONS',
  description:
    'The story of Ignite Knights is a continuous trajectory of aeronautical refinement. Explore our foundational 3.0 era in the archive, and witness the systemic transition into Ignite Knights 4.0.',
};

// Era 1: Previous Generation (Ignite Knights 3.0) — ARCHIVED
export const legacy3Era = {
  era: 'PREVIOUS GENERATION',
  generation: '3.0',
  tenure: '2024 — 2026',
  badge: 'PREVIOUS GENERATION // 3.0 ARCHIVE',
  status: 'HISTORICAL MILESTONES COMPLETED',
  milestones: [
    {
      year: '2024',
      title: 'FOUNDATION & FIRST AERIAL PLATFORM',
      tag: 'ARCHIVE // 2024',
      summary:
        'Ignite Knights 3.0 formed with founding engineers across CSE, ECE, MECH, and EEE. Engineered our inaugural heavy-lift hexacopter and completed our national arena debut at SAE India 2024.',
      achievements: [
        'Radial 6-arm carbon composite airframe design and fabrication',
        'National debut in SAE India 2024 collegiate aerospace arena',
        'Custom RF telemetry link integration (915MHz MAVLink)',
      ],
      metrics: {
        platform: 'Hexacopter Heavy Lift',
        status: 'Decommissioned',
        event: 'SAE India 2024',
      },
    },
    {
      year: '2025',
      title: 'SAE ADDC TOP 10 NATIONAL RANKING',
      tag: 'ARCHIVE // 2025',
      summary:
        'Engineered an advanced autonomous competition quadcopter with edge AI perception and dynamic waypoint navigation, finishing in the Top 10 nationally at SAE ADDC 2025.',
      achievements: [
        'Top 10 national ranking at SAE ADDC 2025',
        'Onboard edge computer vision target lock and tracking',
        'Dynamic real-time obstacle avoidance loop deployment',
      ],
      metrics: {
        platform: 'Competition Quadcopter',
        status: 'Decommissioned',
        event: 'SAE ADDC 2025 Top 10',
      },
    },
    {
      year: '2026 (EARLY)',
      title: '3.0 FINAL PHASE & SPONSOR EXPANSION',
      tag: 'ARCHIVE // 2026',
      summary:
        'Scaled engineering capabilities through 9 premier software sponsorships (MATLAB, Altair, Siemens, Altium, ANSYS, etc.) and prepared preliminary competition prototypes, marking the formal conclusion of the 3.0 generation.',
      achievements: [
        '9 industry technology software licenses established',
        'Multi-modal sensor fusion research (LiDAR + VIO)',
        '3.0 operational mission cycle concluded and archived',
      ],
      metrics: {
        partners: '9 Industry Software Licenses',
        status: 'Concluded & Archived',
        transition: 'Generation Handoff',
      },
    },
  ],
};

// Generational Transition Bridge
export const transitionBridge = {
  label: 'SYSTEM RESET // ARCHITECTURE HANDOFF',
  code: 'IK-SYS-RESET-4.0',
  title: 'THIS IS NOT A REVISION. IT IS A NEW GENERATION.',
  description:
    'In early 2026, the 3.0 operational cycle reached its scheduled terminus. Rather than applying incremental patches to legacy airframes, the organization executed a clean-slate architecture reset: new team, new aircraft, new flight control paradigm, and new mission directives.',
  terminalSignal: '3.0 TELEMETRY STREAM TERMINATED // ARCHIVED TO SYSTEM RECORD',
  bootSignal: 'IK-04 FLIGHT SYSTEMS INITIALIZING // NEW GENERATION ACTIVE',
};

// Era 2: Current Generation (Ignite Knights 4.0) — ACTIVE DEVELOPMENT
export const current4Era = {
  era: 'CURRENT GENERATION',
  generation: '4.0',
  tenure: '2026 → PRESENT',
  badge: 'CURRENT GENERATION // 4.0 ACTIVE',
  status: 'CURRENTLY DEVELOPING',
  milestones: [
    {
      year: '2026 — ACTIVE',
      title: 'IK-04 CLEAN-SHEET ARCHITECTURE DEFINITION',
      tag: '4.0 // ACTIVE DEVELOPMENT',
      status: 'IN PROGRESS',
      summary:
        'Formulation of the 4.0 systems engineering blueprint. Decomposing interdisciplinary requirements across carbon airframe rigidity, heterogeneous edge acceleration, and fail-safe autonomy.',
      points: [
        'Clean-sheet modular carbon composite airframe design',
        'Integrated edge perception accelerator architecture',
        'Deterministic attitude and fail-safe flight loop definition',
      ],
      metrics: {
        designation: 'IK-04',
        phase: 'System Architecture',
        status: 'In Development',
      },
    },
    {
      year: '2026 — IMMINENT',
      title: 'BENCH INTEGRATION & HARDWARE-IN-THE-LOOP',
      tag: '4.0 // CURRENTLY DEVELOPING',
      status: 'SCHEDULED',
      summary:
        'Subsystem isolation bench tests: high-voltage power filtration, sensor bus EMI verification, and simulated aerodynamic stress tests prior to airframe fabrication.',
      points: [
        'Avionics harness and isolated power distribution validation',
        'Hardware-in-the-loop (HIL) flight controller simulation',
        'Pre-flight ground range safety parameter certification',
      ],
      metrics: {
        target: '4.0 Hardware Integration',
        status: 'Currently Developing',
        environment: 'IK Avionics Bench',
      },
    },
    {
      year: '2026+ — TARGET',
      title: 'NEW ARENA MISSIONS & FLIGHT CERTIFICATION',
      tag: '4.0 // OPERATIONAL TARGET',
      status: 'PLANNING',
      summary:
        'Deployment of the certified 4.0 development aircraft into new national autonomous flight competitions and real-world aerospace demonstration missions.',
      points: [
        'Full autonomous flight envelope validation',
        'Upcoming collegiate aerospace competition deployment',
        'High-density spatial survey flight demonstrations',
      ],
      metrics: {
        milestone: '4.0 Maiden Arena Flight',
        status: 'Planning & Prep',
        deployment: 'Target 2026 Arena',
      },
    },
  ],
};
