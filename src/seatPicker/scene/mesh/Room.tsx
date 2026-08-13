export default function Room() {

    return <group>
        <mesh position-y={ - 1}>
            <boxGeometry args={ [20, 1 , 50] }/>
            <meshStandardMaterial color={"#efb971"}/>
        </mesh>
    </group>
}