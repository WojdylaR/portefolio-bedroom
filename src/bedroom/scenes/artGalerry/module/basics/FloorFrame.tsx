import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"
import { MAT } from "../materials"
import useScene from "../../../../state/store/useScene"


export default function FloorFrame (   { position, rotation, art, id = null } : TileProps) {

    const { nodes } : { nodes: any, }= useGLTF('/bedroom/artGallery/floor-frame.glb')
    
        const uniforms = useShaderUniforms(art)
        const setFocus = useScene(state => state.setFocus)

    return ( 
    <group position={position} rotation-y={ rotation }>
            
        <mesh
            castShadow
            receiveShadow
            geometry={nodes['floor-frame'].geometry}
            material={MAT.white}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.frame001.geometry}
            material={nodes.frame001.material}
            position={[0, 0.9, 0]}

            onPointerEnter={() => document.body.style.cursor = 'pointer'}
            onPointerLeave={() => document.body.style.cursor = 'default'} 

            onClick={() => setFocus(id)}
            >

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
            geometry={nodes['frame-border001'].geometry}
            material={MAT.black}
            position={[0, 1, 0]}
        />



    </group>
    )
}