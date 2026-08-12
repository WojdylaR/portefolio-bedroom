import { Center, OrbitControls } from '@react-three/drei'
import './SeatPickerApp.css'

import { Canvas } from '@react-three/fiber'
import Auditoriom from './scene/Auditorium'

export default function SeatPickerApp() {

    return <div className='seat-picker-app'>
        <Canvas
                camera={{
                    fov: 45,
                    near: 0.01,
                    far: 100,
                    position: [0, 7, 7],
                    
                }}
            shadows
        >
            <color args={['black']} attach={'background'} />
            <OrbitControls />
            <ambientLight color={"#726b6b"} />
            <pointLight position={[ 0, 2, 2]} intensity={ 10 } color={"#92b29f"}/>
            <Center>
                <Auditoriom />
            </Center>
        </Canvas>
    </div>
}