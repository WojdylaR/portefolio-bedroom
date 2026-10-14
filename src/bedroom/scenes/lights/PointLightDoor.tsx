import { useControls } from 'leva'

export default function PointLightDoor ( { state } : { state: boolean }) {

    const { color, intensity, position } = useControls('pointLightDoor', {
        color: '#b3cbfc',
        intensity: {
            value: 35,
            min: 0,
            max: 200
        },
        position: {
            value: { x: 4.2, y: 3.4, z: -4.1 },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ state ? intensity : 0 }
            color={ color }
            position={[position.x, position. y, position.z]}
        />
}