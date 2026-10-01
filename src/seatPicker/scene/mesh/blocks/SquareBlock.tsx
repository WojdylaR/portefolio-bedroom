import { ROW_DEPTH,
    ROW_RISE,
    ROWS_SQUARE,
    SEAT_SPACING,
    SEATS_PER_ROW_SQUARE,
    STEP_HEIGHT,
    type IBlockProps } from '../../../config/blocks'
import useAuditoriumScene from '../../../state/useAuditoriumScene'
import Seat from '../Seat'


export const seatPosition = (row: number, i: number): [number, number, number] => [
  (i - (SEATS_PER_ROW_SQUARE - 1) / 2) * SEAT_SPACING,
  row * ROW_RISE,
  row * ROW_DEPTH + ROW_DEPTH / 2 - 0.8,
]

export default function SquareBlock ( { position, rotation, id }: IBlockProps ) {

    const state = useAuditoriumScene(state => state.state)
    const setCameraPosition = useAuditoriumScene(state => state.setCameraPosition)
    const setState = useAuditoriumScene(state => state.setState)
    const setCameraTarget = useAuditoriumScene(state => state.setCameraTarget)

    const seats = []
    const steps = []

    for (let row = 0; row < ROWS_SQUARE; row++) {
        steps.push(
          <mesh
            key={row}
            position={[0, row * ROW_RISE - STEP_HEIGHT / 2, row * ROW_DEPTH]}
          >
            <boxGeometry args={[SEATS_PER_ROW_SQUARE * SEAT_SPACING, STEP_HEIGHT, ROW_DEPTH]} />
            <meshStandardMaterial color="#585656" />
          </mesh>
        )

        for (let i = 0; i < SEATS_PER_ROW_SQUARE; i++) {
          seats.push(
            <Seat
              key={`${row}-${i}`}
              position={ seatPosition(row, i)}
            />
          )
        }
      }

    return ( <group
        onPointerEnter={(e) => {
            if (state === 'idle') {
                    e.stopPropagation()
                    document.body.style.cursor = 'pointer'
                }
            }}
            
        onPointerLeave={() =>{
            if (state === 'idle') {
                    document.body.style.cursor = 'default'
                }
            }} 
            position={ position } 
            rotation-y={ rotation }

            onClick={ (e) => {
                 e.stopPropagation()
                if(state === 'idle') {
                    setState('block-focus')
                    console.log(state)
                    setCameraTarget(position)
                }
            }}
        >

        {steps}
        {seats}

    </group>
    )
}