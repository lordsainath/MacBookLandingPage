import { useContext } from "react";
import { productDataContext } from "../contexts/ProductContext";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

import StudioLights from "./models/StudioLights";
import MacBook14 from "./models/Macbook-14";

const ProductViewer = () => {
  const [color, setColor, scale, setScale] = useContext(productDataContext);
  return (
    <>
      <section id="product-viewer">
        <h2>Take a closer look</h2>

        <div className="controls">
          <p className="info">
            MacBook Pro {scale === 0.08 ? 16 : 14}" in Space{" "}
            {color === "#adb5db" ? "Sky Alloy" : "Obsidian Black"}
          </p>

          <div className="flex-center gap-5 mt-5">
            <div className="color-control">
              <div
                onClick={() => setColor("#adb5db")}
                className={`${color === "#adb5db" && "active"} bg-neutral-300`}
              ></div>
              <div
                onClick={() => setColor("#2e2c2e")}
                className={`${color === "#2e2c2e" && "active"} bg-neutral-900`}
              ></div>
            </div>

            <div className="size-control">
              <div
                onClick={() => setScale(0.06)}
                className={`${
                  scale === 0.06
                    ? "bg-transparent text-white"
                    : "bg-white text-black"
                }`}
              >
                <p>14"</p>
              </div>
              <div
                onClick={() => setScale(0.08)}
                className={`${
                  scale === 0.08
                    ? "bg-transparent text-white"
                    : "bg-white text-black"
                }`}
              >
                <p>16"</p>
              </div>
            </div>
          </div>
        </div>

        <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:0.1 , far:100}}>
         <MacBook14 scale={0.06}/>
              {/* <ambientLight intensity={1}/> */}
          <StudioLights/>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </section>
    </>
  );
};

export default ProductViewer;
