import { useControls } from "leva"

export default function AmbiantLight () {

    const { color, intensity } = useControls('ambiantLight', {
            color: '#c4a793',
            intensity: {
                value: 3.8,
                min: 0,
                max: 15
            }
        })

    return <ambientLight 
        intensity={ intensity }
        color={ color }
    />
}