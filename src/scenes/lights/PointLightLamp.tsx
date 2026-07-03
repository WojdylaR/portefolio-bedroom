import { useControls } from 'leva'

export default function PointLightLamp () {

    const { color, intensity, position } = useControls('pointLight', {
        color: '#ff9d5c ',
        intensity: {
            value: 12,
            min: 0,
            max: 15
        },
        position: {
            value: { x: 0.5, y: 3, z: 0.5 },
            step: 0.1
        }
    })

    return <pointLight
            intensity={ intensity }
            castShadow
            color={ color }
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
            shadow-bias={-0.0005}
            position={[position.x, position. y, position.z]}
        />
}