import { Center, OrbitControls } from '@react-three/drei'
import './SeatPickerApp.css'

import { Canvas } from '@react-three/fiber'
import Auditoriom from './scene/Auditorium'
import CameraRig from './scene/CameraRig'
import { Perf } from 'r3f-perf'


export default function SeatPickerApp() {

   

    return <div className='seat-picker-app'>
        <Canvas
                camera={{
                    fov: 50,
                    near: 0.01,
                    far: 250,
                    position: [0, 7, 7],
                    
                }}
            shadows
        >
            {/* <OrbitControls /> */}
            <Perf />
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