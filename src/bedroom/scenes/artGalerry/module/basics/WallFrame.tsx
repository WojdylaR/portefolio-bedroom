import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"
import { MAT } from "../materials"


export default function WallFrame (  { position, rotation, art  } : TileProps) {

    const { nodes } : { nodes: any }= useGLTF('/bedroom/artGallery/wall-frame.glb')

    const uniforms = useShaderUniforms(art)

    return ( 
        <group position={position} rotation-y={ rotation }>

        <mesh
                castShadow
                receiveShadow
                geometry={nodes.frame.geometry}
                position={[0, 1.3, 0]}
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
                geometry={nodes['frame-border'].geometry}
                material={MAT.black}
                position={[0, 1.2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['wall-frame'].geometry}
                material={MAT.white}
            />
        </group>
    )
}