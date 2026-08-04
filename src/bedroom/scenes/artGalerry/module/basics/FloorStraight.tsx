import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"


export default function FloorStraight ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-straight.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor003.geometry}
                material={MAT.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.post003.geometry}
                position={[0, 0.2, 0]}
                material={MAT.black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rope003.geometry}
                position={[0, 1, 0]}
                material={MAT.red}
            />
        </group>
    )
}