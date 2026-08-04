import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"


export default function FloorT ( { position, rotation,  } : TileProps) {

    const { nodes } : { nodes: any }= useGLTF('/bedroom/artGallery/floor-t.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor002.geometry}
                material={MAT.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.post002.geometry}
                material={MAT.black}
                position={[0, 0.2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rope002.geometry}
                material={MAT.red}
                position={[0, 1, 0]}
            />
        </group>
    )
}