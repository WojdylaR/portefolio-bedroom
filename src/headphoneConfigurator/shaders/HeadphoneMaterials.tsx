import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import type CustomShaderMaterialImpl from 'three-custom-shader-material/vanilla'
import type { MaterialId } from '../store/configurator'
import materialVertexShader from './material/vertex.glsl'
import materialFragmentShader from './material/fragment.glsl'
import { MATERIALS } from '../materials/definitions.type'
import gsap from 'gsap'

type HeadphoneUniforms = {
  uTime: THREE.IUniform<number>
  uRoughness: THREE.IUniform<number>
  uMetalness: THREE.IUniform<number>
  uColor: THREE.IUniform<THREE.Color>
}

export default function HeadphoneMaterials ( { material, color } : { material: MaterialId, color: string }) {

    const materialRef = useRef<CustomShaderMaterialImpl & { uniforms: HeadphoneUniforms }>(null)

    const target = MATERIALS[material]

    const uniforms = useMemo<HeadphoneUniforms>(() => ({
        uTime: new THREE.Uniform(0),
        uRoughness: new THREE.Uniform(0.1),
        uMetalness: new THREE.Uniform(0.1),
        uColor: new THREE.Uniform(new THREE.Color( '#392323'))
    }), [])

    useFrame((state) => {
        if (materialRef.current)
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    })

    useEffect(() => {   

        const targetColor = new THREE.Color(color)

        if (materialRef.current) {
            gsap.to(materialRef.current.uniforms.uRoughness, {
                value: target.roughness,
                duration: 1,
                ease: 'power2.out'
            })
            gsap.to(materialRef.current.uniforms.uMetalness, {
                value: target.metalness,
                duration: 1 ,
                ease: 'power2.out'
            })
            gsap.to(materialRef.current.uniforms.uColor.value, {
                r: targetColor.r,
                g: targetColor.g,
                b: targetColor.b,
                duration: 1 ,
                ease: 'power2.out'
            })
        }
    }, [material, color])


    return <CustomShaderMaterial
        ref={ materialRef }
        baseMaterial={ THREE.MeshStandardMaterial }
        uniforms={ uniforms }
        color={ color }
            vertexShader={ materialVertexShader }
            fragmentShader={ materialFragmentShader }
    />
}