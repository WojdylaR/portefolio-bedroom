import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type CustomShaderMaterialImpl from 'three-custom-shader-material/vanilla'
import { useFrame } from "@react-three/fiber"
import {  useRef } from "react"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"
import { MAT } from "../materials"
import useScene from "../../../../state/store/useScene"

type MaterialUniforms = {
  uTime: THREE.IUniform<number>
}

export default function FloorPedestal (  { position, rotation, art, id = null   } : TileProps) {

    const { nodes } : { nodes: any }= useGLTF('/bedroom/artGallery/floor-pedestal.glb')

    const materialRef = useRef<CustomShaderMaterialImpl & { uniforms: MaterialUniforms }>(null)

    const setFocus = useScene(state => state.setFocus)
    const focus = useScene(state => state.focus)

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
                geometry={nodes.decoration.geometry}
                material={MAT.black}
                position={[0, 0.2, 0]}
                
                onPointerEnter={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'} 
                onClick={() => setFocus(id)}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-pedestal'].geometry}
                material={MAT.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.object.geometry}
                position={[0, 3.5, 0]}
                
                onPointerEnter={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'} 
                onClick={() => focus !== id ? setFocus(id) : setFocus(null)}

            >
                <icosahedronGeometry args={[0.6, 10]} />
                { art && <CustomShaderMaterial
                        baseMaterial={ THREE.MeshStandardMaterial }
                        vertexShader={ art.vertexShader }
                        fragmentShader={ art.fragmentShader }
                        uniforms={uniforms}
                />
                }
            </mesh>
        </group>
    )
}