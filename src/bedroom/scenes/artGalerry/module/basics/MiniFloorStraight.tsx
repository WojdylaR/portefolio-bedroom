import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function MiniFloorStraight ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/mini-floor-straight.glb')

    return ( 
        <group position={position} rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['mini-floor-straight'].geometry}
                material={materials['mini-floor-straight_Material']}
                position-z={ -0}
            />
        </group>
    )
}