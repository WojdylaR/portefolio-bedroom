// import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
// import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

RectAreaLightUniformsLib.init()

export default function ArtGaleryLight() {
    const ref = useRef<THREE.RectAreaLight>(null!)

    // useHelper( ref, RectAreaLightHelper )

    const { color, intensity, position, size, targetPos } = useControls('rectArt', {
        color: '#c4ccdc',
        intensity: { value: 6.5, min: 0, max: 50 },
        size: { value: { x: 10.2, y: 8.3 }, step: 0.1 },
        position: { value: { x: 6.5, y: 9.2, z: -12 }, step: 0.1 },
        targetPos: { value: { x: 5.2, y: -0.6, z: -22 }, step: 0.1 },
    })

    useEffect(() => {
        ref.current?.lookAt(targetPos.x, targetPos.y, targetPos.z)
    }, [targetPos, position])

    return (
        <rectAreaLight
            ref={ref}
            width={ 20}
            height={size.y}
            intensity={intensity}
            color={color}
            position={[position.x, position.y, position.z]}
        />
    )
}