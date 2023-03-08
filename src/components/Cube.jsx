import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)

  );
  return (
    <mesh scale={[2, 2, 2]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <boxGeometry/>
      <OrbitControls enableZoom={false}/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />

          <color attach="background" args={["#dc9dcd"]} />

          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>

        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;