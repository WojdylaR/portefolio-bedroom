import { useControls } from 'leva'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import useLayers from '../../utils/useLayers'
import { mergeRefs } from '../../utils/mergeRefs'
import { ART_GALLERY } from './layers'

RectAreaLightUniformsLib.init()

export default function ArtGaleryLight({ state }: { state: boolean }) {
    const ref = useRef<THREE.RectAreaLight>(null!)
    const layersRef = useLayers(ART_GALLERY)
    const mergedRef = useMemo(() => mergeRefs(ref, layersRef), [layersRef])

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
            ref={mergedRef}
            width={size.x}
            height={size.y}
            intensity={state ? intensity : 0}
            color={color}
            position={[position.x, position.y, position.z]}
        />
    )
}