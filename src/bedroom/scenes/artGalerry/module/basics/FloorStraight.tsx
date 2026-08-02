import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'


export default function FloorStraight ( { position, rotationY = 0 } : {position: THREE.Vector3, rotationY?: number}) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-straight.glb')

    return ( 
        <group position={position} rotation-y={rotationY}>


            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-straight'].geometry}
                material={materials['floor-straight_3_Material']}
            />
                
        </group>
    )
}