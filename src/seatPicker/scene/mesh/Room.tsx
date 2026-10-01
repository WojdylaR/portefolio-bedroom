export default function Room() {

    return <group>
        <mesh position-y={ - 1}>
            <boxGeometry args={ [120, 1 , 150] }/>
            <meshStandardMaterial color={"#efb971"}/>
        </mesh>
    </group>
}