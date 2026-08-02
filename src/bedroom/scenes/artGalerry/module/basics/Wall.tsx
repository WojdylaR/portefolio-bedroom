import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'


export default function Wall ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/wall.glb')

    return ( 
        <group position={position} rotation-y={rotationY}>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall.geometry}
                material={materials.wall_1_Material}
            />

            
        </group>
    )
}