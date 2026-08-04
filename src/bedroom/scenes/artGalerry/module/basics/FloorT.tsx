import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"


export default function FloorT ( { position, rotation,  } : TileProps) {

    const { nodes, materials } : { nodes: any, materials : any }= useGLTF('/bedroom/artGallery/floor-t.glb')

    return ( 
        <group position={ position } rotation-y={ rotation }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['floor-t'].geometry}
                material={materials['floor-t_Material']}
            />  
        </group>
    )
}