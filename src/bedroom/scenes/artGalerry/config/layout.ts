import type { DirectionType, Tile } from "../artGalery.type"
import moduleConstructor from "../module/moduleConstructor"
import { SHADERS } from "./shaders"
import * as THREE from 'three'


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
    { floor: {type: 'mini-floor-straight'}, position: { x: 2, z: 0 }/* , north:{type: 'mini-wall'} */},
    { floor: {type: 'floor-straight'}, position: { x: 3, z: 0 }},
    
    { floor: {type: 'floor-pedestal', art:{...SHADERS.wobbly, uniforms: () => ({
      uColor1: new THREE.Uniform(new THREE.Color('#D45A25')),
      uColor2: new THREE.Uniform(new THREE.Color('#7A2719')),
      uOffset: new THREE.Uniform(2),
    })}},position: { x: 3, z: -1 }},
    { floor: {type: 'floor-pedestal', art:{...SHADERS.wobbly, uniforms: () => ({
      uColor1: new THREE.Uniform(new THREE.Color('#6B8F47')),
      uColor2: new THREE.Uniform(new THREE.Color('#FFFFFF')),
      uOffset: new THREE.Uniform(1),
    })}},position: { x: 3, z: 1 }},




    { floor: {type: 'floor-t'}, floorRotation: - Math.PI / 2,position: { x: 4, z: 0 }, east:{type: 'wall-frame', art: SHADERS.wood}},
    { floor: {type: 'floor-end'},position: { x: 4, z: -1 }, east:{type: 'wall-frame', art: SHADERS.leather}},
    { floor: {type: 'floor-frame',  art: {...SHADERS.terrain, uniforms: () => ({
      uWater: new THREE.Uniform(new THREE.Color('#376D7A')),
      uSand: new THREE.Uniform(new THREE.Color('#211E22')),
      uGrass: new THREE.Uniform(new THREE.Color('#7A2719')),
      uRock: new THREE.Uniform(new THREE.Color('#D45A25')),
      uSnow: new THREE.Uniform(new THREE.Color('#EFE6D7')),
    })}},position: { x: 4, z: -2 }, east:{type: 'wall'}, north:{type: 'wall',}},


    { floor: {type: 'floor-end'}, floorRotation: Math.PI,position: { x: 4, z: 1 }, east:{type: 'wall-frame', art: SHADERS.brushedMetal}},
    { floor: {type: 'floor-frame',  art: {...SHADERS.terrain, uniforms: () => ({
      uWater: new THREE.Uniform(new THREE.Color('#3a35ce')),
      uSand: new THREE.Uniform(new THREE.Color('#C2A878')),
      uGrass: new THREE.Uniform(new THREE.Color('#6B8F47')),
      uRock: new THREE.Uniform(new THREE.Color('#6B6B6B')),
      uSnow: new THREE.Uniform(new THREE.Color('#FFFFFF')),
    })}},position: { x: 4, z: 2 }, east:{type: 'wall',}},
]

export const FLAT_TILES: Tile[] = CELLS.flatMap(moduleConstructor)