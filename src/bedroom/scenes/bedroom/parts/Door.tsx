import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const OPEN_ANGLE = Math.PI / 2.05

export default function Door({ geometry }: { geometry: THREE.BufferGeometry }) {

    const [open, setOpen] = useState(false)
    const ref = useRef<THREE.Mesh>(null)

    const bakedDoor = useTexture('./bedroom/door_baked.webp')
    bakedDoor.flipY = false
    bakedDoor.anisotropy = 16

    useEffect(() => {
        if (!ref.current) return

        gsap.killTweensOf(ref.current.rotation)
        gsap.to(ref.current.rotation, {
            z: open ? OPEN_ANGLE : 0,
            duration: 2.5,
            ease: 'elastic.out(1, 0.75)'
        })
    }, [open])

    return (
        <mesh
            ref={ref}
            name="door"
            geometry={geometry}
            rotation={[Math.PI / 2, 0, 0]}
            position={[3.5, 0.2, -5.3]} 
            onClick={() => setOpen(value => !value)}
            onPointerOver={() => { document.body.style.cursor = 'pointer' }}
            onPointerOut={() => { document.body.style.cursor = 'auto' }}
        >
            <meshStandardMaterial map={bakedDoor} />
        </mesh>
    )
}