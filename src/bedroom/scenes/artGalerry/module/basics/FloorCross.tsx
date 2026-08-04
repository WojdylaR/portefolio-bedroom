import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"


export default function FloorCross ( { position, rotation,  } : TileProps) {

    const { nodes } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-cross.glb')

    return ( 
        <group position={position} rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor004.geometry}
                material={MAT.white}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.post004.geometry}
                material={MAT.black}
                position={[0, 0.2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rope004.geometry}
                material={MAT.red}
                position={[0, 1.2, 0]}
            />
        </group>
    )
}