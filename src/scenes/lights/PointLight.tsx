import { useControls } from 'leva'
import { PivotControls } from '@react-three/drei'

export default function PointLight () {

    const { color, intensity } = useControls('pointLight', {
        color: '#fff',
        intensity: {
            value: 5,
            min: 0,
            max: 15
        }
    })

    return <PivotControls ><pointLight
            position={ [0, 0, 0]}
            color={color}
            intensity={ intensity }
        />
    </PivotControls>
}