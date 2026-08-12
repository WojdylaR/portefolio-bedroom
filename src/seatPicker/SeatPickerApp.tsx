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
            <color args={['#807b7b']} attach={'background'} />
            <OrbitControls />
            <ambientLight color={"#797070"} />
            <directionalLight position={[ 0, 2, 5]} intensity={ 5 } color={"#9e9e9e"}/>
            <Center>
                <Auditoriom />
            </Center>
        </Canvas>
    </div>
}