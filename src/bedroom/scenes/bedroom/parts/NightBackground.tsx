import { useMemo, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uInner;
  uniform vec3 uOuter;
  uniform float uAspect;
  uniform vec2 uCenter;
  uniform float uRadius;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 p = vUv - uCenter;
    p.x *= uAspect;
    float t = smoothstep(0.0, uRadius, length(p));
    gl_FragColor = vec4(mix(uInner, uOuter, t), 1.0);
    #include <colorspace_fragment>
    gl_FragColor.rgb += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  }
`

export function NightBackground() {
  const size = useThree((s) => s.size)

  const { inner, outer, center, radius } = useControls('Background', {
    inner:  '#1e1b33',
    outer:  '#08070e',
    center: { value: [0.48, 0.55], step: 0.01 },
    radius: { value: 0.8, min: 0.2, max: 2, step: 0.01 },
  })

  const uniforms = useMemo(() => ({
    uInner:  { value: new THREE.Color() },
    uOuter:  { value: new THREE.Color() },
    uAspect: { value: 1 },
    uCenter: { value: new THREE.Vector2() },
    uRadius: { value: 0.8 },
  }), [])

  useEffect(() => {
    uniforms.uAspect.value = size.width / size.height
  }, [size, uniforms])

  useEffect(() => {
    uniforms.uInner.value.set(inner)
    uniforms.uOuter.value.set(outer)
    uniforms.uCenter.value.set(center[0], center[1])
    uniforms.uRadius.value = radius
  }, [inner, outer, center, radius, uniforms])

  return (
    <mesh renderOrder={-1000} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}