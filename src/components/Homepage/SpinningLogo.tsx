import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Rotating Text Component
const RotatingText = () => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <Text
      ref={ref}
      font="Roboto"
      fontSize={3.58}
      color="white"
      anchorX="center"
      anchorY="middle"
      {...{
        depth: 1,
      }}
    >
      &lt;PJ&gt;
    </Text>
  );
};

const SpinningText = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 1, 1]} />
      <RotatingText />
      <OrbitControls />
    </Canvas>
  );
};

export default SpinningText;
