import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import woodVertexShader from '../../shaders/wood/vertex.glsl'
import woodFragmentShader from '../../shaders/wood/fragment.glsl'


export default function FloorFrame ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-frame.glb')

    return ( 
    <group position={position} rotation-y={rotationY}>


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
                material={materials.frame_Material}
                position={[0, 0.9, 0]}
            >
            <CustomShaderMaterial
                    baseMaterial={ THREE.MeshStandardMaterial }
                    vertexShader={ woodVertexShader }
                    fragmentShader={ woodFragmentShader }
            /></mesh>
        
    </group>
    )
}