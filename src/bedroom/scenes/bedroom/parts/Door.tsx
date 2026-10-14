import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ArtGaleryLight from '../../lights/ArtGaleryLight'
import useScene from '../../../state/store/useScene'
const OPEN_ANGLE = Math.PI / 2.05

export default function Door({ geometry }: { geometry: THREE.BufferGeometry }) {

    const ref = useRef<THREE.Mesh>(null)

    
        const setDoor = useScene(state => state.setDoor)
        
        const toggleDoor = useScene(state => state.toggleDoor)

    const bakedDoor = useTexture('./bedroom/door_baked.webp')
    bakedDoor.flipY = false
    bakedDoor.anisotropy = 16

    useEffect(() => {
        if (!ref.current) return

        gsap.killTweensOf(ref.current.rotation)
        gsap.to(ref.current.rotation, {
            z: toggleDoor ? OPEN_ANGLE : 0,
            duration: 2.5,
            ease: 'elastic.out(1, 0.75)'
        })
    }, [toggleDoor])

    return (
        <>
            <mesh
                ref={ref}
                name="door"
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
                position={[3.5, 0.2, -5.3]} 
                onClick={() => setDoor(!toggleDoor)}
                onPointerOver={() => { document.body.style.cursor = 'pointer' }}
                onPointerOut={() => { document.body.style.cursor = 'auto' }}
            >
                <meshStandardMaterial map={bakedDoor} />
            </mesh>
            <ArtGaleryLight state={toggleDoor} />
        </>
    )
}