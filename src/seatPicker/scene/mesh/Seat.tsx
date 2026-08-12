import { useGLTF } from "@react-three/drei"

export default function Seat({ position } : { position: [number, number, number] }) {

    const {nodes, materials} : { nodes: any, materials: any} = useGLTF('./seatPicker/seat.glb')

    return <group rotation-y={Math.PI / 2} position={position} scale={3.5} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.seat_1.geometry} material={materials.mat23} />
        <mesh castShadow receiveShadow geometry={nodes.seat_2.geometry} material={materials.mat8} />
    </group>
}