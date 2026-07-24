import { useControls } from 'leva'

export default function PointLightLamp () {

    const { color, intensity, position } = useControls('pointLight', {
        color: '#8b4d20 ',
        intensity: {
            value: 120,
            min: 0,
            max: 200
        },
        position: {
            value: { x: -1, y: 3, z: 0. },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ intensity }
            color={ color }
            position={[position.x, position. y, position.z]}
        />
}