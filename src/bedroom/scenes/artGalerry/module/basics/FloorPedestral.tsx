import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import wobblySphereVertexShader from '../../shaders/wobblySphere/vertex.glsl'
import wobblySphereFragmentShader from '../../shaders/wobblySphere/fragment.glsl'
import type CustomShaderMaterialImpl from 'three-custom-shader-material/vanilla'
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"

type MaterialUniforms = {
  uTime: THREE.IUniform<number>
}

export default function FloorPedestral ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-pedestral.glb')

    const materialRef = useRef<CustomShaderMaterialImpl & { uniforms: MaterialUniforms }>(null)

    const uniforms = useMemo<MaterialUniforms>(() => ({
            uTime: new THREE.Uniform(0),
        }), [])

    useFrame((state) => {
        console.log(materialRef.current?.uniforms)
        if (materialRef.current)
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    })


    return ( 
        <group position={position} rotation-y={rotationY}>


            <mesh
                castShadow
                receiveShadow
                position={[0, 2.6, 0]}
            >
                <icosahedronGeometry args={[0.5, 10]} />
                <CustomShaderMaterial
                        ref={materialRef}
                        baseMaterial={ THREE.MeshStandardMaterial }
                        vertexShader={ wobblySphereVertexShader }
                        fragmentShader={ wobblySphereFragmentShader }
                        uniforms={uniforms}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-pedestal'].geometry}
                material={materials['floor-pedestal_Material']}
            />
            
        </group>
    )
}