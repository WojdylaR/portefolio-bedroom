import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function FloorStraight ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-straight.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-straight'].geometry}
                material={materials['floor-straight_3_Material']}
            />
                
        </group>
    )
}