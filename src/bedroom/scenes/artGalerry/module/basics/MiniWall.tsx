import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"


export default function MiniWall (  { position, rotation,  } : TileProps) {

    const { nodes} : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/wall.glb')

    return ( 
        <group position={position} rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall.geometry}
                material={MAT.white}
                position-z={0.9}
            />
        </group>
    )
}