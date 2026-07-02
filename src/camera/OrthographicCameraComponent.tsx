
import { OrthographicCamera } from '@react-three/drei'

export default function OrthographicCameraComponent ( ) {

    return <OrthographicCamera 
        makeDefault
        zoom={100} 
        position={ [ 8, 8, 6 ]}
        near={0.1} 
        far={200} 
        
    />
}