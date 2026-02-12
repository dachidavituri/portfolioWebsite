import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.6 : 0.75} // smaller on mobile
      position={isMobile ? [0, -1.5, -2] : [0, -3.25, -1.5]} // raise on mobile
      rotation={[-0.01, -0.2, -0.1]} // same rotation for both
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false} // disable shadows for mobile rendering issues
      dpr={[1, 1]}
      camera={{
        position: isMobile ? [10, 2, 5] : [20, 3, 5], // closer camera on mobile
        fov: isMobile ? 35 : 25, // wider FOV for mobile
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <hemisphereLight intensity={0.35} groundColor="black" />
        <spotLight
          position={[-10, 20, 10]}
          angle={0.2}
          penumbra={1}
          intensity={1}
        />
        <pointLight intensity={0.5} />

        <Computers isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
