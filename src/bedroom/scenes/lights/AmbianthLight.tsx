import { useControls } from "leva"

export default function AmbiantLight () {

    const { color, intensity } = useControls('ambiantLight', {
            color: '#a14d22',
            intensity: {
                value: 2.5,
                min: 0,
                max: 15
            }
        })

    return <ambientLight 
        intensity={ intensity }
        color={ color }
    />
}