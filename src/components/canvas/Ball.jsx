/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

/////////////////////////////
const Ball = (props) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  });
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};
