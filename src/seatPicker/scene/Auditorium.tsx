import Room from "./mesh/Room"
import Scene from "./mesh/Scene"
import Seat from "./mesh/Seat"

const ROWS = 10
const SEATS_PER_ROW = 10

const SEAT_SPACING = 1 
const ROW_DEPTH    = 1.70  
const ROW_RISE     = 0.35 
const STEP_HEIGHT  = 1.0 
export const OFFSET_HEIGHT = 0.1

export const seatPosition = (row: number, i: number): [number, number, number] => [
  (i - (SEATS_PER_ROW - 1) / 2) * SEAT_SPACING,
  row * ROW_RISE,
  row * ROW_DEPTH + ROW_DEPTH / 2 - 0.8, // Mettre le siege au fond de la ranger
]

export default function Auditorium() {
  const seats = []
  const steps = []

  for (let row = 0; row < ROWS; row++) {
    steps.push(
      <mesh
        key={row}
        position={[0, row * ROW_RISE - STEP_HEIGHT / 2, row * ROW_DEPTH]}
      >
        <boxGeometry args={[SEATS_PER_ROW * SEAT_SPACING, STEP_HEIGHT, ROW_DEPTH]} />
        <meshStandardMaterial color="#585656" />
      </mesh>
    )

    for (let i = 0; i < SEATS_PER_ROW; i++) {
      seats.push(
        <Seat
          key={`${row}-${i}`}
          position={seatPosition(row, i)}
        />
      )
    }
  }

  return <>
    {steps}
    {seats}

    <Scene />
    <Room />
  </>
}