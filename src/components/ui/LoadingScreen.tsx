"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SimpleGlobe() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const planeRef = React.useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (planeRef.current) {
      planeRef.current.rotation.y += 0.03;
      planeRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#0B4F6C" wireframe />
      </mesh>
      
      <group ref={planeRef}>
        <mesh position={[1.5, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <coneGeometry args={[0.05, 0.2, 4]} />
          <meshBasicMaterial color="#FFD166" />
        </mesh>
      </group>
    </group>
  );
}

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for assets to load (simulate for now)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07121B] overflow-hidden"
        >
          <div className="w-64 h-64 mb-8">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <SimpleGlobe />
            </Canvas>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold font-heading tracking-widest text-white mb-2"
          >
            VOYAGEX
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs tracking-[0.3em] text-[#00A8E8] uppercase"
          >
            Preparing Your Journey...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
