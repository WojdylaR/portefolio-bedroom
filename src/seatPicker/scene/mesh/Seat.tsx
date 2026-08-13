import { useGLTF } from "@react-three/drei"
import { useState } from "react"
import useAuditoriumScene from "../../state/useAuditoriumScene"
import { OFFSET_HEIGHT } from "../Auditorium"

export default function Seat({ position } : { position: [number, number, number] }) {

    const [ color, setColor ] = useState<null | string>(null)

    const { nodes } : { nodes: any} = useGLTF('./seatPicker/seat.glb')

    const setCameraPosition = useAuditoriumScene(state => state.setCameraPosition)
    const setFocus = useAuditoriumScene(state => state.setFocus)
    const resetFocus = useAuditoriumScene(state => state.resetFocus)

    return <group
                rotation-y={ Math.PI / 2 }
                position={ position }
                scale={3.5}
                onPointerEnter={(e) => {
                        setColor('#2ea361')
                        e.stopPropagation()
                        document.body.style.cursor = 'pointer'
                    }} 
                onPointerLeave={() =>{
                        setColor(null)
                        document.body.style.cursor = 'default'
                    }}
                onClick={(e) => {
                        e.stopPropagation()
                        console.log(position)
                    setFocus()
                    setCameraPosition([position[0], position[1] + OFFSET_HEIGHT, position[2]])
                }}
                onPointerMissed={ () => {
                    resetFocus()
                }}
            >
            <mesh castShadow receiveShadow geometry={nodes.seat_1.geometry}>
                <meshStandardMaterial color={color || 'black'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.seat_2.geometry}>
                <meshStandardMaterial color={color || 'red'} />
            
            </mesh>
        </group>
}