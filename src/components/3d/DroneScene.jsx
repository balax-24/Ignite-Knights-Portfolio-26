import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { DroneModel } from './DroneModel';
import { TechnicalHUD } from './TechnicalHUD';
import { AircraftHotspots } from './AircraftHotspots';
import * as THREE from 'three';

/**
 * Camera & Drone Parallax Rig
 */
function DroneRig({ children, enableParallax = true }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!enableParallax) return;
    const { pointer } = state;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.35,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

/**
 * Aerospace key and rim lighting
 */
function AerospaceLighting() {
  return (
    <>
      <ambientLight intensity={0.45} />
      {/* High-intensity overhead neutral key light */}
      <directionalLight
        position={[6, 10, 8]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Soft fill light from front left */}
      <directionalLight position={[-8, 4, 6]} intensity={0.6} color="#c0c8e0" />
      {/* Strategic aerospace red rim / underglow light */}
      <spotLight
        position={[0, -4, -2]}
        intensity={2.8}
        color="#ff1a14"
        distance={12}
        angle={0.8}
        penumbra={0.7}
      />
      {/* Rear red accent edge light */}
      <directionalLight position={[0, 3, -8]} intensity={1.5} color="#e10600" />
    </>
  );
}

/**
 * 3D Scene Fallback for low-power devices / WebGL errors
 */
function DroneFallback() {
  return (
    <div className="drone-fallback-view">
      <img
        src="/assets/drone-hero.jpg"
        alt="Ignite Knights 4.0 Development UAV"
        className="drone-fallback-img"
      />
      <div className="drone-fallback-overlay">
        <span className="tech-label tech-label-red">IK-04 // 4.0 DEVELOPMENT UAV PLATFORM</span>
      </div>
    </div>
  );
}

export function DroneScene({
  isCompact = false,
  showHotspots = true,
  showHUD = true,
  isExploded = false,
  onToggleExploded,
  enableOrbit = true,
  autoRotate = false,
}) {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeSubsystem, setActiveSubsystem] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`drone-scene-wrapper ${isCompact ? 'compact' : 'hero-mode'}`}>
      {/* Interactive HUD telemetry overlay */}
      {showHUD && <TechnicalHUD activeSubsystem={activeSubsystem} />}

      {/* Interactive Subsystem Hotspots Overlay */}
      {showHotspots && (
        <AircraftHotspots
          activeHotspot={activeSubsystem}
          onSelectHotspot={setActiveSubsystem}
          isExploded={isExploded}
          onToggleExploded={onToggleExploded}
        />
      )}

      {hasWebGLError ? (
        <DroneFallback />
      ) : (
        <Canvas
          shadows
          camera={{ position: [3.8, 2.2, 4.2], fov: 42 }}
          dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          onError={() => setHasWebGLError(true)}
          style={{ width: '100%', height: '100%' }}
        >
          <AerospaceLighting />

          <Suspense fallback={null}>
            <Float
              speed={isExploded ? 0 : 1.4}
              rotationIntensity={isExploded ? 0 : 0.15}
              floatIntensity={isExploded ? 0 : 0.25}
              floatingRange={[-0.08, 0.08]}
            >
              <DroneRig enableParallax={!isExploded}>
                <DroneModel
                  scale={isCompact ? 0.95 : 1.15}
                  isExploded={isExploded}
                  activeSubsystem={activeSubsystem}
                  onSubsystemClick={setActiveSubsystem}
                />
              </DroneRig>
            </Float>

            {/* Aerospace Ground Radar Shadow */}
            <ContactShadows
              position={[0, -1.2, 0]}
              opacity={0.65}
              scale={6}
              blur={2.4}
              far={4.5}
              color="#000000"
            />
          </Suspense>

          {/* Smooth user inspection control */}
          {enableOrbit && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={0.6}
              maxPolarAngle={Math.PI / 1.7}
              minPolarAngle={Math.PI / 3.4}
              dampingFactor={0.06}
              rotateSpeed={0.6}
            />
          )}
        </Canvas>
      )}
    </div>
  );
}
