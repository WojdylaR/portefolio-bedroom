import { Center } from '@react-three/drei'
import './SeatPickerApp.css'

import { Canvas } from '@react-three/fiber'
import Auditoriom from './scene/Auditorium'
import CameraRig from './scene/CameraRig'


export default function SeatPickerApp() {

   

    return <div className='seat-picker-app'>
        <Canvas
                camera={{
                    fov: 50,
                    near: 0.01,
                    far: 100,
                    position: [0, 7, 7],
                    
                }}
            shadows
        >
            <color args={['#807b7b']} attach={'background'} />
            <ambientLight color={"#797070"} />
            <directionalLight position={[ 0, 5, - 10]} intensity={ 1 } color={"#dcdcdc"}/>
            <CameraRig />
            <Center>
                <Auditoriom />
            </Center>
        </Canvas>
    </div>
}