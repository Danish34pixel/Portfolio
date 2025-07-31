import React, { Suspense, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Overview from "./Overview";

// Model component
function Model({ url, onClick, rotationY }) {
  const { scene } = useGLTF(url);
  return (
    <motion.group
      position={[0, -0.05, 0]}
      rotation={[0, rotationY, 0]}
      onClick={onClick}
      animate={{ rotation: [0, rotationY, 0] }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      <primitive object={scene} />
    </motion.group>
  );
}

// Camera setter with smooth zoom
const CameraSetter = React.forwardRef(function CameraSetter(props, ref) {
  const { camera } = useThree();
  const [target, setTarget] = useState(null);

  React.useEffect(() => {
    if (ref) ref.current = { camera, setTarget };
  }, [camera, ref]);

  useFrame(() => {
    if (target) {
      camera.position.lerp(target, 0.08);
      camera.updateProjectionMatrix();
      if (camera.position.distanceTo(target) < 0.01) {
        setTarget(null);
      }
    }
  });
  return null;
});

export default function Mac() {
  const navigate = useNavigate();
  const cameraRef = useRef();
  const modelUrl = "/macbook_pro_2021.glb";
  const zoomDistance = 1.5;
  const [rotationY, setRotationY] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  React.useEffect(() => {
    if (expanded) {
      const timer = setTimeout(() => {
        navigate("/home");
      }, 700); // Wait for animation to finish
      return () => clearTimeout(timer);
    }
  }, [expanded, navigate]);

  function handleZoomAndTilt() {
    setRotationY(Math.PI / 1.25); // 90 degrees in radians
    setTimeout(() => {
      if (cameraRef.current) {
        cameraRef.current.setTarget(new THREE.Vector3(2, 1, zoomDistance));
      }
      setTimeout(() => {
        setShowButton(true);
      }, 200); // 400ms delay before showing mac-container
    }, 100); // 100ms delay before zoom
  }

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [5, -6, 3], fov: 5 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 4, 5]} intensity={10} />
        <Suspense fallback={null}>
          <Model
            url={modelUrl}
            onClick={handleZoomAndTilt}
            rotationY={rotationY}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <CameraSetter ref={cameraRef} />
      </Canvas>
      {showButton && (
        <div
          className={`mac-container absolute z-50 transition-all duration-700 ${
            expanded
              ? "w-full h-screen top-0 left-0 bg-green-200"
              : "w-277 h-163 top-8 left-52   "
          }`}
        >
          {!expanded && (
            <button
              className="absolute left-105 top-80"
              onClick={() => setExpanded(true)}
            >
              Welcome to my portfolio
            </button>
          )}
        </div>
      )}
    </div>
  );
}
