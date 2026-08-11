// useShaderUniforms.ts
import { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ShaderModule } from '../artGalery.type'

export function useShaderUniforms(art?: ShaderModule) {
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    ...art?.uniforms?.(),
  }), [art])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
  })

  return uniforms
}