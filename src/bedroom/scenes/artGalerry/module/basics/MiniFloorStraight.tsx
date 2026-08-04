import { useGLTF } from "@react-three/drei"
import type { TileProps } from "../../artGalery.type"
import { MAT } from "../materials"

export default function MiniFloorStraight({ position, rotation }: TileProps) {

    const { nodes }: { nodes: any } = useGLTF('/bedroom/artGallery/mini-floor-straight.glb')


    return (
        <group position={position} rotation-y={rotation}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor001.geometry}
                material={MAT.white}
            >
                
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.post001.geometry}
                position={[0, 0.2, 0]}
                material={MAT.black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.rope001.geometry}
                position={[0, 1, 0]}
                material={MAT.red}
            />
        </group>
    )
}