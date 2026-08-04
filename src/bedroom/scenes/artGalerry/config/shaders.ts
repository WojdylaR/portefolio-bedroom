import type { ShaderModule } from '../artGalery.type'

import woodVertex from '../shaders/wood/vertex.glsl'
import woodFragment from '../shaders/wood/fragment.glsl'

import wobblyVertex from '../shaders/wobblySphere/vertex.glsl'
import wobblyFragment from '../shaders/wobblySphere/fragment.glsl'

import terrainVertex from '../shaders/terrain/vertex.glsl'
import terrainFragment from '../shaders/terrain/fragment.glsl'


import leatherVertex from '../shaders/leather/vertex.glsl'
import leatherFragment from '../shaders/leather/fragment.glsl'

import brushedMetalVertex from '../shaders/brushedMetal/vertex.glsl'
import brushedMetalFragment from '../shaders/brushedMetal/fragment.glsl'

export const SHADERS = {
  wood: { id: 'wood', vertexShader: woodVertex, fragmentShader: woodFragment },
  wobbly: { id: 'wobbly', vertexShader: wobblyVertex, fragmentShader: wobblyFragment },
  terrain: { id: 'terrain', vertexShader: terrainVertex, fragmentShader: terrainFragment },
  leather: { id: 'leather', vertexShader: leatherVertex, fragmentShader: leatherFragment },
  brushedMetal: { id: 'brushedMetal', vertexShader: brushedMetalVertex, fragmentShader: brushedMetalFragment },
} as const satisfies Record<string, ShaderModule>

export type ShaderId = keyof typeof SHADERS