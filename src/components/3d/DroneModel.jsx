import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Realistic 4.0 Development UAV 3D Model
 *
 * Represents the IK-04 Development Aircraft.
 * Features:
 * - Toray carbon-fiber dual deck chassis
 * - CNC anodized aluminum 7075 standoffs and motor clamps
 * - Brushless outrunner BLDC motors with copper stator windings
 * - Carbon composite aerodynamic propellers (CW / CCW rotation)
 * - Central avionics and flight controller stack with status beacons
 * - Embedded mission compute unit (NVIDIA Jetson)
 * - 6S high-discharge LiPo battery pack with XT90 connector
 * - Forward 4K stabilized gimbal camera
 * - Downward LiDAR / optical flow sensor module
 * - Elevated RTK GPS mast with direction beacon
 * - Rear dual-band 915MHz telemetry dipole antennas
 *
 * Supports exploded view inspection mode on /aircraft.
 */
export function DroneModel({
  isInteractive = true,
  scale = 1.0,
  isExploded = false,
  onSubsystemClick = null,
  activeSubsystem = null,
}) {
  const droneGroupRef = useRef();
  const rotorCW1 = useRef();
  const rotorCCW2 = useRef();
  const rotorCW3 = useRef();
  const rotorCCW4 = useRef();
  const heartbeatLedRef = useRef();
  const gpsLedRef = useRef();

  // Exploded view animation state
  const explodedLerpRef = useRef(0);

  // Engineering Materials (PBR)
  const carbonMaterial = new THREE.MeshStandardMaterial({
    color: 0x141418,
    roughness: 0.45,
    metalness: 0.25,
  });

  const anodizedRedMaterial = new THREE.MeshStandardMaterial({
    color: 0xe10600,
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
    color: 0x181820,
    roughness: 0.4,
    metalness: 0.3,
    transparent: true,
    opacity: 0.92,
  });

  // Arm positions: 45° X-quad layout (X, Z)
  const baseArmLength = 1.65;
  const armConfigs = [
    { dirX: 0.707, dirZ: -0.707, angle: -Math.PI / 4, isCW: true, ref: rotorCW1 },
    { dirX: -0.707, dirZ: -0.707, angle: Math.PI / 4, isCW: false, ref: rotorCCW2 },
    { dirX: -0.707, dirZ: 0.707, angle: (3 * Math.PI) / 4, isCW: true, ref: rotorCW3 },
    { dirX: 0.707, dirZ: 0.707, angle: -(3 * Math.PI) / 4, isCW: false, ref: rotorCCW4 },
  ];

  // Animation loop: subtle aerodynamics, rotor spin, avionics blinking, and exploded interpolation
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Lerp exploded progress smoothly
    const targetExploded = isExploded ? 1.0 : 0.0;
    explodedLerpRef.current = THREE.MathUtils.lerp(explodedLerpRef.current, targetExploded, delta * 4);
    const expFactor = explodedLerpRef.current;

    // Propellers spin (unless in full exploded inspection view where they spin slower for clarity)
    const spinSpeed = isExploded ? 6 : 28;
    if (rotorCW1.current) rotorCW1.current.rotation.y += spinSpeed * delta;
    if (rotorCCW2.current) rotorCCW2.current.rotation.y -= spinSpeed * delta;
    if (rotorCW3.current) rotorCW3.current.rotation.y += spinSpeed * delta;
    if (rotorCCW4.current) rotorCCW4.current.rotation.y -= spinSpeed * delta;

    // Avionics LED pulse
    if (heartbeatLedRef.current) {
      heartbeatLedRef.current.intensity = Math.sin(time * 5) > 0.3 ? 2.5 : 0.2;
    }
    if (gpsLedRef.current) {
      gpsLedRef.current.intensity = Math.sin(time * 3 + 1) > 0 ? 1.8 : 0.1;
    }

    // Natural hover dynamics (subtle floating, minimal pitch/roll)
    if (droneGroupRef.current && isInteractive && !isExploded) {
      droneGroupRef.current.position.y = Math.sin(time * 1.4) * 0.08;
      droneGroupRef.current.rotation.z = Math.sin(time * 0.9) * 0.025;
      droneGroupRef.current.rotation.x = Math.cos(time * 1.1) * 0.02;
    }
  });

  const expFactor = isExploded ? 1.0 : 0.0;

  return (
    <group ref={droneGroupRef} scale={scale} dispose={null}>
      {/* ========================================================
          1. CHASSIS CENTER DECK (Core Structural Backbone)
         ======================================================== */}
      <group position={[0, 0, 0]}>
        {/* Top Deck Carbon Plate (Lifts up in exploded mode) */}
        <mesh
          position={[0, 0.14 + expFactor * 0.35, 0]}
          material={carbonMaterial}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.92, 0.035, 1.4]} />
        </mesh>

        {/* Center Deck Electronics Mount Plate */}
        <mesh position={[0, 0.0, 0]} material={carbonMaterial} castShadow>
          <boxGeometry args={[0.82, 0.025, 1.1]} />
        </mesh>

        {/* Bottom Deck Carbon Plate (Drops down in exploded mode) */}
        <mesh
          position={[0, -0.14 - expFactor * 0.35, 0]}
          material={carbonMaterial}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.96, 0.035, 1.45]} />
        </mesh>

        {/* CNC Anodized Red Aluminum Standoff Spacers */}
        {[
          [-0.4, 0.45], [0.4, 0.45],
          [-0.4, -0.45], [0.4, -0.45],
          [-0.4, 0.1], [0.4, 0.1],
          [-0.4, -0.1], [0.4, -0.1],
        ].map(([sx, sz], idx) => (
          <mesh
            key={`standoff-${idx}`}
            position={[sx, 0, sz]}
            material={anodizedRedMaterial}
            castShadow
          >
            <cylinderGeometry args={[0.025, 0.025, 0.28, 8]} />
          </mesh>
        ))}
      </group>

      {/* ========================================================
          2. AVIONICS & FLIGHT CONTROLLER STACK
         ======================================================== */}
      <group
        position={[0, 0.03 + expFactor * 0.45, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('flight-control');
        }}
      >
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
        <pointLight
          ref={heartbeatLedRef}
          position={[0.14, 0.08, 0.14]}
          color={0x00ff66}
          distance={0.8}
          intensity={1.5}
        />

        <mesh position={[-0.14, 0.06, 0.14]}>
          <boxGeometry args={[0.03, 0.01, 0.03]} />
          <meshBasicMaterial color={0xe10600} />
        </mesh>
        <pointLight
          ref={gpsLedRef}
          position={[-0.14, 0.08, 0.14]}
          color={0xe10600}
          distance={0.8}
          intensity={1.5}
        />
      </group>

      {/* ========================================================
          3. NVIDIA JETSON MISSION COMPUTE (Edge AI Subsystem)
         ======================================================== */}
      <group
        position={[0, -0.07 - expFactor * 0.3, -0.15]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('compute');
        }}
      >
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
      <group
        position={[0, 0.25 + expFactor * 0.7, -0.08]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('power');
        }}
      >
        {/* Heavy-Duty LiPo Brick */}
        <mesh material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.52, 0.18, 0.85]} />
        </mesh>
        {/* Hold-Down Straps */}
        <mesh position={[0, 0, 0.18]} material={anodizedRedMaterial}>
          <boxGeometry args={[0.54, 0.19, 0.08]} />
        </mesh>
        <mesh position={[0, 0, -0.18]} material={anodizedRedMaterial}>
          <boxGeometry args={[0.54, 0.19, 0.08]} />
        </mesh>
        {/* XT90 Connector */}
        <mesh position={[0.22, 0.05, 0.38]}>
          <boxGeometry args={[0.06, 0.05, 0.09]} />
          <meshStandardMaterial color={0xffcc00} roughness={0.4} />
        </mesh>
        {/* 10AWG Silicone Cables */}
        <mesh position={[0.18, 0.05, 0.38]}>
          <cylinderGeometry args={[0.02, 0.02, 0.12, 8]} />
          <meshStandardMaterial color={0xe10600} roughness={0.6} />
        </mesh>
      </group>

      {/* ========================================================
          5. FORWARD 4K GIMBAL CAMERA & PERCEPTION VISION
         ======================================================== */}
      <group
        position={[0, -0.05 - expFactor * 0.15, 0.72 + expFactor * 0.45]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('perception');
        }}
      >
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
      </group>

      {/* ========================================================
          6. DOWNWARD LIDAR & OPTICAL FLOW
         ======================================================== */}
      <group
        position={[0, -0.19 - expFactor * 0.5, 0.2]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('perception');
        }}
      >
        <mesh material={darkTitaniumMaterial} castShadow>
          <boxGeometry args={[0.22, 0.07, 0.18]} />
        </mesh>
        <mesh position={[-0.05, -0.038, 0]} material={lensGlassMaterial}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
        </mesh>
        <mesh position={[0.05, -0.038, 0]} material={lensGlassMaterial}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
        </mesh>
      </group>

      {/* ========================================================
          7. HIGH-PRECISION RTK GPS MAST
         ======================================================== */}
      <group
        position={[0, 0.16 + expFactor * 0.8, -0.58]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('communication');
        }}
      >
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
        <mesh position={[0, 0.385, 0]} material={darkTitaniumMaterial}>
          <sphereGeometry args={[0.12, 24, 12, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        <mesh position={[0, 0.388, 0.05]} material={anodizedRedMaterial} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.02, 0.06, 3]} />
        </mesh>
      </group>

      {/* ========================================================
          8. DUAL REAR TELEMETRY DIPOLES
         ======================================================== */}
      <group
        position={[0, 0.02 + expFactor * 0.2, -0.7 - expFactor * 0.25]}
        onClick={(e) => {
          e.stopPropagation();
          onSubsystemClick && onSubsystemClick('communication');
        }}
      >
        <mesh position={[-0.18, 0.08, -0.08]} rotation={[0.4, 0, -0.6]} material={darkTitaniumMaterial}>
          <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
        </mesh>
        <mesh position={[0.18, 0.08, -0.08]} rotation={[0.4, 0, 0.6]} material={darkTitaniumMaterial}>
          <cylinderGeometry args={[0.008, 0.008, 0.28, 8]} />
        </mesh>
      </group>

      {/* ========================================================
          9. 4x TUBULAR CARBON FIBER ARMS, MOTORS & PROPELLERS
         ======================================================== */}
      {armConfigs.map((arm, index) => {
        const armExpansion = 1 + expFactor * 0.35;
        const currentArmLength = baseArmLength * armExpansion;
        const armX = arm.dirX * currentArmLength;
        const armZ = arm.dirZ * currentArmLength;

        return (
          <group
            key={`arm-group-${index}`}
            onClick={(e) => {
              e.stopPropagation();
              onSubsystemClick && onSubsystemClick('propulsion');
            }}
          >
            {/* Tubular Carbon Fiber Arm Bar */}
            <group rotation={[0, arm.angle, 0]}>
              <mesh position={[0, 0, currentArmLength * 0.5]} material={carbonMaterial} castShadow>
                <cylinderGeometry args={[0.048, 0.048, currentArmLength, 16]} rotation={[Math.PI / 2, 0, 0]} />
              </mesh>

              {/* Inner Root CNC Clamp */}
              <mesh position={[0, 0, 0.32]} material={anodizedRedMaterial} castShadow>
                <boxGeometry args={[0.14, 0.12, 0.22]} />
              </mesh>

              {/* Outer Motor Mount Clamp at Arm End */}
              <mesh position={[0, 0.02, currentArmLength]} material={anodizedRedMaterial} castShadow>
                <boxGeometry args={[0.16, 0.09, 0.18]} />
              </mesh>

              {/* Motor Landing Pad */}
              <mesh position={[0, -0.08, currentArmLength]} material={darkTitaniumMaterial}>
                <cylinderGeometry args={[0.035, 0.035, 0.11, 12]} />
              </mesh>
            </group>

            {/* High-Torque Brushless Outrunner Motor at Arm Tip */}
            <group position={[armX, 0.08, armZ]}>
              {/* Motor Stator Base */}
              <mesh position={[0, 0, 0]} material={darkTitaniumMaterial} castShadow>
                <cylinderGeometry args={[0.11, 0.11, 0.04, 24]} />
              </mesh>

              {/* Copper Stator Coils */}
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

              {/* Central Propeller Hub Nut */}
              <mesh position={[0, 0.14, 0]} material={anodizedRedMaterial}>
                <cylinderGeometry args={[0.042, 0.042, 0.05, 6]} />
              </mesh>

              {/* Aerodynamic Carbon Fiber Propellers */}
              <group ref={arm.ref} position={[0, 0.13, 0]}>
                {/* Propeller Blade 1 */}
                <mesh position={[0.55, 0, 0]} material={propMaterial} rotation={[0, 0, arm.isCW ? 0.09 : -0.09]}>
                  <boxGeometry args={[1.05, 0.014, 0.14]} />
                </mesh>
                {/* Propeller Blade 2 */}
                <mesh position={[-0.55, 0, 0]} material={propMaterial} rotation={[0, 0, arm.isCW ? -0.09 : 0.09]}>
                  <boxGeometry args={[1.05, 0.014, 0.14]} />
                </mesh>
              </group>
            </group>
          </group>
        );
      })}
    </group>
  );
}
