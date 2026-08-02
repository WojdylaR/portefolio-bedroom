import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'


export default function FloorCross ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-cross.glb')

    return ( 
        <group position={position} rotation-y={rotationY}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-cross'].geometry}
                material={materials['floor-cross_Material']}
            />
        </group>
    )
}