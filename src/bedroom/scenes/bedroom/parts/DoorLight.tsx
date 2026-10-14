import * as THREE from 'three'
import { useControls } from 'leva'
import { useState, } from 'react'
import PointLightDoor from '../../lights/PointLightDoor'


export default function DoorLight({ geometry }: { geometry: THREE.BufferGeometry }) {

    const [ lightOn, setLightOn ] = useState(false)

    const { lightGlow } = useControls('DoorGlow' , {
    
        lightGlow: {
          value: 7,
          step: 0.1,
          min: 0,
          max: 100
        }
      })

    return (<>
            <mesh
                name="doorLight"
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
                onClick={() => setLightOn(value => !value)}
                onPointerOver={() => { document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { document.body.style.cursor = 'auto' }}
            >
                <meshStandardMaterial color={ '#9db8e0' } emissive= { '#9db8e0' } emissiveIntensity={ lightOn ? lightGlow : 0 } toneMapped={false}/>
            </mesh>
            <PointLightDoor state={ lightOn } />
        </>
    )
}