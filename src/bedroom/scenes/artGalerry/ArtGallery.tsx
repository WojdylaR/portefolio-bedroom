import { useGLTF } from '@react-three/drei'
import WallFrame from './module/basics/WallFrame'
import { Vector3 } from 'three'

export default function ArtGallery () {

    return ( <group position={[4, 0,  - 10] } rotation-y={ Math.PI / 2}>
                
            <WallFrame position={new Vector3(0, 0, 0)}/>
            <WallFrame  position={new Vector3(3, 0, 0)}/>
            <WallFrame rotationY={- Math.PI / 2}  position={new Vector3(3, 0, 0)}/>
        </group>
    )
}
