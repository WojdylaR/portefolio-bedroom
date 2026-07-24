import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Headphone from './scenes/headphone/Headphone'
import { Perf } from "r3f-perf";

export default function HeadphoneConfigurator () {

    return (
        <>
            <Canvas 
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ 2.5, 4, 60 ]
                } }
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