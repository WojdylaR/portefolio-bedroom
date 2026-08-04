import { useControls } from 'leva'

export default function PointLightDoor () {

    const { color, intensity, position } = useControls('pointLightDoor', {
        color: '#a8c5ff',
        intensity: {
            value: 100,
            min: 0,
            max: 200
        },
        position: {
            value: { x: 5.2, y: 3.9, z: -3.5 },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ intensity }
            color={ color }
            position={[position.x, position. y, position.z]}
        />
}