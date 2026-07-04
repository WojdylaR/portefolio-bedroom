
import { useLayoutEffect, useRef, useState } from 'react'
import { Box3, Object3D, Vector3, type Object3DEventMap } from 'three'
import * as THREE from 'three'


export default function Paint ( {geometry, texture}: {geometry: THREE.BufferGeometry, texture: THREE.Texture}) {

    const [position, setPosition] = useState(new Vector3(0, 0, 0))  
    const [size, setSize] = useState(new Vector3(0, 0, 0))  

    const paintRef = useRef<Object3D<Object3DEventMap>>(null)

    useLayoutEffect(() => {

        const box3 = new Box3()
        
        if(paintRef.current) {
            paintRef.current.updateWorldMatrix(true, true)
            box3.setFromObject(paintRef.current)
            let tempPosition = new Vector3(0)
            let tempSize = new Vector3(0)

            box3.getCenter(tempPosition)
            setPosition(tempPosition)
            box3.getSize(tempSize)
            setSize(tempSize)
        }

    }, [])

    return (
        <>
            <mesh
                ref={paintRef}
                castShadow
                receiveShadow
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
            />

            <mesh 
                scale={size}
                position={ [position.x, position.y, position.z + 0.1]}
            >
                <planeGeometry/>
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}