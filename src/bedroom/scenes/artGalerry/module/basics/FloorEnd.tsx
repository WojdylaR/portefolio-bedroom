import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function FloorEnd ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-end.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-end'].geometry}
                material={materials['floor-end_Material']}
            />
        </group>
    )
}