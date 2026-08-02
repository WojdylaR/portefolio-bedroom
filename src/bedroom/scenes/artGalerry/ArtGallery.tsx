import WallFrame from './module/basics/WallFrame'
import FloorFrame from './module/basics/FloorFrame'
import Wall from './module/basics/Wall'
import FloorCross from './module/basics/FloorCross'
import { Vector3 } from 'three'
import { useRef } from 'react'
import FloorStraight from './module/basics/FloorStraight'
import FloorPedestral from './module/basics/FloorPedestral'



export default function ArtGallery () {

    const size = useRef<number>(4.6).current

    return ( <group position={[5, 0,  - 8] } rotation-y={ Math.PI / 2}>
                
            <WallFrame position={new Vector3(size , 0, 0)}/>
            <Wall position={new Vector3(0 , 0, 0)}/>
            <FloorFrame  position={new Vector3(size, 0, 0)}/>
            <FloorCross rotationY={- Math.PI / 2}  position={new Vector3(0, 0, 0)}/>
            <FloorStraight rotationY={- Math.PI / 2}  position={new Vector3(0, 0, size)}/>
            <FloorPedestral rotationY={- Math.PI / 2}  position={new Vector3(size, 0, size)}/>
        </group>
    )
}
