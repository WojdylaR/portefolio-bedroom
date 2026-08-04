import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function FloorAngle ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-angle.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-angle'].geometry}
                material={materials['floor-angle_Material']}
            />
        </group>
    )
}