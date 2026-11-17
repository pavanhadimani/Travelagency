"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Sparkles, Line } from "@react-three/drei";
import * as THREE from "three";

// Coordinates for destinations
const DESTINATIONS = {
  Paris: { lat: 48.8566, lon: 2.3522 },
  Dubai: { lat: 25.2048, lon: 55.2708 },
  Maldives: { lat: 3.2028, lon: 73.2207 },
  Bali: { lat: -8.4095, lon: 115.1889 },
  Switzerland: { lat: 46.8182, lon: 8.2275 },
  Japan: { lat: 36.2048, lon: 138.2529 },
  NewYork: { lat: 40.7128, lon: -74.006 },
  London: { lat: 51.5074, lon: -0.1278 },
  Singapore: { lat: 1.3521, lon: 103.8198 },
  Sydney: { lat: -33.8688, lon: 151.2093 },
};

const RADIUS = 2;

function latLongToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Generate an arc between two points
function getArcPoints(start: THREE.Vector3, end: THREE.Vector3, segments = 50) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3().lerpVectors(start, end, t);
    p.normalize();
    // bulge out in the middle
    const bulge = Math.sin(t * Math.PI) * 0.4;
    p.multiplyScalar(RADIUS + bulge);
    points.push(p);
  }
  return points;
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <group ref={earthRef}>
      {/* Base Earth Sphere */}
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          color="#07121B"
          emissive="#0B4F6C"
          emissiveIntensity={0.2}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.05, 64, 64]} />
        <meshBasicMaterial color="#00A8E8" transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>
      
      {/* Flight Routes */}
      <FlightRoutes />
      
      {/* Markers */}
      {Object.entries(DESTINATIONS).map(([name, coords]) => {
        const pos = latLongToVector3(coords.lat, coords.lon, RADIUS);
        return (
          <group key={name} position={pos}>
            <mesh>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshBasicMaterial color="#FFD166" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function FlightRoutes() {
  // Create some connections between cities
  const connections = [
    ["NewYork", "London"],
    ["London", "Dubai"],
    ["Dubai", "Maldives"],
    ["Dubai", "Singapore"],
    ["Singapore", "Bali"],
    ["Singapore", "Sydney"],
    ["Singapore", "Japan"],
    ["Paris", "Switzerland"],
  ];

  const routes = useMemo(() => {
    return connections.map(([start, end]) => {
      const p1 = latLongToVector3(DESTINATIONS[start as keyof typeof DESTINATIONS].lat, DESTINATIONS[start as keyof typeof DESTINATIONS].lon, RADIUS);
      const p2 = latLongToVector3(DESTINATIONS[end as keyof typeof DESTINATIONS].lat, DESTINATIONS[end as keyof typeof DESTINATIONS].lon, RADIUS);
      return getArcPoints(p1, p2);
    });
  }, [connections]);

  return (
    <group>
      {routes.map((points, i) => (
        <Line key={i} points={points} color="#00A8E8" opacity={0.4} transparent lineWidth={1.5} />
      ))}
    </group>
  );
}

function Airplane() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animation path around the globe
  const path = useMemo(() => {
    const p1 = latLongToVector3(DESTINATIONS.NewYork.lat, DESTINATIONS.NewYork.lon, RADIUS);
    const p2 = latLongToVector3(DESTINATIONS.London.lat, DESTINATIONS.London.lon, RADIUS);
    return getArcPoints(p1, p2, 100);
  }, []);

  const [t, setT] = useState(0);

  useFrame((state, delta) => {
    setT((prev) => (prev + delta * 0.1) % 1);
    const index = Math.floor(t * (path.length - 1));
    const nextIndex = Math.min(index + 1, path.length - 1);
    
    if (groupRef.current) {
      groupRef.current.position.copy(path[index]);
      groupRef.current.lookAt(path[nextIndex]);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simple Airplane Geometry */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.02, 0.1, 4]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function EarthScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-[#07121B]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />
        <pointLight position={[-5, -3, -5]} color="#00A8E8" intensity={2} />
        
        <Earth />
        <Airplane />
        
        <Stars radius={10} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={5} size={2} color="#FFD166" speed={0.4} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
