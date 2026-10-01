import { useControls } from 'leva'

export default function PointLightLamp ( { state } : { state : boolean } ) {

    const { color, intensity, position } = useControls('pointLight', {
        color: '#8b4d20 ',
        intensity: {
            value: 100,
            min: 0,
            max: 200
        },
        position: {
            value: { x: -1, y: 3, z: 0. },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ state ? intensity : 0 }
            color={ color }
            position={[position.x, position. y, position.z]}
        />
}