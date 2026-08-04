import { useControls } from 'leva'

export default function ArtGaleryLight() {

    const { color, intensity, position } = useControls('pointArt', {
        color: '#e8f0ff',
        intensity: {
            value: 20,
            min: 0,
            max: 200
        },
        position: {
            value: { x: 5.2, y: 3.9, z: -19 },
            step: 0.1
        }
    })

    return (
        <>
            <pointLight
                intensity={ intensity }
                color={ color }
                position={[14, 3.9, -19]}
            />
            <pointLight
                intensity={ intensity }
                color={ color }
                position={[-1, 3.9, -19]}
            />
            <pointLight
                intensity={ intensity }
                color={ color }
                position={[5.2, 3.9, -19]}
            />
        </>
    )
}