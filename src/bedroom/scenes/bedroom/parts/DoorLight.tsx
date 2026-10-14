import * as THREE from 'three'
import { useControls } from 'leva'
import PointLightDoor from '../../lights/PointLightDoor'
import useScene from '../../../state/store/useScene'


export default function DoorLight({ geometry }: { geometry: THREE.BufferGeometry }) {

    const setNeon = useScene(state => state.setNeon)
        
    const toggleNeon = useScene(state => state.toggleNeon)

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
                onClick={() => setNeon(!toggleNeon)}
                onPointerOver={() => { document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { document.body.style.cursor = 'auto' }}
            >
                <meshStandardMaterial color={ '#9db8e0' } emissive= { '#9db8e0' } emissiveIntensity={ toggleNeon ? lightGlow : 0 } toneMapped={false}/>
            </mesh>
            <PointLightDoor state={ toggleNeon } />
        </>
    )
}