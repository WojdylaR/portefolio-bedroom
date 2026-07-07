
import { useMemo } from 'react'
import { Vector3, Matrix4 } from 'three'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import useScene from '../../../state/store/useScene'

export default function Screen ( {geometry}: {geometry: THREE.BufferGeometry}) {

    const focusScreen = useScene(state => state.focusScreen)
    const focusReset = useScene(state => state.focusReset)

    const focus = useScene(state => state.focus)


    const { position, size } = useMemo(() => {
            if (!geometry.boundingBox) geometry.computeBoundingBox()
    
            const box = geometry.boundingBox!.clone()
            box.applyMatrix4(new Matrix4().makeRotationX(Math.PI / 2))
    
            return {
                position: box.getCenter(new Vector3()),
                size: box.getSize(new Vector3()),
            }
        }, [geometry])

    return (
       <>
            <mesh
                castShadow
                receiveShadow
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}


                onPointerEnter={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'} 
                name="screen"
                onClick={focusScreen}
                onPointerMissed={focusReset}
            >
                <meshBasicMaterial color='black' />
                </mesh>
            <mesh
                scale={[size.x, size.y, 1]}
                position={[position.x  + 0.02, position.y, position.z - 0.1 ]}
                rotation={ [0, Math.PI, 0]}
            
            >
                <Html
                    transform
                    occlude={focus === 'idle'}
                    wrapperClass='htmlScreen'
                    distanceFactor={ 0.5 }
                
                >
                    <iframe src='./ecran-projets.html' 
                    
                    />
                </Html>
            </mesh>
        </>
    )
}