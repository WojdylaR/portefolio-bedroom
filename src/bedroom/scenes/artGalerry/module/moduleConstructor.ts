import type { DirectionType, Tile } from "../artGalery.type"

export const SIZEMODULE = 4.6

export default function moduleConstructor ({ floor, north, east, south, west, position, floorRotation } : DirectionType) : Tile[] {

    const P: [number, number, number] = [position.x * SIZEMODULE, 0 , position.z * SIZEMODULE]

    const out: Tile[] = [{...floor, position: P, rotation: floorRotation || 0, id: floor.art ? `${position.x},${position.z},floor` : null}]

    north && out.push({...north, position: P, rotation: 0, id: north.art ? `${position.x},${position.z},north` : null})
    east && out.push({...east, position: P, rotation: - Math.PI / 2, id: east.art ? `${position.x},${position.z},east` : null })
    south && out.push({...south, position: P, rotation:  Math.PI, id: south.art ? `${position.x},${position.z},south` : null })
    west && out.push({...west, position: P,rotation: Math.PI / 2, id: west.art ? `${position.x},${position.z},west` : null})


    return out
}