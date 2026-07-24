import { useControls } from "leva"

export default function AmbiantLight () {

    const { color, intensity } = useControls('ambiantLight', {
            color: '#92440d',
            intensity: {
                value: 1,
                min: 0,
                max: 15
            }
        })

    return <ambientLight 
        intensity={ intensity }
        color={ color }
    />
}