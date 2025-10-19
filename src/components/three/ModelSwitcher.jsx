import { PresentationControls} from "@react-three/drei";
import React, { useRef } from "react";
import MacBook16 from "../models/Macbook-16";

import MacBook14 from "../models/Macbook-14";

const Animation_Duratioin = 1;
const Offset_Distance = 5;

const fadeMeshes = (group,opacity) =>{
    if(!group) return;

    group.treavers
}


const ModelSwitcher = ({scale,isMobile}) => {
    const smallMacBookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05

    const controlsConfig = {
          snap :true,
          speed:1,
          zoom:1,
          polar : [-Math.PI,Math.PI] ,// for rotation of up and bottom
        //   azimuth: [-Infinity,Infinity]
        config: {mass:1,tension:0,friction:26}
    }

  return (
   <>
    <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
            <MacBook16 scale={isMobile ? 0.05: 0.08}/>
        </group>
    </PresentationControls>
     {/* <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
            <MacBook14 scale={isMobile ? 0.03: 0.06}/>
        </group>
    </PresentationControls> */}
   </>
  );
};

export default ModelSwitcher;
