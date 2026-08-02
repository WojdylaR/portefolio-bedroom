import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import woodVertexShader from '../../shaders/wood/vertex.glsl'
import woodFragmentShader from '../../shaders/wood/fragment.glsl'


export default function WallFrame ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/wall-frame.glb')

    return ( 
    <group position={position} rotation-y={rotationY}>


            <mesh
                castShadow
                receiveShadow
                geometry={nodes['frame-w'].geometry}
                material={materials['frame.001_Material']}
                position={[0, 1.3, 0.01]}
            >
                <CustomShaderMaterial
                        baseMaterial={ THREE.MeshStandardMaterial }
                        vertexShader={ woodVertexShader }
                        fragmentShader={ woodFragmentShader }
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['wall-frame'].geometry}
                material={materials['wall-frame_Material']}
            />
        
    </group>
    )
}