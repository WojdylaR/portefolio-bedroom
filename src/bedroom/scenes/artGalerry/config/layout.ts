import type { DirectionType } from "../artGalery.type"
import { SHADERS } from "./shaders"


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
    { floor: {type: 'floor-end'},position: { x: 3, z: -1 }, east:{type: 'wall-frame', art: SHADERS.wood}},
    { floor: {type: 'floor-pedestal', art: SHADERS.wobbly},position: { x: 3, z: -2 }, east:{type: 'wall'}, north:{type: 'wall'}},


    { floor: {type: 'floor-end'}, floorRotation: Math.PI,position: { x: 3, z: 1 }, east:{type: 'wall-frame', art: SHADERS.wood}},
    { floor: {type: 'floor-frame',  art: SHADERS.wood}, floorRotation: -Math.PI / 2,position: { x: 3, z: 2 }, east:{type: 'wall',}},
]