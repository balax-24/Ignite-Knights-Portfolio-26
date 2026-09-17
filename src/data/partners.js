/**
 * IGNITE KNIGHTS 4.0 — INDUSTRY PARTNERS & SPONSORSHIPS
 * 
 * CURRENT GENERATION: 4.0
 * 
 * CRITICAL RULE:
 * 3.0 sponsors (MATLAB, Altair, Siemens, Altium, ANSYS, SolidWorks, Mastercam, Onshape, RoadRunner)
 * were generation-specific technology licenses for 3.0 and belong in the 3.0 ARCHIVE.
 * 
 * For 4.0, we provide:
 * 1. Current 4.0 Partnership Program (UPDATING / Partnership Tiers & Inquiry)
 * 2. Dedicated 3.0 Archived Technology Licenses section with clear historical labeling.
 */

export const partnersMeta = {
  generation: '4.0',
  title: 'INDUSTRY PARTNERSHIPS',
  status: 'CURRENT 4.0 PARTNERSHIPS UPDATING',
  badge: 'CURRENT GENERATION // 4.0',
  description:
    'Ignite Knights 4.0 collaborates with leading aerospace manufacturers, semiconductor companies, sensor providers, and software ecosystems. We are currently finalizing new 4.0 partnership agreements and welcoming new collaborators.',
  inquiryTitle: 'PARTNER WITH THE NEXT GENERATION',
  inquiryText:
    'Support autonomous aerospace engineering innovation. Provide compute, manufacturing, sensor hardware, or research grants to power the 4.0 flight campaign.',
};

// 4.0 Partnership Collaboration Tracks
export const partnerTracks = [
  {
    tier: 'R&D TECHNOLOGY SPONSOR',
    code: 'TRACK-01',
    description:
      'Provide edge compute modules, microcontrollers, brushless motors, ESCs, or LiPo battery technology for flight testing.',
    benefits: [
      'Hardware tested and integrated into official 4.0 competition airframes',
      'Telemetry logs, bench evaluation reports, and thermal feedback provided',
      'Prominent hardware branding on 4.0 aircraft and flight banners',
    ],
  },
  {
    tier: 'ENGINEERING SOFTWARE LICENSE',
    code: 'TRACK-02',
    description:
      'Empower the 4.0 engineering cohort with high-performance CFD, FEA, CAD, embedded compiler, or telemetry software licenses.',
    benefits: [
      'Direct application in 4.0 airframe simulation and aerodynamic analysis',
      'Technical case studies showcasing real-world student engineering results',
      'Dedicated partner badge in digital systems and documentation',
    ],
  },
  {
    tier: 'FABRICATION & COMPOSITES',
    code: 'TRACK-03',
    description:
      'Collaborate on precision CNC milling of 7075 aluminum motor mounts, carbon-fiber autoclave curing, or rapid 3D printing.',
    benefits: [
      'Parts deployed in real flight maneuvers under extreme mechanical load',
      'Showcase of precision manufacturing tolerances in competitive arenas',
      'Direct relationship with upcoming aerospace and robotics graduates',
    ],
  },
  {
    tier: 'INSTITUTIONAL & FINANCIAL PATRON',
    code: 'TRACK-04',
    description:
      'Direct financial support to cover competition logistics, flight range rental, materials, and national tournament travel.',
    benefits: [
      'Primary placement on team uniforms, aircraft, and media releases',
      'Executive demonstrations and VIP flight range access',
      'Quarterly technical progress reports delivered to your team',
    ],
  },
];

// Current 4.0 Partner Slots (Editable)
export const active4Partners = [
  /*
   * Editable slots for confirmed 4.0 partners:
   * {
   *   id: 'partner-id',
   *   name: 'Partner Name',
   *   tier: 'R&D TECHNOLOGY SPONSOR',
   *   logo: '/sponsors/partner.png',
   *   domain: 'Propulsion / Avionics / Software',
   *   role: 'Partner Role Description',
   * }
   */
];

// 3.0 Archived Technology Licenses (For reference in Partners page archive section)
export const archived3Partners = [
  { name: 'MATLAB', role: 'Mathematical flight dynamic modeling', logo: '/sponsors/Mathworks.png' },
  { name: 'Altair Suite', role: 'Structural topology optimization', logo: '/sponsors/altair.png' },
  { name: 'Siemens Software', role: 'Multi-disciplinary digital twin modeling', logo: '/sponsors/siemens.png' },
  { name: 'Altium Designer', role: 'High-speed PCB avionics layout', logo: '/sponsors/altium.png' },
  { name: 'ANSYS', role: 'Computational fluid dynamics & drag analysis', logo: '/sponsors/ansys.png' },
  { name: 'SolidWorks', role: 'Mechanical airframe CAD assembly', logo: '/sponsors/solid.png' },
  { name: 'Mastercam', role: 'CAM toolpath CNC machining generation', logo: '/sponsors/mastercam.png' },
  { name: 'Onshape', role: 'Cloud-native collaborative CAD', logo: '/sponsors/onshape.png' },
  { name: 'RoadRunner', role: '3D virtual simulation scene synthesis', logo: '/sponsors/Mathworks.png' },
];
