import "./HeadphoneConfiguratorApp.css"
import { Center, Environment, OrbitControls, ContactShadows} from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Headphone from './scenes/headphone/Headphone'
import * as THREE from 'three'
import Interface from "./ui/Interface";
import { Suspense } from "react";
import LoadTracker from "./scenes/headphone/utils/LoadTracker";
import LoadingPage from "./ui/loading/LoadingPage";

export default function HeadphoneConfiguratorApp () {


    return (
        <span className="headphone-configurator-app">

            <LoadingPage />

            <span className="canvas-wrapper">
            <Canvas 
                    gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
                            camera={{
                                fov: 45,
                                near: 0.01,
                                far: 100,
                                position: [0, 100.57, 40],
                                
                            }}
                    shadows
                >
                    <Suspense fallback={ null }>

                        <LoadTracker />

                        <OrbitControls minDistance={2} maxDistance={15}  makeDefault enablePan={false} />
                        <Environment environmentIntensity={0.75} preset="studio" background={ false } />
                        <Center>
                            <Headphone />
                            <ContactShadows
                                position={[0, -0.3, 0]}
                                scale={6}
                                far={100}
                                blur={2.5}
                                opacity={0.4}
                                resolution={512}
                                />
                        </Center>
                        
                </Suspense>
            </Canvas>
            
            </span>
            <Interface />
        </span>
    )
}