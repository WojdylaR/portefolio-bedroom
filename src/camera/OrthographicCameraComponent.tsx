
import { OrthographicCamera } from '@react-three/drei'
import { useControls } from 'leva'

export default function OrthographicCameraComponent ( ) {

    const { position } = useControls('camera', {
        position: {
            value: {
                x: 20,
                y: 15,
                z: 13
            },
            step: 1
        }
    })

    return <OrthographicCamera 
        makeDefault
        zoom={90} 
        position={ [ position.x, position.y, position.z ]}
        near={0.1} 
        far={200} 
        
    />
}