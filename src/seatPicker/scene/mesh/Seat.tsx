import { useGLTF } from "@react-three/drei"
import { useState } from "react"
import useAuditoriumScene from "../../state/useAuditoriumScene"
import { OFFSET_HEIGHT } from "../../config/blocks"
export default function Seat({ position, rotation = 0 } : { position: [number, number, number], rotation?: number }) {

    const [ color, setColor ] = useState<null | string>(null)

    const { nodes } : { nodes: any} = useGLTF('./seatPicker/seat.glb')

    const setCameraPosition = useAuditoriumScene(state => state.setCameraPosition)
    const setState = useAuditoriumScene(state => state.setState)
    const resetFocus = useAuditoriumScene(state => state.resetFocus)

    return <group
                rotation-y={ Math.PI / 2 + rotation }
                position={ position }
                scale={3.5}
                onPointerEnter={(e) => {
                    
                    document.body.style.cursor = 'pointer'
                    const { state } = useAuditoriumScene.getState()
                    if (state === 'block-focus') {
                            e.stopPropagation()
                            setColor('#2ea361')
                        }
                    }}
                    
                onPointerLeave={(e) =>{
                            e.stopPropagation()
                            setColor(null)
                            document.body.style.cursor = 'default'
                    }}

                onClick={(e) => {
                    console.time('click')
                    
                    const { state } = useAuditoriumScene.getState()
                        if (state === 'block-focus') {
                            e.stopPropagation()
                            setState('seat-focus')
                            setCameraPosition([position[0], position[1] + OFFSET_HEIGHT, position[2]])
                        }

                }}
                onPointerMissed={(e) => 
                    resetFocus()
                }
            >
            <mesh castShadow receiveShadow geometry={nodes.seat_1.geometry}>
                <meshStandardMaterial color={color || 'black'} />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.seat_2.geometry}>
                <meshStandardMaterial color={color || 'red'} />
            
            </mesh>
        </group>
}