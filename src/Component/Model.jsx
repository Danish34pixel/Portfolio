import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion";

function GLBModel({ rotationY, position, walking }) {
  const gltf = useGLTF("/biped/biped/Animation_Walking_withSkin.glb");
  const ref = useRef();
  const { actions } = useAnimations(gltf.animations, ref);
  useEffect(() => {
    const action = actions && actions[Object.keys(actions)[0]];
    if (action) {
      if (walking) {
        action.reset().play();
      } else {
        action.stop();
      }
    }
  }, [actions, walking]);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = rotationY;
    }
  });
  return (
    <primitive ref={ref} object={gltf.scene} scale={3} position={position} />
  );
}

const Model = () => {
  const [rotationY, setRotationY] = useState(0);
  const [position, setPosition] = useState([0, -2.5, 0]);

  // Handlers for manual position input
  const handleInputChange = (axis, value) => {
    const newPos = [...position];
    newPos[axis] = parseFloat(value);
    setPosition(newPos);
  };

  // Automatically animate x from 0 to 20vw
  const [x, setX] = useState(0);
  const [walking, setWalking] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setX(70); // 20vw
    }, 500);
  }, []);

  // Stop walking as soon as the div finishes its travel
  useEffect(() => {
    if (x === 70) {
      setTimeout(() => setWalking(false), 8000); // match duration
    }
  }, [x]);

  return (
    <motion.div
      style={{
        width: "20%",
        height: "450px",
        backgroundColor: "transparent",
        position: "absolute",
        top: 120,
        left: 0,
        zIndex: 10,
        overflowX: "hidden",
      }}
      initial={{ opacity: 1, y: 50, x: -140 }}
      animate={{ opacity: 1, y: 0, x: `${x}vw` }}
      transition={{ duration: 8 }}
      onAnimationComplete={() => {
        setWalking(false);
        setPosition((pos) => [pos[0], -2.5, pos[2]]);
        setRotationY(-20.5);
      }}
    >
      <Canvas camera={{ position: [-6, 1, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 17]} intensity={1} />
        <Suspense fallback={null}>
          <GLBModel
            rotationY={rotationY}
            position={position}
            walking={walking}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default Model;
