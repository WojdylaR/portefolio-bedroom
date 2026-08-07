import type { DirectionType, Tile } from "../artGalery.type"
import moduleConstructor from "../module/moduleConstructor"
import { SHADERS } from "./shaders"


export const GALLERY_TRANSFORM = {
  position: [2.85, -2.3, -6.7] as [number, number, number],
  rotationY: Math.PI / 2
}

/*  | 'floor-cross'
  | 'floor-straight'
  | 'mini-floor-straight'
  | 'floor-t'
  | 'floor-angle'
  | 'floor-end'
  | 'floor-frame'
  | 'floor-pedestal'
  | 'wall'
  | 'wall-frame' */

export const CELLS: DirectionType[]= [
    { floor: {type: 'mini-floor-straight'}, position: { x: 0, z: 0 }/* , north:{type: 'mini-wall'} */},
    { floor: {type: 'mini-floor-straight'}, position: { x: 1, z: 0 }/* , north:{type: 'mini-wall'} */},
    { floor: {type: 'mini-floor-straight'}, position: { x: 2, z: 0 }},




    { floor: {type: 'floor-t'}, floorRotation: - Math.PI / 2,position: { x: 3, z: 0 }, east:{type: 'wall-frame', art: SHADERS.wood}},
    { floor: {type: 'floor-end'},position: { x: 3, z: -1 }, east:{type: 'wall-frame', art: SHADERS.leather}},
    { floor: {type: 'floor-pedestal', art: SHADERS.wobbly},position: { x: 3, z: -2 }, east:{type: 'wall'}, north:{type: 'wall-frame', art: SHADERS.brushedMetal}},


    { floor: {type: 'floor-end'}, floorRotation: Math.PI,position: { x: 3, z: 1 }, east:{type: 'wall-frame', art: SHADERS.brushedMetal}},
    { floor: {type: 'floor-frame',  art: SHADERS.wood}, floorRotation: -Math.PI / 2,position: { x: 3, z: 2 }, east:{type: 'wall',}},
]

export const FLAT_TILES: Tile[] = CELLS.flatMap(moduleConstructor)