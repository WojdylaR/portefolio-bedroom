import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"


export default function FloorFrame (   { position, rotation, art  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-frame.glb')
    
        const uniforms = useShaderUniforms(art)

    return ( 
    <group position={position} rotation-y={ rotation }>


            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-frame'].geometry}
                material={materials['floor-frame_Material']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['frame-f'].geometry}
                position={[0, 0.9, 0]}
                // rotation-x={- Math.PI / 2}
            >
                {/* <planeGeometry args={ [2.8, 2.8, 50, 50] } /> */}
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