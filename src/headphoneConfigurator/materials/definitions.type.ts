import type { MaterialId } from '../store/configurator'

export type MaterialParams = {
  roughness: number
  metalness: number
}

export const MATERIALS: Record<MaterialId, MaterialParams> = {
  leather:      { roughness: 0.75, metalness: 0.0 },
  brushedMetal: { roughness: 0.35, metalness: 1.0 },
  softTouch:    { roughness: 0.85, metalness: 0.0 },
}