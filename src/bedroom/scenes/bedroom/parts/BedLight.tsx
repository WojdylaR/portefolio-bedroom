import * as THREE from 'three'
import { useControls } from 'leva'
import PointLightBed from '../../lights/PointLightBed'
import useScene from '../../../state/store/useScene'


export default function BedLight({ geometry }: { geometry: THREE.BufferGeometry }) {

    
    const setLamp = useScene(state => state.setLamp)
    
    const toggleLamp = useScene(state => state.toggleLamp)

    const { lightGlow } = useControls('orangeGlow' , {
    
        lightGlow: {
          value: 3.5,
          step: 0.1,
          min: 0,
          max: 100
        }
      })

    return (<>
            <mesh
                name="bedLight"
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
                onClick={() => setLamp(!toggleLamp)}
                onPointerOver={() => { document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { document.body.style.cursor = 'auto' }}
            >
                {toggleLamp
                    ? <meshStandardMaterial color={"#e98c53"} emissive={"#e98c53"} emissiveIntensity={lightGlow} toneMapped={false} />
                    : <meshStandardMaterial color="#583d20" roughness={1} />
                }
            </mesh>
            <PointLightBed state={ toggleLamp } />
        </>
    )
}