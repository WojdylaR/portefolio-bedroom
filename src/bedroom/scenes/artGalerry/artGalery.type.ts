import type { FC } from "react"
import FloorCross from "./module/basics/FloorCross"
import FloorStraight from "./module/basics/FloorStraight"
import FloorFrame from "./module/basics/FloorFrame"
import FloorPedestal from "./module/basics/FloorPedestal"
import Wall from "./module/basics/Wall"
import WallFrame from "./module/basics/WallFrame"
import * as THREE from 'three'
import FloorT from "./module/basics/FloorT"
import FloorAngle from "./module/basics/FloorAngle"
import FloorEnd from "./module/basics/FloorEnd"
import MiniFloorStraight from "./module/basics/MiniFloorStraight"
import MiniWall from "./module/basics/MiniWall"


export type ShaderModule = {
  id: string
  fragmentShader: string
  vertexShader: string
  uniforms?: () => Record<string, THREE.IUniform>  // ← objet, pas fonction
  resolution?: number       // taille du render target, défaut décidé côté rendu
}

export type TileType =
  | 'floor-cross'
  | 'floor-straight'
  | 'mini-floor-straight'
  | 'floor-t'
  | 'floor-angle'
  | 'floor-end'
  | 'floor-frame'
  | 'floor-pedestal'
  | 'wall'
  | 'mini-wall'
  | 'wall-frame'

export type TileProps = {
  position: [number, number, number]
  rotation: number  
  art?: ShaderModule
  id?: string | null
}

export type Tile = TileProps & {
  type: TileType
}

export type SideEntry = { type: TileType; art?: ShaderModule }

export type DirectionType = {
    north?: SideEntry
    east?: SideEntry
    south?: SideEntry
    west?: SideEntry
    floor: SideEntry
    floorRotation?: number
    position: {
        x: number
        z: number
    }
}

export const TILES: Record<TileType, FC<TileProps>> = {
  'floor-cross': FloorCross,
  'floor-straight': FloorStraight,
  'mini-floor-straight': MiniFloorStraight,
  'floor-t': FloorT,
  'floor-angle': FloorAngle,
  'floor-end': FloorEnd,
  'floor-frame': FloorFrame,
  'floor-pedestal': FloorPedestal,
  'wall': Wall,
  'mini-wall': MiniWall,
  'wall-frame': WallFrame,
}