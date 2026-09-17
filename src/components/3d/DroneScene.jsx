import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { DroneModel } from './DroneModel';
import * as THREE from 'three';

/**
 * Camera & Drone Parallax Rig
 * Controlled, elegant pointer tracking without aggressive tilting
 */
function DroneRig({ children, enableParallax = true }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!enableParallax) return;
    const { pointer } = state;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.2,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.12,
        0.04
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

/**
 * Aerospace Product Studio Lighting
 * Emulates high-end automotive / aerospace industrial product photography:
 * - High-intensity neutral overhead key light
 * - Crisp rim backlighting for sharp silhouette separation
 * - Neutral ambient fill so carbon weave and titanium hardware are readable
 * - Subtle restrained red accent kicker from rear-underneath
 */
function AerospaceStudioLighting() {
  return (
    <>
      {/* Neutral ambient fill for shadow detail */}
      <ambientLight intensity={0.85} color="#e5e7eb" />

      {/* Main Overhead Studio Key Light */}
      <directionalLight
        position={[6, 9, 8]}
        intensity={2.6}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Lateral Fill Light (Left-Front) */}
      <directionalLight
        position={[-7, 3, 6]}
        intensity={1.4}
        color="#d1d5db"
      />

      {/* Precision High-Angle Silhouette Contour / Rim Light */}
      <directionalLight
        position={[0, 7, -8]}
        intensity={2.8}
        color="#ffffff"
      />

      {/* Subtle Low-Angle Engineering Red Kicker (Restrained Accent) */}
      <directionalLight
        position={[2, -4, -6]}
        intensity={0.85}
        color="#ff2222"
      />
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
        <span className="editorial-tag red-dot">IK-04 // 4.0 IN-HOUSE AIRCRAFT</span>
      </div>
    </div>
  );
}

export function DroneScene({
  isCompact = false,
  isExploded = false,
  enableOrbit = true,
  autoRotate = false,
  className = '',
}) {
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`drone-scene-wrapper ${isCompact ? 'compact' : ''} ${className}`}>
      {hasWebGLError ? (
        <DroneFallback />
      ) : (
        <Canvas
          shadows
          camera={{ position: [3.6, 2.0, 4.2], fov: 40 }}
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
          <AerospaceStudioLighting />

          <Suspense fallback={null}>
            <Float
              speed={isExploded ? 0 : 1.2}
              rotationIntensity={isExploded ? 0 : 0.08}
              floatIntensity={isExploded ? 0 : 0.15}
              floatingRange={[-0.05, 0.05]}
            >
              <DroneRig enableParallax={!isExploded}>
                <DroneModel
                  scale={isCompact ? 0.95 : 1.15}
                  isExploded={isExploded}
                />
              </DroneRig>
            </Float>

            {/* Studio Floor Contact Shadow */}
            <ContactShadows
              position={[0, -1.15, 0]}
              opacity={0.65}
              scale={7}
              blur={2.4}
              far={4.0}
              color="#000000"
            />
          </Suspense>

          {/* Smooth user inspection control */}
          {enableOrbit && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.75}
              minPolarAngle={Math.PI / 3.4}
              dampingFactor={0.06}
              rotateSpeed={0.55}
            />
          )}
        </Canvas>
      )}
    </div>
  );
}
