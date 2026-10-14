import { useControls } from 'leva'

export default function PointLightBed ( { state } : { state : boolean } ) {

    const { color, intensity, position } = useControls('pointLight', {
        color: '#ff9100 ',
        intensity: {
            value: 17,
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