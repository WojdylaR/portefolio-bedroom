import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type CustomShaderMaterialImpl from 'three-custom-shader-material/vanilla'
import { useFrame } from "@react-three/fiber"
import {  useRef } from "react"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"

type MaterialUniforms = {
  uTime: THREE.IUniform<number>
}

export default function FloorPedestal (  { position, rotation, art  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-pedestal.glb')

    const materialRef = useRef<CustomShaderMaterialImpl & { uniforms: MaterialUniforms }>(null)

    useFrame((state) => {
        
        if (materialRef.current)
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    })

    const uniforms = useShaderUniforms(art)

    return ( 
        <group position={position} rotation-y={ rotation }>


            <mesh
                castShadow
                receiveShadow
                position={[0, 3., 0]}
            >
                <icosahedronGeometry args={[0.5, 10]} />
                { art && <CustomShaderMaterial
                        baseMaterial={ THREE.MeshStandardMaterial }
                        vertexShader={ art.vertexShader }
                        fragmentShader={ art.fragmentShader }
                        uniforms={uniforms}
                />
                }
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