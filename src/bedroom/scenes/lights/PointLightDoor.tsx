import { useControls } from 'leva'

export default function PointLightDoor ( { state } : { state: boolean }) {

    const { color, intensity, position } = useControls('pointLightDoor', {
        color: '#9fbfff',
        intensity: {
            value: 60,
            min: 0,
            max: 200
        },
        position: {
            value: { x: 5.2, y: 3.9, z: -3.5 },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ state ? intensity : false }
            color={ color }
            position={[position.x, position. y, position.z]}
        />
}