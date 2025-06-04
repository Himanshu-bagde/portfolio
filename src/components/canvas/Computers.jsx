import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Ensure this exists

const Computer = () => {
  const gltf = useGLTF("./desktop_pc/scene.gltf");

  // Optional: Check model in console
  // console.log(gltf);

  return (
    <mesh>
      {gltf?.scene ? (
        <primitive object={gltf.scene} scale={0.75} position={[0, -3.5, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
      ) : (
        <boxGeometry args={[1, 1, 1]}>
          <meshStandardMaterial color="blue" />
        </boxGeometry>
      )}
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={1.2} />
        <spotLight
          position={[10, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Computer />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
