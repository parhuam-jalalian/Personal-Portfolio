import React, { Suspense, useEffect, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import CanvasLoader from "../Loader";

const LegendaryChest = ({ isMobile }) => {
    const LegendaryChest = useGLTF("./chest/chest.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={1}/>
            <spotLight
                position={[150, 10, 300]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={LegendaryChest.scene}
                scale={isMobile ? 0.025 : 0.045}
                position={isMobile ? [-.1, -2.0, 0.05] : [-.5, -2.1, 0.05]}
                rotation={[-0.01, 1.4, 0]}
            />
        </mesh>
    );
};

const LegendaryChestCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Change isMobile variable
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);


    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    enableRotate={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate={true}
                />
                <LegendaryChest isMobile={isMobile} />
            </Suspense>

            <Preload all />
            <EffectComposer>
                {/* Add other post-processing effects here */}
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} intensity={0.5} radius={1} />

                {/* <Scanline
                    blendFunction={BlendFunction.OVERLAY} // blend mode
                    density={1.25} // scanline density
                /> */}
            </EffectComposer>
        </Canvas>
    );
};

export default LegendaryChestCanvas;