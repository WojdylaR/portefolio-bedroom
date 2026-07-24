import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Headphone from './scenes/headphone/Headphone'
import { Perf } from "r3f-perf";

export default function HeadphoneConfiguratorApp () {

    return (
        <>
            <Canvas 
                    camera={{
                        fov: 45,
                        near: 0.01,
                        far: 100,
                        position: [0, 1, 50]
                    }}
                >
                    
                <Perf position="top-left"/>
                    
                <OrbitControls  makeDefault />
                <Center>
                    <Headphone />
                </Center>
            </Canvas>
        </>
    )
}