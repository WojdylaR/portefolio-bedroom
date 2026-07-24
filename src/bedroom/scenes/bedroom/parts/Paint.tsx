import { useMemo } from 'react'
import { Matrix4, Vector3 } from 'three'
import * as THREE from 'three'

export default function Paint({ geometry, texture }: { geometry: THREE.BufferGeometry, texture: THREE.Texture }) {

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
                receiveShadow
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                scale={[size.x, size.y, 1]}
                position={[position.x, position.y, position.z + 0.1]}
            >
                <planeGeometry />
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}