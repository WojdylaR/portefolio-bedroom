import type { DirectionType, Tile } from "../artGalery.type"


const SIZE = 4.6


export default function moduleConstructor ({ floor, north, east, south, west, position, floorRotation } : DirectionType) : Tile[] {

    const P: [number, number, number] = [position.x * SIZE, 0 , position.z * SIZE]

    const out: Tile[] = [{...floor, position: P, rotation: floorRotation || 0}]

    north && out.push({...north, position: P, rotation: 0})
    east && out.push({...east, position: P, rotation: - Math.PI / 2 })
    south && out.push({...south, position: P, rotation:  Math.PI })
    west && out.push({...west, position: P,rotation: Math.PI / 2})


    return out
}