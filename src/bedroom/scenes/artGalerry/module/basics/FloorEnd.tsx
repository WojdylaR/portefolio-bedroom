import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"


export default function FloorEnd ( { position, rotation,  } : TileProps) {

    const { nodes } : { nodes: any }= useGLTF('/bedroom/artGallery/floor-end.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={MAT.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.post.geometry}
                material={MAT.black}
                position={[0, 0.2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rope.geometry}
                material={MAT.red}
                position={[0, 1.1, 0]}
            />
        </group>
    )
}