import { useControls } from 'leva'

export default function PointLightDoor () {

    const { color, intensity, position } = useControls('pointLightDoor', {
        color: '#a8c5ff',
        intensity: {
            value: 15,
            min: 0,
            max: 15
        },
        position: {
            value: { x: 5.2, y: 3.9, z: -3.5 },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ intensity }
            // castShadow
            color={ color }
            // shadow-mapSize-width={1024}
            // shadow-mapSize-height={1024}
            // shadow-camera-near={0.1}
            // shadow-camera-far={50}
            // shadow-bias={-0.0005}
            position={[position.x, position. y, position.z]}
        />
}