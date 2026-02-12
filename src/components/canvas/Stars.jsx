import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ isMobile }) => {
  const ref = useRef();
  const count = isMobile ? 500 : 2000; // reduce particle count for mobile
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 500;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        frameloop={isMobile ? "demand" : "always"}
        camera={{ position: [0, 0, 1] }}
        dpr={isMobile ? 0.8 : 1.5}
        shadows={false}
      >
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
