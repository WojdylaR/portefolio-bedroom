import Seat from "./mesh/Seat"

const ROWS = 10
const SEATS_PER_ROW = 10

const SEAT_SPACING = 0.9   // largeur siège + jeu
const ROW_DEPTH    = 1.0   // écartement avant/arrière
const ROW_RISE     = 0.35  // hauteur de marche
const STEP_HEIGHT  = 1.0   // épaisseur visuelle de la marche

// Source de vérité : rang + place -> position au sol.
// Utilisée pour placer le siège ET, plus tard, la caméra.
export const seatPosition = (row: number, i: number): [number, number, number] => [
  (i - (SEATS_PER_ROW - 1) / 2) * SEAT_SPACING,  // x : place dans le rang, centrée
  row * ROW_RISE,                                 // y : pente
  row * ROW_DEPTH,                                // z : recul (scène vers -z)
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
  </>
}