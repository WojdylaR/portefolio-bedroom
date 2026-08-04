import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function FloorCross ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-cross.glb')

    return ( 
        <group position={position} rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-cross'].geometry}
                material={materials['floor-cross_Material']}
            />
        </group>
    )
}