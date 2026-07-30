import "./HeadphoneConfiguratorApp.css"
import { Center, Environment, OrbitControls, ContactShadows} from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Headphone from './scenes/headphone/Headphone'
import * as THREE from 'three'
import Interface from "./ui/Interface";

export default function HeadphoneConfiguratorApp () {

    return (
        <span className="headphone-configurator-app">

            <span className="canvas-wrapper">
            <Canvas 
            gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
                    camera={{
                        fov: 45,
                        near: 0.01,
                        far: 10,
                        position: [0, 1.57, 4]
                    }}
                    shadows
                >
                <OrbitControls  makeDefault enablePan={false} />
                <Environment environmentIntensity={0.75} preset="studio" background={ false } />
                <Center>
                    <Headphone />
                    <ContactShadows
                        position={[0, -0.3, 0]}
                        scale={6}
                        far={3}
                        blur={2.5}
                        opacity={0.4}
                        resolution={512}
                        />
                </Center>
                
            </Canvas>
            </span>
            
            <Interface />
        </span>
    )
}