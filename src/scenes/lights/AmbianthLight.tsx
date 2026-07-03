import { useControls } from "leva"

export default function AmbiantLight () {

    const { color, intensity } = useControls('ambiantLight', {
            color: '#fff',
            intensity: {
                value: 0.4,
                min: 0,
                max: 15
            }
        })

    return <ambientLight 
        intensity={ intensity }
        color={ color }
    />
}