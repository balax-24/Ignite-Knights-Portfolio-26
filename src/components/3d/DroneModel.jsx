import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Realistic Competition UAV 3D Model
 * Professional quadcopter engineered with Toray carbon fiber plates,
 * tubular arms, CNC anodized aluminum mounts, brushless outrunner motors,
 * copper stator windings, aerodynamic props, flight controller stack,
 * Jetson edge compute module, gimbal camera, GPS mast, and LiPo power system.
 */
export function DroneModel({ isInteractive = true, scale = 1.0 }) {
  const droneGroupRef = useRef();
  const rotorCW1 = useRef();
  const rotorCCW2 = useRef();
  const rotorCW3 = useRef();
  const rotorCCW4 = useRef();
  const heartbeatLedRef = useRef();
  const gpsLedRef = useRef();

  // Engineering Materials (PBR)
  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: 0x121215,
    roughness: 0.45,
    metalness: 0.25,
  });

  const anodizedRedMaterial = new THREE.MeshStandardMaterial({
    color: 0xcc0500,
    roughness: 0.35,
    metalness: 0.85,
  });

  const darkTitaniumMaterial = new THREE.MeshStandardMaterial({
    color: 0x222228,
    roughness: 0.3,
    metalness: 0.8,
  });

  const copperCoilMaterial = new THREE.MeshStandardMaterial({
    color: 0xd9753b,
    roughness: 0.3,
    metalness: 0.7,
  });

  const goldPinsMaterial = new THREE.MeshStandardMaterial({
    color: 0xe5a823,
    roughness: 0.2,
    metalness: 0.9,
  });

  const lensGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x051525,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.85,
    thickness: 0.5,
  });

  const propMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1f,
    roughness: 0.4,
    metalness: 0.3,
    transparent: true,
    opacity: 0.92,
  });

  // Arm positions: 45° X-quad layout (X, Z)
  const armLength = 1.65;
  const armPositions = [
    { x: armLength * 0.707, z: -armLength * 0.707, angle: -Math.PI / 4, isCW: true, ref: rotorCW1 },
    { x: -armLength * 0.707, z: -armLength * 0.707, angle: Math.PI / 4, isCW: false, ref: rotorCCW2 },
    { x: -armLength * 0.707, z: armLength * 0.707, angle: (3 * Math.PI) / 4, isCW: true, ref: rotorCW3 },
    { x: armLength * 0.707, z: armLength * 0.707, angle: -(3 * Math.PI) / 4, isCW: false, ref: rotorCCW4 },
  ];

  // Animation loop: subtle aerodynamic hover, rotor rotation, and avionics beacon pulses
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotate propellers (CW vs CCW)
    const spinSpeed = 26; // High RPM realistic blade rotation
    if (rotorCW1.current) rotorCW1.current.rotation.y += spinSpeed * delta;
    if (rotorCCW2.current) rotorCCW2.current.rotation.y -= spinSpeed * delta;
    if (rotorCW3.current) rotorCW3.current.rotation.y += spinSpeed * delta;
    if (rotorCCW4.current) rotorCCW4.current.rotation.y -= spinSpeed * delta;

    // Avionics status LED blinking
    if (heartbeatLedRef.current) {
      heartbeatLedRef.current.intensity = Math.sin(time * 5) > 0.3 ? 2.5 : 0.2;
    }
    if (gpsLedRef.current) {
      gpsLedRef.current.intensity = Math.sin(time * 3 + 1) > 0 ? 1.8 : 0.1;
    }

    // Natural realistic hover dynamics (slight pitch/roll oscillation and vertical micro-drift)
    if (droneGroupRef.current && isInteractive) {
      droneGroupRef.current.position.y = Math.sin(time * 1.4) * 0.08;
      droneGroupRef.current.rotation.z = Math.sin(time * 0.9) * 0.025;
      droneGroupRef.current.rotation.x = Math.cos(time * 1.1) * 0.02;
    }
  });

  return (
    <group ref={droneGroupRef} scale={scale} dispose={null}>
      {/* ========================================================
          1. CENTER CHASSIS (Dual-Deck Carbon Fiber Plates)
         ======================================================== */}
      {/* Top Deck Carbon Plate */}
      <mesh position={[0, 0.14, 0]} material={carbonMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.92, 0.035, 1.4]} />
      </mesh>
      {/* Bottom Deck Carbon Plate */}
      <mesh position={[0, -0.14, 0]} material={carbonMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.96, 0.035, 1.45]} />
      </mesh>
      {/* Center Deck Electronics Mount Plate */}
      <mesh position={[0, 0.0, 0]} material={carbonMaterial} castShadow>
        <boxGeometry args={[0.82, 0.025, 1.1]} />
      </mesh>

      {/* CNC Anodized Red Aluminum Standoff Spacers (8 perimeter standoffs) */}
      {[
        [-0.4, 0.45], [0.4, 0.45],
        [-0.4, -0.45], [0.4, -0.45],
        [-0.4, 0.1], [0.4, 0.1],
        [-0.4, -0.1], [0.4, -0.1]
      ].map(([sx, sz], idx) => (
        <mesh key={`standoff-${idx}`} position={[sx, 0, sz]} material={anodizedRedMaterial} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.28, 8]} />
        </mesh>
      ))}

      {/* ========================================================
          2. AVIONICS & FLIGHT CONTROLLER STACK
         ======================================================== */}
      <group position={[0, 0.03, 0]}>
        {/* Main PDB Board */}
        <mesh position={[0, -0.04, 0]} castShadow>
          <boxGeometry args={[0.48, 0.02, 0.48]} />
          <meshStandardMaterial color={0x0a1c12} roughness={0.5} />
        </mesh>
        {/* Gold Solder Pads & Edge Traces */}
        <mesh position={[0, -0.028, 0]} material={goldPinsMaterial}>
          <boxGeometry args={[0.49, 0.005, 0.49]} />
        </mesh>
        {/* Flight Controller Case with Heatsink Fins */}
        <mesh position={[0, 0.02, 0]} material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.42, 0.05, 0.42]} />
        </mesh>
        {/* CNC Heat Sink Top Plate with Red Bevel */}
        <mesh position={[0, 0.05, 0]} material={anodizedRedMaterial}>
          <boxGeometry args={[0.38, 0.015, 0.38]} />
        </mesh>
        {/* Status Beacons */}
        <mesh position={[0.14, 0.06, 0.14]}>
          <boxGeometry args={[0.03, 0.01, 0.03]} />
          <meshBasicMaterial color={0x00ff66} />
        </mesh>
        <pointLight ref={heartbeatLedRef} position={[0.14, 0.08, 0.14]} color={0x00ff66} distance={0.8} intensity={1.5} />

        <mesh position={[-0.14, 0.06, 0.14]}>
          <boxGeometry args={[0.03, 0.01, 0.03]} />
          <meshBasicMaterial color={0xe10600} />
        </mesh>
        <pointLight ref={gpsLedRef} position={[-0.14, 0.08, 0.14]} color={0xe10600} distance={0.8} intensity={1.5} />
      </group>

      {/* ========================================================
          3. NVIDIA JETSON EMBEDDED EDGE COMPUTE (AI Subsystem)
         ======================================================== */}
      <group position={[0, -0.07, -0.15]}>
        <mesh material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.55, 0.08, 0.5]} />
        </mesh>
        {/* Cooling fin ribs */}
        {[-0.2, -0.1, 0, 0.1, 0.2].map((fx, fIdx) => (
          <mesh key={`fin-${fIdx}`} position={[fx, 0.045, 0]} material={darkTitaniumMaterial}>
            <boxGeometry args={[0.02, 0.03, 0.48]} />
          </mesh>
        ))}
      </group>

      {/* ========================================================
          4. POWER SYSTEM: 6S LiPo BATTERY PACK
         ======================================================== */}
      <group position={[0, 0.25, -0.08]}>
        {/* Heavy-Duty 6S LiPo Brick */}
        <mesh material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.52, 0.18, 0.85]} />
        </mesh>
        {/* Nylon Hold-Down Straps with Red Stitching */}
        <mesh position={[0, 0, 0.18]} material={anodizedRedMaterial}>
          <boxGeometry args={[0.54, 0.19, 0.08]} />
        </mesh>
        <mesh position={[0, 0, -0.18]} material={anodizedRedMaterial}>
          <boxGeometry args={[0.54, 0.19, 0.08]} />
        </mesh>
        {/* High-Current XT90 Yellow Power Connector */}
        <mesh position={[0.22, 0.05, 0.38]}>
          <boxGeometry args={[0.06, 0.05, 0.09]} />
          <meshStandardMaterial color={0xffcc00} roughness={0.4} />
        </mesh>
        {/* Heavy Gauge 10AWG Silicone Cables */}
        <mesh position={[0.18, 0.05, 0.38]}>
          <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
          <meshStandardMaterial color={0xe10600} roughness={0.6} />
        </mesh>
      </group>

      {/* ========================================================
          5. FORWARD 4K GIMBAL CAMERA & PERCEPTION VISION
         ======================================================== */}
      <group position={[0, -0.05, 0.72]}>
        {/* Gimbal Yaw Arm (CNC Red Aluminum) */}
        <mesh position={[0, 0.02, -0.08]} material={anodizedRedMaterial} castShadow>
          <boxGeometry args={[0.18, 0.04, 0.12]} />
        </mesh>
        {/* Gimbal Motor Bell */}
        <mesh position={[0.11, 0.02, 0]} material={darkTitaniumMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
        </mesh>
        {/* Camera Main Housing */}
        <mesh position={[0, -0.03, 0.04]} material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.22, 0.16, 0.2]} />
        </mesh>
        {/* Lens Barrel */}
        <mesh position={[0, -0.03, 0.16]} material={darkTitaniumMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.08, 24]} />
        </mesh>
        {/* Red Lens Accent Ring */}
        <mesh position={[0, -0.03, 0.19]} material={anodizedRedMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.078, 0.078, 0.015, 24]} />
        </mesh>
        {/* Glass Lens Element */}
        <mesh position={[0, -0.03, 0.205]} material={lensGlassMaterial} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.065, 0.065, 0.01, 24]} />
        </mesh>
        {/* Rec Status Indicator */}
        <mesh position={[0.07, 0.02, 0.14]}>
          <sphereGeometry args={[0.012, 12, 12]} />
          <meshBasicMaterial color={0xe10600} />
        </mesh>
      </group>

      {/* ========================================================
          6. DOWNWARD LIDAR & OPTICAL FLOW PERCEPTION UNIT
         ======================================================== */}
      <group position={[0, -0.19, 0.2]}>
        <mesh material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.22, 0.07, 0.18]} />
        </mesh>
        {/* Dual Laser Transceiver Lenses */}
        <mesh position={[-0.05, -0.038, 0]} material={lensGlassMaterial} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
        </mesh>
        <mesh position={[0.05, -0.038, 0]} material={lensGlassMaterial} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
        </mesh>
      </group>

      {/* ========================================================
          7. HIGH-PRECISION GPS MAST & SATELLITE DOME
         ======================================================== */}
      <group position={[0, 0.16, -0.58]}>
        {/* Carbon Mast Rod */}
        <mesh position={[0, 0.18, 0]} material={carbonMaterial} castShadow>
          <cylinderGeometry args={[0.018, 0.018, 0.36, 12]} />
        </mesh>
        {/* Mast CNC Base Mount */}
        <mesh position={[0, 0.02, 0]} material={anodizedRedMaterial}>
          <cylinderGeometry args={[0.045, 0.045, 0.04, 16]} />
        </mesh>
        {/* Aerodynamic GPS Dome Disc */}
        <mesh position={[0, 0.36, 0]} material={darkTitaniumMaterial} castShadow>
          <cylinderGeometry args={[0.13, 0.13, 0.035, 24]} />
        </mesh>
        {/* Dome Upper Bevel */}
        <mesh position={[0, 0.385, 0]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.12, 24, 12, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        {/* Directional Alignment Arrow (Red) */}
        <mesh position={[0, 0.388, 0.05]} material={anodizedRedMaterial} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.02, 0.06, 3]} />
        </mesh>
      </group>

      {/* ========================================================
          8. DUAL REAR TELEMETRY DIPOLES (915MHz)
         ======================================================== */}
      <group position={[0, 0.02, -0.7]}>
        {/* Left Antenna */}
        <mesh position={[-0.18, 0.08, -0.08]} rotation={[0.4, 0, -0.6]} material={darkTitaniumMaterial}>
          <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
        </mesh>
        {/* Right Antenna */}
        <mesh position={[0.18, 0.08, -0.08]} rotation={[0.4, 0, 0.6]} material={darkTitaniumMaterial}>
          <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
        </mesh>
      </group>

      {/* ========================================================
          9. 4x TUBULAR CARBON FIBER ARMS, CNC CLAMPS, MOTORS & PROPS
         ======================================================== */}
      {armPositions.map((arm, index) => {
        return (
          <group key={`arm-group-${index}`}>
            {/* Tubular Carbon Fiber Arm Bar */}
            <group rotation={[0, arm.angle, 0]}>
              {/* Arm Tube */}
              <mesh position={[0, 0, armLength * 0.5]} material={carbonMaterial} castShadow>
                <cylinderGeometry args={[0.048, 0.048, armLength, 16]} rotation={[Math.PI / 2, 0, 0]} />
              </mesh>

              {/* Inner Root CNC Clamp (Connecting Arm to Central Deck) */}
              <mesh position={[0, 0, 0.32]} material={anodizedRedMaterial} castShadow>
                <boxGeometry args={[0.14, 0.12, 0.22]} />
              </mesh>

              {/* Outer Motor Mount Clamp at Arm End */}
              <mesh position={[0, 0.02, armLength]} material={anodizedRedMaterial} castShadow>
                <boxGeometry args={[0.16, 0.09, 0.18]} />
              </mesh>

              {/* Motor Landing Pad / Foot under Motor */}
              <mesh position={[0, -0.08, armLength]} material={darkTitaniumMaterial}>
                <cylinderGeometry args={[0.035, 0.035, 0.11, 12]} />
              </mesh>
            </group>

            {/* High-Torque Brushless Outrunner Motor at Arm Tip */}
            <group position={[arm.x, 0.08, arm.z]}>
              {/* Motor Stator Base (Black Aluminum) */}
              <mesh position={[0, 0, 0]} material={darkTitaniumMaterial} castShadow>
                <cylinderGeometry args={[0.11, 0.11, 0.04, 24]} />
              </mesh>

              {/* Visible Copper Stator Coils inside Bell */}
              <mesh position={[0, 0.04, 0]} material={copperCoilMaterial}>
                <torusGeometry args={[0.075, 0.024, 12, 24]} rotation={[Math.PI / 2, 0, 0]} />
              </mesh>

              {/* Rotating Outer Rotor Bell with Anodized Red Accent Ring */}
              <mesh position={[0, 0.075, 0]} material={darkTitaniumMaterial} castShadow>
                <cylinderGeometry args={[0.115, 0.115, 0.065, 24]} />
              </mesh>
              <mesh position={[0, 0.105, 0]} material={anodizedRedMaterial}>
                <cylinderGeometry args={[0.118, 0.118, 0.015, 24]} />
              </mesh>

              {/* Hardened Steel Motor Shaft & Prop Lock Nut */}
              <mesh position={[0, 0.13, 0]} material={darkTitaniumMaterial}>
                <cylinderGeometry args={[0.025, 0.025, 0.06, 12]} />
              </mesh>
              <mesh position={[0, 0.155, 0]} material={anodizedRedMaterial}>
                <coneGeometry args={[0.045, 0.05, 6]} />
              </mesh>

              {/* Aerodynamic Propeller Assembly (Rotates with frame delta) */}
              <group ref={arm.ref} position={[0, 0.14, 0]}>
                {/* Center Hub */}
                <mesh material={darkTitaniumMaterial}>
                  <cylinderGeometry args={[0.05, 0.05, 0.025, 16]} />
                </mesh>
                {/* Propeller Blade 1 */}
                <mesh position={[0.38, 0, 0]} rotation={[0.15, 0, 0.08]} material={propMaterial} castShadow>
                  <boxGeometry args={[0.72, 0.012, 0.095]} />
                </mesh>
                {/* Propeller Blade 2 */}
                <mesh position={[-0.38, 0, 0]} rotation={[-0.15, 0, -0.08]} material={propMaterial} castShadow>
                  <boxGeometry args={[0.72, 0.012, 0.095]} />
                </mesh>
              </group>
            </group>
          </group>
        );
      })}

      {/* ========================================================
          10. CARBON FIBER LANDING SKIDS / STRUTS
         ======================================================== */}
      {/* Left Front Leg */}
      <group position={[-0.36, -0.22, 0.35]}>
        <mesh rotation={[0.4, 0, -0.3]} material={carbonMaterial} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.38, 8]} />
        </mesh>
        <mesh position={[-0.06, -0.16, 0.07]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>
      </group>
      {/* Right Front Leg */}
      <group position={[0.36, -0.22, 0.35]}>
        <mesh rotation={[0.4, 0, 0.3]} material={carbonMaterial} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.38, 8]} />
        </mesh>
        <mesh position={[0.06, -0.16, 0.07]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>
      </group>
      {/* Left Rear Leg */}
      <group position={[-0.36, -0.22, -0.35]}>
        <mesh rotation={[-0.4, 0, -0.3]} material={carbonMaterial} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.38, 8]} />
        </mesh>
        <mesh position={[-0.06, -0.16, -0.07]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>
      </group>
      {/* Right Rear Leg */}
      <group position={[0.36, -0.22, -0.35]}>
        <mesh rotation={[-0.4, 0, 0.3]} material={carbonMaterial} castShadow>
          <cylinderGeometry args={[0.022, 0.022, 0.38, 8]} />
        </mesh>
        <mesh position={[0.06, -0.16, -0.07]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.035, 12, 12]} />
        </mesh>
      </group>
    </group>
  );
}
