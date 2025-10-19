import { Environment, Lightformer, SpotLight } from "@react-three/drei";
import React from "react";

const StudioLights = () => {
  return (
    <>
      <group name="lights ">
        <Environment resolution={256}>
          <group>
            <Lightformer form="rect" intensity={10} position={[-10,5,-5]} scale={10} rotation-y={Math.PI/2}   />
            <Lightformer form="rect" intensity={10} position={[10,0,1]} scale={10} rotation-y={Math.PI/2}   />
          </group>
        
        </Environment>

        <spotLight
          angle={1}
          position={[0, -1.2, -1.5]}
          intensity={20}
          decay={1}
        />
        <spotLight angle={1} position={[2, 1, 0.5]} color={"green"} intensity={20} decay={1} />
        <spotLight angle={1} position={[-2, 1, 0.5]} color={"orange"} intensity={20} decay={1} />
        <spotLight angle={1} position={[0, 2, 2]} color={'white'} intensity={10} decay={1} />
      </group>
    </>
  );
};

export default StudioLights;
