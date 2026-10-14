import { useControls } from "leva"

export default function AmbiantLight () {

    const { color, intensity } = useControls('ambiantLight', {
            color: '#f5e8dc',
            intensity: {
                value: 0.5,
                min: 0,
                max: 15
            }
        })

    return <ambientLight 
        intensity={ intensity }
        color={ color }
    />
}