import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Headphone from './scenes/headphone/Headphone'
import { Perf } from "r3f-perf";
import * as THREE from 'three'

export default function HeadphoneConfiguratorApp () {

    return (
        <>
            <Canvas 
            gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
                    camera={{
                        fov: 45,
                        near: 0.01,
                        far: 100,
                        position: [0, 1, 50]
                    }}
                >
                    
                <Perf position="top-left"/>
                    
                <OrbitControls  makeDefault />
                <Environment preset="studio" background={ false } />
                <color attach={'background'} args={ [ '#3a3a3a']} />
                <Center>
                    <Headphone />
                </Center>
            </Canvas>
        </>
    )
}