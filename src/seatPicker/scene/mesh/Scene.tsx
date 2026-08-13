import { Vector3 } from "three"

export const SCENE_POSITION = new Vector3(0, 0, -10)

export default function Scene() {

    return <group position={ SCENE_POSITION }>
        <mesh>
            <boxGeometry args={ [15, 1, 10] }/>
            <meshStandardMaterial color={'#fff'}/>
        </mesh>
        <mesh position-y={ 1 }>
            <boxGeometry args={ [1, 1, 1] } />
            <meshStandardMaterial color={'black'} />
        </mesh>
    </group>
}