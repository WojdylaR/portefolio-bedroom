import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import type CustomShaderMaterialImpl from 'three-custom-shader-material/vanilla'
import type { MaterialId } from '../materials/definitions.type'
import materialVertexShader from './material/vertex.glsl'
import materialFragmentShader from './material/fragment.glsl'
import { MATERIAL_ID } from '../materials/definitions.type'
import gsap from 'gsap'




type HeadphoneUniforms = {
  uTime: THREE.IUniform<number>
  uMaterialFrom: THREE.IUniform<number>
  uMaterialTo: THREE.IUniform<number>
  uColor: THREE.IUniform<THREE.Color>
  uProgress: THREE.IUniform<number>
}

export default function HeadphoneMaterials ( { material, color } : { material: MaterialId, color: string }) {

    const materialSelected = MATERIAL_ID[material]

    const isFirstRun = useRef(true)

    const materialRef = useRef<CustomShaderMaterialImpl & { uniforms: HeadphoneUniforms }>(null)

    const uniforms = useMemo<HeadphoneUniforms>(() => ({
        uTime: new THREE.Uniform(0),
        uMaterialFrom: new THREE.Uniform(materialSelected),
        uMaterialTo: new THREE.Uniform(materialSelected),
        uColor: new THREE.Uniform(new THREE.Color( color )),
        uProgress: new THREE.Uniform( 0 ),
    }), [])

    useFrame((state) => {
        if (materialRef.current)
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    })

    useEffect(() => {   

        const targetColor = new THREE.Color(color)

            if (isFirstRun.current) {
                isFirstRun.current = false
            return
        }

        if (materialRef.current) {

             gsap.killTweensOf(materialRef.current.uniforms.uProgress)
            gsap.killTweensOf(materialRef.current.uniforms.uColor.value)

             materialRef.current.uniforms.uMaterialFrom.value = materialRef.current.uniforms.uMaterialTo.value
            materialRef.current.uniforms.uProgress.value = 0
        materialRef.current.uniforms.uMaterialTo.value = materialSelected


            materialRef.current.uniforms.uMaterialTo.value = materialSelected
            gsap.to(materialRef.current.uniforms.uColor.value, {
                r: targetColor.r,
                g: targetColor.g,
                b: targetColor.b,
                duration: 1 ,
                ease: 'power2.out'
            })
            gsap.to(materialRef.current.uniforms.uProgress, {
                value: 1,
                duration: 1,
                ease: 'power2.out',
                onComplete : () => {
                    if (materialRef.current) {
                        materialRef.current.uniforms.uMaterialFrom.value = materialSelected
                        materialRef.current.uniforms.uProgress.value = 0
                    }
                }
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