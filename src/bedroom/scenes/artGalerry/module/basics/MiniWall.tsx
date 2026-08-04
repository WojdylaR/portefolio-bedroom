import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function MiniWall (  { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/wall.glb')

    return ( 
        <group position={position} rotation-y={ rotation }>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall.geometry}
                material={materials.wall_1_Material}
                position-z={0.9}
            />

            
        </group>
    )
}